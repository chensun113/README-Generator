// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  
  ## Description
  ${data.des}
  ## Table Of Contents

  - [Questions](#Questions)
  - [License](#License)
  ![License](https://img.shields.io/badge/License%3A-${data.license}-darkgreen.svg)
 
  ${data.installation}
  ## Usage
  ${data.usage}
 
  ${data.contribution}

  ## Video Walkrhrough
  Please click  **[Here](https://www.youtube.com/watch?v=mrbm4JvxFzM)** to view a video on the application
https://www.youtube.com/watch?v=mrbm4JvxFzM
 ( both links work well.)
  ## Questions

  If you have any questions please feel free to reach out to me at the following email: *${data.email}*
  ## License
  ![License](https://img.shields.io/badge/License%3A-${data.license}-darkgreen.svg)
  `;
  };


module.exports = generateMarkdown;
