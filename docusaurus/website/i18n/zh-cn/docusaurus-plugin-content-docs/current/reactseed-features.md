---
id: supported-reactseed-features
title: 支持的扩展特性
---

## 扩展特性

`Reactseed` 基于 `create-react-app` 创建 `react` 应用，下面列举了所有的扩展特性。扩展特性主要在三个方面，`开发效率`、`项目质量`、`内置案例`。
其中 `开发效率`、`项目质量`是所有模板都支持的，`内置案例`则根据不同模板各不相同。

export const HTML = ({html}) => (<div dangerouslySetInnerHTML={{__html:html }} />);

<HTML html={`
<table style="font-size: 14px;">
    <colgroup>
        <col style="width: 30%;" />
        <col style="width: 30%;" />
        <col style="width: 15%;" />
        <col style="width: 25%;" />
    </colgroup>
    <tbody>
        <tr style="background: rgb(158 158 158 / 30%);">
            <td colspan="1" rowspan="1">
                <span>特性</span>
            </td>
            <td colspan="1" rowspan="1">
                <span> </span>
                <span>依赖</span>
            </td>
            <td colspan="1" rowspan="1">
                <span> 分类</span>
            </td>
            <td colspan="1" rowspan="1">
                <span>支持模板</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>支持 TypeScript</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.typescriptlang.org">
                    <span>typescript</span>
                </a>
            </td>
            <td colspan="1" rowspan="6">
                <span>效率</span>
            </td>
            <td colspan="1" rowspan="20">
                <span>Default Template</span><br />
                <span>Ant Design Template</span><br />
                <span>Ant Design With I18N</span><br />
                <span>Ant Design With Vite</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>自定义 Webpack 配置</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/gsoft-inc/craco">
                    <span>@craco/craco</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>支持别名</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/craco-alias">
                    <span>craco-alias</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="2">
                <span>支持 Less</span>
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
                <span>本地 API 代理和 Mock</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/mocker-api">
                    <span>mocker-api</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>提交钩子</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/husky">
                    <span>husky</span>
                </a>
            </td>
            <td colspan="1" rowspan="13">
                <span>质量</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>代码按需检查</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/lint-staged">
                    <span>lint-staged</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <span>构建产物分析</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/danvk/source-map-explorer">
                    <span>source-map-explorer</span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="3">
                <span>提交规范与检查</span>
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
                <span> </span> <span>Javascript </span> <span>格式与语法检查</span>
            </td>
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
                <span> CSS 格式与语法检查</span>
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
                <span>支持路由</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/react-router-dom">
                    <span>react-router-dom</span>
                </a>
            </td>
            <td colspan="1" rowspan="19">
                <span>案例</span>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="3">
                <span>支持 Ant Design</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://ant.design">
                    <span>antd</span>
                </a>
            </td>
            <td colspan="1" rowspan="8">
                <span>Ant Design Template</span><br />
                <span>Ant Design With I18N</span><br />
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
                <span>替换 Moment.js</span>
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
                <span>按需加载组件</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://www.npmjs.com/package/babel-plugin-import">
                    <span>babel-plugin-import</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <span>数据管理</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/pmndrs/zustand">
                    <span>zustand</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(33 150 243 / 20%);">
            <td colspan="1" rowspan="1">
                <span>数据请求</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/reactseed/reactseed/tree/main/packages/use-request">
                    <span>@reactseed/use-request</span>
                </a>
            </td>
        </tr>
        <tr style="background: rgb(255 87 34 / 10%);">
            <td colspan="1" rowspan="5">
                <span>支持国际化</span>
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
        <tr>
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
                    <span>支持 Vite</span>
            </td>
            <td colspan="1" rowspan="1">
                <a href="https://github.com/vitejs/vite">
                    <span>vite</span>
                </a>
            </td>
            <td colspan="1" rowspan="5">
                <p style="text-align: left;">
                    <span>Ant Design With Vite</span>
            </td>
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
