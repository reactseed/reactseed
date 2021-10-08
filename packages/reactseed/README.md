# reactseed

[![LICENSE][LICENSE-image]][LICENSE-url] [![npm version][npm-image]][npm-url] [![npm downloads][download-image]][download-url]

[LICENSE-image]:https://img.shields.io/badge/license-BSD-blue.svg
[LICENSE-url]: https://github.com/reactseed/reactseed/blob/master/LICENSE

[npm-image]: https://img.shields.io/npm/v/@reactseed/cli.svg
[npm-url]: https://www.npmjs.com/package/@reactseed/cli

[download-image]: https://img.shields.io/npm/dm/@reactseed/cli.svg?style=flat-square
[download-url]: https://npmjs.org/package/@reactseed/cli

## Getting Started

React Seed is a best practices to create single-page React applications. It is extended based on [Create React App](https://github.com/facebook/create-react-app).

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

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App
**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx @reactseed/cli init
```

### Output
Running any of these commands will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── build
├── mock
├── public
├── src
│   ├── components
│   ├── pages
│   ├── routes
│   ├── serviceWorker.ts
│   └── setupProxy.js
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── config-overrides.js
├── paths.json
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

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:
- It is extended based on [Create React App](https://github.com/facebook/create-react-app),So React Seed contains all the features of [Create React App](https://github.com/facebook/create-react-app), See the section about [whats included](https://github.com/facebook/create-react-app#whats-included) for more information.

## License

React Seed is open source software [licensed as BDS](https://github.com/reactseed/reactseed/blob/master/LICENSE).