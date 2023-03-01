import { Table } from 'antd';
import useAxios from 'axios-hooks';

interface IQueryUserRequest {
  page: number;
  results: number;
}

interface IResultItem {
  gender: string;
  email: string;
  name: string;
  login: {
    uuid: string;
  };
  [key: string]: any;
}

interface IQueryUserResponse {
  results: IResultItem[];
}

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
  const [{ data, loading }] = useAxios<IQueryUserResponse, IQueryUserRequest>({
    url: 'https://randomuser.me/api',
    params: {
      page: 1,
      results: 100,
    },
  });

  return (
    <>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>axios-hooks</b>，See the section about&nbsp;
        <a href="https://github.com/simoneb/axios-hooks">axios-hooks</a>
        &nbsp;for more information.
      </p>
      <Table<IResultItem>
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data?.results}
        loading={loading}
      />
    </>
  );
};

export default UserPage;
