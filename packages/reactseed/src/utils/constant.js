const templateMap = {
  default: '@reactseed/template',
  antd: '@reactseed/template-antd',
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
    value: 'antdI18n',
    name: 'Ant Design Template (useRedux + useRequest + LinguiJs)',
  },
];

const registry = 'https://registry.npmjs.org';
const registryCN = 'https://registry.npm.taobao.org';

module.exports = {
  templateMap,
  registry,
  registryCN,
  templateList,
};
