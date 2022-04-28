import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import sdk from '@stackblitz/sdk';

import styles from './styles.module.css';

/**
 * https://docusaurus-i18n-staging.netlify.app/zh-CN/docs/i18n/tutorial
 */
const features = [
  {
    title: <Translate>Approachable</Translate>,
    content: (
      <Translate
        id="homepage.reactseed.approachable"
        values={{
          cra: <code>create-react-app</code>,
          less: <code>less</code>,
          customize: <code>carco</code>,
        }}
      >
        {
          "Create a basic react application based on {cra}, and use {customize} to extend basic functions (such as code inspection, {less}, alias, etc.). You don't need to learn and configure build tools, just focus on development."
        }
      </Translate>
    ),
  },
  {
    title: <Translate>Versatile</Translate>,
    content: (
      <Translate
        id="homepage.reactseed.versatile"
        values={{
          reactscripts: <code>react-scripts</code>,
          webpack: <code>webpack</code>,
          webpackdevserver: <code>webpack-dev-server</code>,
          babel: <code>babel</code>,
          customize: <code>carco</code>,
        }}
      >
        {
          'Upgrade the build tools by updating {reactscripts}. If you need advanced configuration, you can easily cover the underlying configuration objects such as {webpack}, {webpackdevserver}, {babel}, etc. through the function of {customize}.'
        }
      </Translate>
    ),
  },
  {
    title: <Translate>Performant</Translate>,
    content: (
      <Translate>
        Multiple best practice templates are built-in to meet different
        scenarios to quickly start developing applications. The development
        documents recommend high-quality specifications, component libraries,
        tool libraries, and code snippets.
      </Translate>
    ),
  },
];

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;

  useEffect(() => {
    sdk.embedProjectId('stackblitz-demo', 'reactseed-template', {
      forceEmbedLayout: true,
      openFile: 'src/index.tsx',
      hideExplorer: true,
      hideNavigation: true,
    });
  }, []);

  return (
    <Layout>
      <div className={clsx(styles.heroBanner)}>
        <div className={clsx(styles.heroBannerInner)}>
          <div style={{ position: 'relative' }}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubTitle}>
              <Translate>
                Set up a best practice react app by running one command.
              </Translate>
            </p>
            <div className={styles.getStarted}>
              <Link
                className={styles.heroButton}
                to={useBaseUrl('docs/getting-started')}
              >
                <Translate>Get Started</Translate>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <hr className={styles.featureHr} />
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4">
              <h2>
                <Translate>Get started in seconds</Translate>
              </h2>
              <p>
                <Translate
                  id="homepage.reactseed.start"
                  values={{
                    strong: (
                      <strong>
                        <Translate>focus on code, not build tools</Translate>
                      </strong>
                    ),
                  }}
                >
                  {'Reactseed lets you {strong}'}
                </Translate>
                <br />
                <Translate
                  id="homepage.reactseed.command"
                  values={{
                    project: <i>my-app</i>,
                  }}
                >
                  {'To create a project called {project}, run this command:'}
                </Translate>
              </p>
              <CodeBlock className="language-sh">
                npx @reactseed/cli init
              </CodeBlock>
              <br />
            </div>
            <div className="col col--7 col--offset-1">
              <div
                style={{ border: 'solid 1px #1d6eff' }}
                id="stackblitz-demo"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
