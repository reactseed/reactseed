---
id: getting-started
title: Getting Started
---

React Seed is a best practices to create single-page React applications. It is extended based on [Create React App](https://github.com/facebook/create-react-app).

### Trying Online

You can try Reactseed online on ⚡️ `stackblitz`. It runs in the browser, so it is almost identical to the local setup but doesn't require installing anything on your machine.

The supported template presets are:

- [Default Template](https://stackblitz.com/edit/reactseed-template)
- [Ant Design Template](https://stackblitz.com/edit/reactseed-template-antd)
- [Ant Design Template with i18n](https://stackblitz.com/edit/reactseed-template-antd-i18n)
- [Ant Design Template with vite](https://stackblitz.com/edit/reactseed-template-antd-vite)

### Quick Start

```sh
npx @reactseed/cli init
npm start
```

> If you use npm 5.1 or earlier, you can't use `npx`. Instead, install `@reactseed/cli` globally:

```sh
npm install -g @reactseed/cli
```

> Now you can run:

```sh
reactseed init
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx @reactseed/cli init
```

#### Project name

Enter your project name, the default is the current folder name.

```
? Your project name? (Default to current folder name) ()
```

#### Selecting a template

```sh
? The template you want to use?
   ❯ Defalut Template
     Ant Design Template (useRedux + useRequest)
     Ant Design Template using Vite (useRedux + useRequest)
     Ant Design Template (useRedux + useRequest + LinguiJs)
```

The supported template presets are:

- Default Template
- Ant Design Template
- Ant Design Template with i18n
- Ant Design Template with vite

#### Selecting a package manager

`ReactSeed` will use `Yarn` or `npm` to install dependencies, `Yarn` is used by default. E.g:

```sh
?Whether to install dependencies? (Y/n)
? Use Yarn? (Y/n)
```

### Output

Running any of these commands will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── public
├── src
│   ├── components
│   ├── pages
│   ├── routes
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── react.d.ts
│   ├── reportWebVitals.ts
│   ├── router.tsx
│   ├── setupTests.ts
│   └── setupProxy.js
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── craco.config.ts
├── README.md
├── tsconfig.json
└── package.json
```

No configuration or complicated folder structures, only the files you need to build your app.
Once the installation is done, you can open your project folder:

```
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.

### `npm run analyze` or `yarn analyze`

Analyzes JavaScript bundles using the source maps.

> You need to run `npm run build` or `yarn build` before analysis.
