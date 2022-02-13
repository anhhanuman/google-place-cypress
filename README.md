## Important Note
For safety of APIkey, I do not upload the **.env** file here. Please read [Automation](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/automation-test.md) for more details.

## Introduction
Welcome to google place API manual and automation test. Here are the details
- ⭐️ [Demo deliverables](https://youtu.be/60yYDs78s1c)
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
- **TypeScript/Javascript**
- **Github Actions**

## **Instruction**

| TASKS  | DESCRIPTION |
| ------------- | ------------- |
| [Manual Test](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/manual-test.md)  | Postman manual testing and requirement analysis  |
| [Automation](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/automation-test.md)  | API Automation|

## **Expected deliverables**

| Requirement                          | Description                                                           | Status |
|--------------------------------------|-----------------------------------------------------------------------|--------|
| [Collection executable test cases](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/integration/google-place-api.spec.ts) | Test cases are designed using Cypress bundled with Mocha              | `✅`    |
| How to execute tests manually        |                                                                       | `✅`    |
| Scripts                              | In terminal, run command:<br/> - npm run test<br/> - npx cypress open | `✅`    |
| CI/CD                                |                                                                       | `✅`    |


