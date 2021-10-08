import React from 'react';
import { Button, Table } from 'antd';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import { useRequest } from '@/hooks';

const UserPage: React.FC = () => {
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
