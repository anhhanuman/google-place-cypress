### Prerequisite
Please ensure you have node.js and npm in your machine, otherwise please install them
- install node.js (my version 14.17.3)
- install npm (my version 7.15.0) or you can use the yarn

### Install development dependencies
Clone this repository, open a new terminal and run command `npm install` to install the dev dependencies

### Explore project
- Important note there is no **.env** file because of security best practice. Please add this file (I sent you in email) to the root of this project `google-place-cypress/.env` 
- Open [cypress/plugins/index.js](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/plugins/index.js) to see the config `apiKey` to `Cypress.env`
- Open [cypress/integration/google-place.api.spec.ts](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/integration/google-place-api.spec.ts) to see the automated test cases details. About the question: how these tests could be automated
  using a tool of your choice? This requires `Cypress.io` and `Typescript/Javascript` and `Page Object Modal` programming language skills. See again ⭐️[Demo deliverables](https://youtu.be/60yYDs78s1c) if necessary for demonstration 
- Open [cypress/services/find-place-service.ts](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/services/find-place.service.ts) and [cypress/services/place-details.service.ts](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/services/place-details.service.ts) for the `design of methods` of find place and place details api calls
- Open [cypress/test-data/test-data.ts](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/test-data/test-data.ts) for the test data e.g. valid/invalid test data of scenarios
- Open [package.json](https://github.com/anhhanuman/google-place-cypress/blob/main/package.json) to see the dependencies and script e.g. **npm run test**
- Run command `npx cypress open` and click to test case to run in Cypress Browser mode
- Run command `npm run test` to run the test in headless browser mode
