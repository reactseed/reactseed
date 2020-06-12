import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './index.module.less';
import './index.less';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1>
        <FormattedMessage id="welcome" defaultMessage="Welcome to React Seed" />
      </h1>
      <ul>
        <li>
          Edit <code>src/pages/Home/index.tsx</code> and save to reload
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
