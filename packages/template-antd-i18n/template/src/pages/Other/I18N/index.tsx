/* eslint-disable jsx-a11y/anchor-is-valid */
import { Pagination } from 'antd';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@/hooks';

const demoStyle = {
  padding: 12,
  backgroundColor: '#fff',
};
const titleStyle = {
  color: '#666',
  padding: '16px 0',
};

const I18NPage = () => {
  const name = 'React Seed';
  const { i18n } = useLingui();
  const date = new Date();
  const number = 10000;

  const data = [
    {
      title: (
        /* @ts-ignore */
        <Trans id="i18n.doc1">
          1. Use the Tans component to wrap the text to be translated.
        </Trans>
      ),
      /* @ts-ignore */
      demo: <Trans>Hello, React Seed</Trans>,
    },
    {
      title: (
        /* @ts-ignore */
        <Trans id="i18n.doc2">
          2. Trans supports text translation with variables.
        </Trans>
      ),
      /* @ts-ignore */
      demo: <Trans>Hello, {name}</Trans>,
    },
    {
      title: (
        /* @ts-ignore */
        <Trans id="i18n.doc3">
          3. Trans also supports translating text with components, even nesting
          multiple components.
        </Trans>
      ),
      demo: (
        /* @ts-ignore */
        <Trans>
          View <a href="#">More</a>
        </Trans>
      ),
    },
    {
      title: (
        /* @ts-ignore */
        <Trans id="i18n.doc4">
          4. The text defined in the JS cannot use the Tans component. Common
          scenarios are common: a message in Toast, a placeholder attribute of
          Input.
        </Trans>
      ),
      demo: (
        <input
          style={{ width: 300 }}
          type="text"
          placeholder={t`This is a text defined in JS`}
        />
      ),
    },
    {
      title: (
        /* @ts-ignore */
        <Trans id="i18n.doc5">
          5. This method also supports the same ICU MessageFormat syntax, with
          variables.
        </Trans>
      ),
      demo: (
        <input
          style={{ width: 300 }}
          type="text"
          placeholder={t`This is a text defined in JS, ${name}`}
        />
      ),
    },
    {
      title: (
        <div>
          {/* @ts-ignore */}
          <Trans id="i18n.doc6">
            6. In addition to these two common forms, Lingui supports other
            complex components. The following example is the case of plural
            syntax. Such as: Plural | Select | SelectOrdinal | date | number,
            Such as:
            <a href="https://lingui.js.org/ref/react.html#plural">see more</a>.
            Supporting Plural requires additional configuration,
            <a href="https://js-lingui-git-next.lingui-js.now.sh/releases/migration-3.html#removed-i18nprovider-declarative-api">
              see more
            </a>
            .
          </Trans>
        </div>
      ),
      demo: (
        <div>
          {i18n.date(date)}
          {i18n.number(number)}
        </div>
      ),
    },
    {
      title: (
        /* @ts-ignore */
        <Trans id="i18n.doc7">
          7. Under normal circumstances, we do not need to define the ID of the
          field, using the command line npm run extract can automatically
          extract Tans and other copy from the code, the copy content is the
          field name.
        </Trans>
      ),
      /* @ts-ignore */
      demo: <Trans id="custom.id">This text defines ID: custom.id</Trans>,
    },
    {
      /* @ts-ignore */
      title: <Trans id="i18n.doc8">8. Ant Design UI Component.</Trans>,
      demo: <Pagination defaultCurrent={1} total={50} showSizeChanger />,
    },
  ];

  return (
    <div>
      {data.map(({ title, demo }, index) => (
        <div key={index}>
          <div style={titleStyle}>{title}</div>
          <div style={demoStyle}>{demo}</div>
        </div>
      ))}
    </div>
  );
};

export default I18NPage;
