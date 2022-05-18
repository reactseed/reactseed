const templateMap = {
  default: '@reactseed/template',
  antd: '@reactseed/template-antd',
  antdVite: '@reactseed/template-antd-vite',
  antdI18n: '@reactseed/template-antd-i18n',
};

const templateList = [
  {
    value: 'default',
    name: 'Defalut Template',
    checked: true,
  },
  {
    value: 'antd',
    name: 'Ant Design Template (useRedux + useRequest)',
  },
  {
    value: 'antdVite',
    name: 'Ant Design Template using Vite (useRedux + useRequest)',
  },
  {
    value: 'antdI18n',
    name: 'Ant Design Template (useRedux + useRequest + LinguiJs)',
  },
];

const registry = 'https://registry.npmjs.org';
const registryCN = 'https://registry.npm.taobao.org';
const downloadTempPath = '.reactseed';

module.exports = {
  templateMap,
  registry,
  registryCN,
  templateList,
  downloadTempPath,
};
