# `@reactseed/template`

[![LICENSE][LICENSE-image]][LICENSE-url] [![npm version][npm-image]][npm-url]
![NPM-CI][CI-image]

[npm-image]: https://img.shields.io/npm/v/@reactseed/template.svg
[npm-url]: https://www.npmjs.com/package/@reactseed/template
[LICENSE-image]:https://img.shields.io/badge/license-BSD-blue.svg
[LICENSE-url]: https://github.com/reactseed/template/blob/master/LICENSE
[CI-image]:https://github.com/reactseed/template/workflows/NPM-CI/badge.svg

Default template for the React Seed.
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

Select `Defalut Template`：
```sh
? The template you want to use?
  ❯ Defalut Template
    Ant Design Template (useRedux + useRequest)
    Ant Design Template (useRedux + useRequest + LinguiJs) 
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## What's inside?
Here are the top-level files and directories you'll see in an app created using this template.

```
@reactseed/template
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
## License

React Seed is open source software [licensed as BDS](https://github.com/reactseed/template/blob/master/LICENSE).
