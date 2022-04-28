---
id: folder-structure
title: Folder structure
---

After creation, your project should look like this:

```
my-app
├── public
├── src
│ ├── components
│ ├── pages
│ ├── routes
│ ├── index.tsx
│ ├── react-app-env.d.ts
│ ├── react.d.ts
│ ├── reportWebVitals.ts
│ ├── router.tsx
│ ├── setupTests.ts
│ └── setupProxy.js
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

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.tsx` is the JavaScript entry point.
- `craco.config.ts` is extending webpack configuration.
- `tsconfig.json` is typescript configuration.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by webpack. You need to **put any JS and CSS files inside `src`**, otherwise webpack won’t see them.

Only files inside `public` can be used from `public/index.html`. Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level `.git` directory.
