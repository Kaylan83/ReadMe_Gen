// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Project Title 
  ${data.ProjectTitle}

  ## Project description
  ${data.describtion}

  ## Table of content:
  - usage
  ${data.use}

  - license
  ${data.license}

  - instalation
  ${data.installing}

  - testing: The application requires: 
  ${data.testing} testing.

  - contribution:
  ${data.contribute}

  ## Questions

  if you have any questions you can contact me directly at ${data.Email}. Also, you can find more applications at [${data.username}], (https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;
