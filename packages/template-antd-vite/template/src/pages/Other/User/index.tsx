import { Table } from 'antd';
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

const UserPage = () => {
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
        This is an example using <b>useRequest</b>，See the section about&nbsp;
        <a href="https://github.com/reactseed/use-request">
          @reactseed/use-request
        </a>
        &nbsp;for more information.
      </p>
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data?.list}
        pagination={pagination}
        loading={loading}
      />
    </>
  );
};

export default UserPage;
