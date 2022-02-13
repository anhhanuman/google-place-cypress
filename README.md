## Introduction

Welcome to google place API manual and automation test. Here are the details

- ⚒️ [Testing Strategy](#testing-strategy)
- 📖 [Technology stacks](#technology-stacks)
- ✅ [Structure](#structure)
---

## **Testing strategy**
- Grab the requirement thoroughly and analise it via Postman
- Design manual test cases after get results from Postman
- Design automation test by using the best practice Page Object Modal design pattern for easier maintenance and clean code
- Run automation test via single command, see results visually in headless mode or browser mode
- Integrate to CI/CD

## **Technology stacks**
- **POSTMAN** : Using for sending requests and receive response manually
- **CYPRESS.IO**: Using for design and execute test cases automatically. Why using CYPRESS? Because it can be used for both UI and API automation
- **Github Actions

## **Structure**

| TASKS  | DESCRIPTION |
| ------------- | ------------- |
| [Manual Test](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/manual-test.md)  | Postman manual testing and requirement analysis  |
| [Automation](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/automation-test.md)  | API Automation|

### Prerequisite
Please ensure you have node.js and npm in your machine, otherwise please install them
- install node.js (my version 14.17.3)
- install npm (my version 7.15.0) or you can use the yarn

### Install development dependencies
Clone this repository, open a new terminal and run command `npm install` to install the dev dependencies



- Open cypress/integration/google-place.api.spec.ts to see the automated test cases details



