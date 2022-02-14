## Important Note
For the safety of APIkey, I do not upload the **.env** file here. Please read [Automation](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/automation-test.md) for more details.

## Introduction
Welcome to google place API manual and automation test. Here are the details
- ⭐️ [Demo deliverables](https://youtu.be/60yYDs78s1c)
- ⚒️ [Testing Strategy](#testing-strategy)
- 📖 [Technology stacks](#technology-stacks)
- ✅ [Instruction](#instruction)
---

## **Testing strategy**
- Grab the requirement thoroughly and analyse it via Postman
- Design manual test cases after getting results from Postman
- Design automation test by using the best practice Page Object Modal design pattern for easier maintenance and clean code
- Run automation test via a single command, see results visually in headless mode or browser mode
- Integrate to CI/CD

## **Technology stacks**
- **POSTMAN** : Using for sending requests and receive response manually
- **CYPRESS.IO**: Using for design and execute test cases automatically. Why use CYPRESS? Because it can be used for both UI and API automation
- **TypeScript/Javascript**
- **Github Actions**

## **Instruction**

| TASKS  | DESCRIPTION |
| ------------- | ------------- |
| [Manual Test](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/manual-test.md)  | Postman manual testing and requirement analysis  |
| [Automation](https://github.com/anhhanuman/google-place-cypress/blob/main/docs/automation-test.md)  | API Automation|

## **Expected deliverables**

| Requirement                                                                                                                                   | Description                                                                                                                                                                                                                                                                                           | Status    |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| [Collection executable test cases](https://github.com/anhhanuman/google-place-cypress/blob/main/cypress/integration/google-place-api.spec.ts) | Test cases are designed using Cypress bundled with Mocha                                                                                                                                                                                                                                              | `✅`       |
| How to execute tests manually                                                                                                                 | If it is a manual test case, you have to use Postman and send request and verify it mannually<br/><br/>If it is the automation test case, set `it.only` and run command `npx cypress open` to view a single test case running                                                                         | `✅`       |
| Scripts                                                                                                                                       | In terminal, run command:<br/> - npm run test<br/> - npx cypress open                                                                                                                                                                                                                                 | `✅`       |
| [CI/CD](https://github.com/anhhanuman/google-place-cypress/runs/5181942061?check_suite_focus=true)                                                                                                                                     | Use GitHub Actions in [main.yml](https://github.com/anhhanuman/google-place-cypress/blob/main/.github/workflows/main.yml) and you see all the test cases are **PASSED**.<br/><br/>Reference: https://github.com/cypress-io/github-action | `✅`    |


