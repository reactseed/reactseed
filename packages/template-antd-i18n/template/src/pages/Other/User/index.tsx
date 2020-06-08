import React from 'react';
import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table/Table';
import { useRequest } from '@/hooks';

interface TQueryUserParams {
  current?: number;
  pageSize?: number;
}

interface TUser {
  gender?: string;
  email?: string;
  name?: any;
  [key: string]: any;
}

const queryUser = (data: TQueryUserParams) => ({
  url: 'https://randomuser.me/api',
  data: {
    page: data.current,
    results: data.pageSize,
  },
});

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name: any) => `${name.first} ${name.last}`,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const UserPage: React.FC = () => {
  const { data, loading, pagination } = useRequest<any, TUser>(queryUser, {
    paginated: true,
    formatResult: data => ({
      list: data.results,
      total: 200,
    }),
  });

  return (
    <>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>useRequest</b>，See the section about
        <a href="https://github.com/reactseed/use-request">
          @reactseed/use-request
        </a>
        for more information.
      </p>

      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data?.list}
        // useRequest returns that pagination and table's pagination parameter types are not compatible
        pagination={pagination as TablePaginationConfig}
        loading={loading}
      />
    </>
  );
};

export default UserPage;
