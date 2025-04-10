# React News Article Application

This is a simple React application that fetches news articles from an API, displays them in a list, and provides detailed information when a user clicks on an article. It also includes unit and UI tests, linting, and test coverage generation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
  - [Unit Tests](#unit-tests)
  - [UI Tests](#ui-tests)
- [Generating Test Coverage Reports](#generating-test-coverage-reports)
- [Linting](#linting)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package managers)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mr-chidex/news-article.git
   cd news-article
   ```

2. Install the dependencies using npm or Yarn:

- If you're using npm:

```bash
npm install
```

- If you're using npm:

```bash
yarn install

```

3. Set up your API key for the NY Times API:

- Go to NY Times Developer and sign up for an API key.
- Create a .env file at the root of your project and add the following line:

```bash
REACT_APP_SAMPLE_KEY=your-api-key-here

```

Make sure to replace your-api-key-here with the API key you obtained.

## Running the Application

Once dependencies are installed and the environment is set up:

1. Start the development server:

- If you're using npm:

```bash
npm start
```

- If you're using npm:

```bash
yarn start

```

This will start the development server, and you can view the app by navigating to http://localhost:3000 in your web browser

## Running Tests

This application includes unit tests and UI tests using Jest, React Testing Library, and Cypress.

### Unit Tests

1. To run unit tests, execute the following command:

- If you're using npm:

```bash
npm test
```

- If you're using npm:

```bash
yarn test

```

This will run the unit tests in watch mode. Press q to quit the test runner.

2. To run tests once and generate a test coverage report, use the following:

- If you're using npm:

```bash
npm test -- --coverage
```

- If you're using npm:

```bash
yarn test --coverage
```

This will generate a test coverage report in the terminal and create a coverage directory with detailed coverage information.

### UI Tests

UI tests are handled by Cypress. To run UI tests:

1. Open Cypress:

- If you're using npm:

```bash
npm run cypress
```

- If you're using npm:

```bash
yarn run cypress
```

2. This will open the Cypress UI where you can select and run UI tests. The tests are located in the cypress/integration folder.

## Generating Test Coverage Reports

The test coverage reports are generated when running unit tests with the --coverage flag. The report will be displayed in the terminal, and a detailed HTML version will be created in the coverage folder.

To view the HTML report:

1. Navigate to the coverage directory:

```bash
cd coverage

```

2. Open the index.html file in your browser to view the detailed coverage report.

## Linting

This project uses ESLint for linting to ensure code quality and consistency.

1. To run the linter, use the following command:

- If you're using npm:

```bash
npm run lint
```

- If you're using npm:

```bash
yarn run lint
```

This will analyze your code and display any linting errors or warnings in the terminal.

## Folder Structure

Here’s a quick overview of the folder structure:

```
/src
  /components         # Contains React components
  /services           # Contains API service functions
  /tests              # Contains unit and UI tests
  /assets             # Contains images, fonts, etc.
  /styles             # Global styles, including TailwindCSS setup
  App.js              # Main entry point of the app
  index.js            # Renders the app to the DOM
/public
  index.html          # Main HTML template
/.env                 # Environment variables (e.g., API keys)
/cypress              # Cypress tests folder
  /integration        # UI tests for Cypress
/package.json         # Project metadata and dependencies
/README.md            # Project documentation

```
