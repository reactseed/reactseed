import { useHistory } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import styles from './index.module.less';
import './index.less';

const Home = () => {
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
          <Trans>
            Click go to &nbsp;
            <span className="link" onClick={() => history.push('simple')}>
              Simple Page
            </span>
          </Trans>
        </li>
        <li>
          <a
            className="link"
            href="https://github.com/reactseed/reactseed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trans>Learn React Seed</Trans>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
