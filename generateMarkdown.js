// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

const md = {
    generateMarkdown: function(data) {
        let content = '';
        content += this.renderProjectTitle(data) + "\n\n";
        content += this.renderDescription(data) + "\n\n";
        content += this.renderTableOfContents(data) + "\n\n";
        content += this.renderInstallation(data) + "\n\n";
        content += this.renderUsage(data) + "\n\n";
        content += this.renderCredits(data) + "\n\n";
        content += this.renderLicense(data) + "\n\n";
        content += this.renderBadges(data) + "\n\n";
        content += this.renderFeatures(data) + "\n\n";
        content += this.renderContribute(data) + "\n\n";
        content += this.renderTests(data);
      
        return content;
      },
      
      renderProjectTitle: function(data) {
        return `# ${data.title}`;
      },
      
      renderDescription: function(data) {
        return `## Description` + "\n" + `${data.description}`;
      },
      
      renderTableOfContents: function(data) {
        if (data.contents) {
            let returnStr = '';
            let contents = data.contents.split(',');

            for (let i=0; i<contents.length; i++) {
                let link = contents[i].trim();
                returnStr += `- [${link}](#${link})`;

                if (i != contents.length - 1) {
                    returnStr += "\n";
                }
            }

          return `## Table of Contents (Optional)` + "\n" + `${returnStr}`;
        }
      
        return '';
      },
      
      renderInstallation: function(data) {
        return `## Installation` + "\n" + `${data.installation}`;
      },
      
      renderUsage: function(data) {
        return `## Usage` + "\n" + `${data.usage}`;
      },

      renderCredits: function(data) {
        let returnStr = '';
        let credits = data.credits.split(',');

        for (let i=0; i<credits.length; i++) {
            let author = credits[i].trim();
            returnStr += `- ${author}`;

            if (i != credits.length - 1) {
                returnStr += "\n";
            }
        }

        return `## Credits` + "\n" + `${data.credits}`;
      },
      
      renderLicense: function(data) {
        return `## License` + "\n" + `${data.license}`;
      },
      
      renderBadges: function(data) {
        return `## Badges` + "\n" + `${data.badges}`;
      },
      
      renderFeatures: function(data) {
        return `## Features` + "\n" + `${data.credits}`;
      },

      renderContribute: function(data) {
        return `## Contributing` + "\n" + `${data.contribute}`;
      },
      
      renderTests: function(data) {
        return `## Tests` + "\n" + `${data.tests}`;
      },

      renderQuestions: function(data) {
          return `## Questions` + "\n" +
            `[GitHub Profile - ${data.username}]('https://github.com/${data.username}')` + "\n" +
            `Please contact ${data.email} for questions.`
      }
};

  module.exports = md;