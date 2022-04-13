import { useNavigate } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import styles from './index.module.less';
import './index.less';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* @ts-ignore */}
      <Trans>Welcome to React Seed</Trans>
      <ul>
        <li>
          {/* @ts-ignore */}
          <Trans>
            Edit <code>src/pages/Home/index.tsx</code> and save to reload
          </Trans>
        </li>
        <li>
          {/* @ts-ignore */}
          <Trans>
            Click go to &nbsp;
            <span className="link" onClick={() => navigate('simple')}>
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
            {/* @ts-ignore */}
            <Trans>Learn React Seed</Trans>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
