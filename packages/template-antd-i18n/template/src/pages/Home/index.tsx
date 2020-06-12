import React from 'react';
import { useHistory } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import styles from './index.module.less';
import './index.less';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1>
        <Trans>Welcome to React Seed</Trans>
      </h1>
      <ul>
        <li>
          <Trans>
            Edit <code>src/pages/Home/index.tsx</code> and save to reload
          </Trans>
        </li>
        <li>
          Click go to &nbsp;
          <span className="link" onClick={() => history.push('simple')}>
            Simple Page
          </span>
        </li>
        <li>
          <a
            className="link"
            href="https://github.com/reactseed/reactseed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Seed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
