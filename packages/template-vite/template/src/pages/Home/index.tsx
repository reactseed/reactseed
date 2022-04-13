import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import './index.less';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Welcome to React Seed Test</h1>
      <ul>
        <li>
          Edit <code>src/pages/Home/index.tsx</code> and save to reload.
        </li>
        <li>
          Click go to &nbsp;
          <span className="link" onClick={() => navigate('simple')}>
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
