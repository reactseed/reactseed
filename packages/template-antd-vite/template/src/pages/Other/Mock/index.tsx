import { Button } from 'antd';
import { useRequest } from '@/hooks';

const UserPage = () => {
  const { data, refresh } = useRequest('/api/mock/reactseed');
  return (
    <>
      mockData: 【{data?.data}】
      <div>
        try to change mockData and click refresh.(mock path: mock/index.ts)
      </div>
      <Button onClick={refresh} type="primary">
        refresh
      </Button>
    </>
  );
};

export default UserPage;
