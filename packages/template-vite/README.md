# `@reactseed/template-antd`

[![LICENSE][LICENSE-image]][LICENSE-url] [![npm version][npm-image]][npm-url] ![NPM-CI][CI-image]

[npm-image]: https://img.shields.io/npm/v/@reactseed/template-antd.svg
[npm-url]: https://www.npmjs.com/package/@reactseed/template-antd
[LICENSE-image]:https://img.shields.io/badge/license-BSD-blue.svg
[LICENSE-url]: https://github.com/reactseed/template-antd/blob/master/LICENSE
[CI-image]:https://github.com/reactseed/template-antd/workflows/NPM-CI/badge.svg

Vite Ant Design template for the React Seed(use vite in dev, production still use webpack).
## Quick start
```sh
npx @reactseed/cli init
```

> If you use npm 5.1 or earlier, you can't use `npx`. Instead, install `@reactseed/cli` globally:
 
```sh
npm install -g @reactseed/cli 
```

> Now you can run:

```sh
reactseed init
```

Select `Vite Ant Design Template`：
```sh
? The template you want to use?
  Defalut Template
❯ Vite Ant Design Template (useRedux + useRequest)
```

Then open [http://localhost:3099/](http://localhost:3099/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.


## What's inside?

### Project structure

Here are the top-level files and directories you'll see in an app created using this template.

```
@reactseed/template-antd
├── build
├── mock
├── public
├── src
│   ├── components
│   ├── configs
│   ├── hooks
│   ├── pages
│   ├── routes
│   ├── typings
│   ├── utils
│   ├── defaultSettings.js
│   ├── react-app-env.d.ts
|   ├── router.tsx
│   ├── serviceWorker.ts
│   └── setupProxy.js
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── config-overrides.js
├── README.md
├── tsconfig.json
├── paths.tsconfig.json
└── package.json
└── vite.config.ts
```

## License

React Seed is open source software [licensed as BDS](https://github.com/reactseed/template-antd/blob/master/LICENSE).
