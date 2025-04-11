# Johnny Meintel - Resume Website

## Overview
This repository contains my personal resume website, built as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). It showcases my professional experience, education, certifications, and projects in cloud computing.

## Live Website
Visit the live website at: [https://johnnymeintel.com/](https://your-domain-here.com)

## Features
- Responsive design that works on mobile and desktop
- Clean navigation with smooth scrolling
- Sections for:
  - Professional information
  - Education history
  - IT certifications
  - Work experience
  - Cloud projects

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
- jQuery for interactive elements
- Hosted on Azure Storage with CDN (later moved to GitHub pages)

## Project Structure
```
.
├── css/
│   ├── default.css        # Base styling
│   ├── layout.css         # Layout components
│   ├── media-queries.css  # Responsive design rules
│   ├── fonts.css          # Font definitions
│   └── custom.css         # Custom styling overrides
├── js/
│   ├── modernizr.js       # Feature detection
│   ├── jquery.flexslider.js
│   ├── waypoints.js       # Scroll triggers
│   ├── jquery.fittext.js  # Text scaling
│   ├── init.js            # Initialization scripts
│   └── main.js            # Main JavaScript functionality
├── images/                # Contains all website images and logos
├── index.html             # Main HTML file
└── favicon.png            # Website favicon
```

## Cloud Architecture
This resume website is deployed using Azure services as part of the Cloud Resume Challenge:

- **Azure Storage**: Hosts the static website files
- **Azure CDN**: Provides HTTPS and improves global load times
- **Custom Domain**: Connected to Azure CDN endpoint
- **GitHub Actions**: CI/CD pipeline for automatic deployment

## Setup Instructions

### Local Development
1. Clone this repository
   ```
   git clone https://github.com/johnnymeintel/resumewebsite.git
   ```
2. Navigate to the project directory
   ```
   cd resumewebsite
   ```
3. Open `index.html` in your browser to view the site locally

### Deployment
This project is set up with GitHub Actions for CI/CD. The workflow is triggered on push to the main branch:

1. Make changes to your local repository
2. Commit and push to GitHub
   ```
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions will automatically deploy the updated site to Azure Storage

## Future Enhancements
- Add visitor counter using Azure Functions and CosmosDB
- Implement dark mode toggle
- Add contact form with serverless backend

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- [Cloud Resume Challenge](https://cloudresumechallenge.dev/) by Forrest Brazeal
- [Font Awesome](https://fontawesome.com/) for the icons
- [jQuery](https://jquery.com/) for UI components
