const { app } = require('@azure/functions');
const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

app.http('GetResumeCounter', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('JavaScript HTTP trigger function processing a request for resume counter.');
        
        // Azure Table Storage connection info
        const account = process.env["AzureWebJobsStorage_STORAGE"];
        const accountKey = process.env["AzureWebJobsStorage_STORAGE_KEY"];
        const tableName = "visitors";
        
        // Configure table client
        const credential = new AzureNamedKeyCredential(account, accountKey);
        const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);
        
        try {
            // Try to create the table if it doesn't exist
            await client.createTable();
        } catch (error) {
            // Table likely already exists, continue
            context.log("Table exists or error creating table:", error.message);
        }
        
        // Entity details
        const partitionKey = "counter";
        const rowKey = "visits";
        
        try {
            // Try to get the counter entity
            const entity = await client.getEntity(partitionKey, rowKey);
            
            // Increment the counter
            entity.count++;
            
            // Update the entity
            await client.updateEntity(entity, "Merge");
            
            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ count: entity.count })
            };
        } catch (error) {
            // Entity doesn't exist, create it
            if (error.statusCode === 404) {
                const entity = {
                    partitionKey,
                    rowKey,
                    count: 1
                };
                
                await client.createEntity(entity);
                
                return {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({ count: 1 })
                };
            } else {
                // Unexpected error
                context.log("Error:", error);
                return {
                    status: 500,
                    body: JSON.stringify({ error: "An error occurred processing the counter." })
                };
            }
        }
    }
});