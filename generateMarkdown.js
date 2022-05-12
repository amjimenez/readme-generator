const md = {
    generateMarkdown: function(data) {
        let content = '';
        content += this.renderLicenseBadge(data) + "\n\n";
        content += this.renderProjectTitle(data) + "\n\n";
        content += this.renderDescription(data) + "\n\n";
        content += this.renderTableOfContents(data) + "\n\n";
        content += this.renderInstallation(data) + "\n\n";
        content += this.renderUsage(data) + "\n\n";
        content += this.renderLicense(data) + "\n\n";
        content += this.renderContribute(data) + "\n\n";
        content += this.renderTests(data) + "\n\n";
        content += this.renderQuestions(data);

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
      
      renderLicense: function(data) {
        let returnStr = `## License`;

        if (!data.license) {
          return returnStr;
        }

        if (data.license == 'MIT License') {
          return returnStr + "\n" + '[MIT License](https://choosealicense.com/licenses/mit/)';
        }

        if (data.license == 'Apache License 2.0') {
          return returnStr + "\n" + '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
        }

        if (data.license == 'Mozilla Public License 2.0') {
          return returnStr + "\n" + '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
        }

        return returnStr;
      },

      renderLicenseBadge: function(data) {
          if (!data.license) {
            return '';
          }

          if (data.license == 'MIT License') {
            return '![MIT License](https://img.shields.io/badge/MIT%20License-Badge-red)';
          }

          if (data.license == 'Apache License 2.0') {
            return '![Apache License 2.0](https://img.shields.io/badge/Apache%20License%202.0-Badge-red)';
          }

          if (data.license == 'Mozilla Public License 2.0') {
            return '![Mozilla Public License 2.0](https://img.shields.io/badge/Mozilla%20Public%20License%202.0-Badge-red)';
          }

          return '';
      },


      renderContribute: function(data) {
        return `## Contributing` + "\n" + `${data.contribute}`;
      },
      
      renderTests: function(data) {
        return `## Tests` + "\n" + `${data.tests}`;

      },

      renderQuestions: function(data) {
          return `## Questions` + "\n" + `Please contact ${data.email} for questions.` + "\n\n" +
            `[https://github.com/${data.username}](https://github.com/${data.username})`;
      }
};

  module.exports = md;