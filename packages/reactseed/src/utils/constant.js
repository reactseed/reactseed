const templateMap = {
  default: '@reactseed/template',
  antd: '@reactseed/template-antd',
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
];

const registry = 'https://registry.npmjs.org';
const registryCN = 'https://registry.npm.taobao.org';

module.exports = {
  templateMap,
  registry,
  registryCN,
  templateList,
};
