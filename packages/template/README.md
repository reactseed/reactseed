# `@reactseed/template`

[![LICENSE][license-image]][license-url] [![npm version][npm-image]][npm-url] ![NPM-CI][ci-image]

[npm-image]: https://img.shields.io/npm/v/@reactseed/template.svg
[npm-url]: https://www.npmjs.com/package/@reactseed/template
[license-image]: https://img.shields.io/badge/license-BSD-blue.svg
[license-url]: https://github.com/reactseed/template/blob/master/LICENSE
[ci-image]: https://github.com/reactseed/reactseed/workflows/publish/badge.svg

Default template for the React Seed.

## Trying Online

You can try Reactseed online on ⚡️ `stackblitz`.

[⚡️ Edit on StackBlitz ](https://stackblitz.com/edit/reactseed-template)

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
    Ant Design Template using Vite (useRedux + useRequest)
    Ant Design Template (useRedux + useRequest + LinguiJs)
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## What's inside?

Here are the top-level files and directories you'll see in an app created using this template.

```
@reactseed/template
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

## License

React Seed is open source software [licensed as BDS](https://github.com/reactseed/template/blob/master/LICENSE).
