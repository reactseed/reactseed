import React from 'react';
import { Alert } from 'antd';
import { useRequest } from '@/hooks';

const UserPage: React.FC = () => {
  const { data, error } = useRequest(data => ({
    url: '/api/user',
    data: {
      id: 1,
    },
  }));

  return (
    <>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>Craco mocker-api</b>
      </p>
      <div>
        {error ? (
          <Alert
            message="craco demo,please use ’npm run craco‘ start project"
            type="error"
          />
        ) : (
          JSON.stringify(data)
        )}
      </div>
    </>
  );
};

export default UserPage;
