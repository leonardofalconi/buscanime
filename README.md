# Buscanime

### Requirements

1. Node v22.0.0 or higher (recommended): [nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)
2. Yarn: `npm install --global yarn`
3. Npx: `npm install --global npx`

### Install

1. Install dependencies: `yarn`

### How to Run the Project

- Start in **development mode** and monitor changes: `yarn start`
- Run local in **production mode**: `yarn build` to generate the build first and then execute `yarn server` to start the host

### Development Tools

- eslint: `yarn lint`
- prettier: `yarn format`

### Unit Testing (Jest)

- Run **all files**: `yarn test`
- Generate the updated **coverage file**: `yarn test:coverage`

### End-to-end Testing (Cypress)

- Run all tests in **CLI mode**: `yarn cypress`
- To open the **Cypress interface** and run the tests manually: `yarn cypress:open`

### Storybook (Components Documentation)

- Start in **development mode** and monitor changes: `yarn storybook`
- Viewing all application components documentation locally in **production mode**: `yarn storybook:build` to generate the build first and then execute `yarn storybook:run` to start the host

### Environment Variables (Public)

We have an env file in the root `.env`
