---
id: supported-reactseed-features
title: Supported Extended features
---

## Extended features

`Reactseed` creates a `react` application based on `create-react-app`, with all the extension features listed below. The extension features are mainly in three aspects, `Development Efficiency`, `Project Quality`, and `Built-in Example`.
Among them, `Development Efficiency` and `Project Quality` are supported by all templates, and `Built-in Example` varies according to different templates.

export const HTML = ({html}) => (<div dangerouslySetInnerHTML={{__html:html }} />);

<HTML html={`
<table style="font-size: 14px;">
    <colgroup>
        <col style="width: 30%;">
        <col style="width: 30%;">
        <col style="width: 15%;">
        <col style="width: 25%;">
    </colgroup>
    <tbody>
        <tr style="background: rgb(158 158 158 / 30%);">
            <td colspan="1" rowspan="1">
                <span>Features</span>
            </td>
            <td colspan="1" rowspan="1">
                <span>Dependencies</span>
            </td>
            <td colspan="1" rowspan="1">
                <span>&nbsp;Type</span>
            </td>
            <td colspan="1" rowspan="1">
                <span>Supported Templates</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Support TypeScript</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.typescriptlang.org">
                    <span>typescript</span>
                </a>
            </td>
            <td colspan="1" rowspan="6">
                <span>Efficiency</span>
            </td>
            <td colspan="1" rowspan="20">
                <span>Default Template</span><br>
                <span>Ant Design Template</span><br>
                <span>Ant Design With I18N</span><br>
                <span>Ant Design With Vite</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Custom Webpack Configuration</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/gsoft-inc/craco">
                    <span>@craco/craco</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Support Alias</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/craco-alias">
                    <span>craco-alias</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="2">
                <span>Support Less</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/postcss-less">
                    <span>postcss-less</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/craco-less">
                    <span>craco-less</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>API Proxy and Mock</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/mocker-api">
                    <span>mocker-api</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Commit hook</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/husky">
                    <span>husky</span>
                </a>
            </td>
            <td colspan="1" rowspan="13">
                <span>Quality</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Code Check on Demand</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/lint-staged">
                    <span>lint-staged</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Bundle Analysis</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/danvk/source-map-explorer">
                    <span>source-map-explorer</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="3">
                <span>Commit Specifications and Checking</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/@commitlint/cli">
                    <span>@commitlint/cli</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/cz-conventional-changelog">
                    <span>cz-conventional-changelog</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/@commitlint/config-conventional">
                    <span>@commitlint/config-conventional</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="4">
                <span>&nbsp;</span>
                <p style="text-align: left;">
                    <span>Javascript Formatting and Syntax Checking</span>
            </p></td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/eslint/eslint">
                    <span>eslint</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/prettier">
                    <span>prettier</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/prettier/eslint-config-prettier">
                    <span>eslint-config-prettier</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/eslint-plugin-prettier">
                    <span>eslint-plugin-prettier</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="3">
                <span>CSS Formatting and Syntax Checking</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/stylelint">
                    <span>stylelint</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/stylelint-config-prettier">
                    <span>stylelint-config-prettier</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/stylelint/stylelint-config-standard">
                    <span>stylelint-config-standard</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>Support Router</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/react-router-dom">
                    <span>react-router-dom</span>
                </a>
            </td>
            <td colspan="1" rowspan="19">
                <span>Example</span>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="3">
                <span>Support Ant Design</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://ant.design">
                    <span>antd</span>
                </a>
            </td>
            <td colspan="1" rowspan="8" style="/* background: rgb(76 175 80 / 10%); */">
                <span>Ant Design Template</span><br>
                <span>Ant Design With I18N</span><br>
                <span>Ant Design With Vite</span>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/@ant-design/pro-layout">
                    <span>@ant-design/pro-layout</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/@ant-design/icons">
                    <span>@ant-design/icons</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="2">
                <span>Replace Moment.js</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/dayjs">
                    <span>dayjs</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/@electerm/antd-dayjs-webpack-plugin">
                    <span>antd-dayjs-webpack-plugin</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <span>Import Components on Demand</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/babel-plugin-import">
                    <span>babel-plugin-import</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <span>Data Management</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/pmndrs/zustand">
                    <span>zustand</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <span>Data Request</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/reactseed/reactseed/tree/main/packages/use-request">
                    <span>@reactseed/use-request</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(255 87 34 / 10%);">
            <td colspan="1" rowspan="5">
                <span>Support I18N</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/lingui/js-lingui">
                    <span>@lingui/core</span>
                </a>
            </td>
            <td colspan="1" rowspan="5">
                <span>Ant Design With I18N</span>
            </td>
        </tr>
        <tr style="background: rgb(255 87 34 / 10%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/lingui/js-lingui">
                    <span>@lingui/react</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(255 87 34 / 10%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/lingui/js-lingui">
                    <span>@lingui/cli</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(255 87 34 / 10%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/lingui/js-lingui">
                    <span>@lingui/macro</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(255 87 34 / 10%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/lingui/js-lingui">
                    <span>@lingui/babel-preset-react</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(76 175 80 / 20%);">
            <td colspan="1" rowspan="5">
                <p style="text-align: left;">
                    <span>Support</span>
                    <span> Vite</span>
            </p></td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/vitejs/vite">
                    <span>vite</span>
                </a>
            </td>
            <td colspan="1" rowspan="5">
                <p style="text-align: left;">
                    <span>Ant Design With Vite</span>
            </p></td>
        </tr>
        <tr style="background: rgb(76 175 80 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/onebay/vite-plugin-imp">
                    <span>vite-plugin-imp</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(76 175 80 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/vbenjs/vite-plugin-mock">
                    <span>vite-plugin-mock</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(76 175 80 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/pd4d10/vite-plugin-svgr">
                    <span>vite-plugin-svgr</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(76 175 80 / 20%);">
            <td colspan="1" rowspan="1">
                <a href="https://github.com/aleclarson/vite-tsconfig-paths">
                    <span>vite-tsconfig-paths</span>
                </a>
            </td>
        </tr>
    </tbody>
</table>
`} />
