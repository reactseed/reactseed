import React from 'react';
import { useHistory } from '@/hooks';
import './index.less';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div className="home__container">
      <div>React Seed</div>
      <div style={{ color: 'blue' }} onClick={() => history.push('simple')}>
        Go Simple
      </div>
    </div>
  );
};

export default Home;
