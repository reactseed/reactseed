import React from 'react';
import { useRequest } from '@/hooks';
import { Alert } from 'antd';

const UserPage: React.FC = () => {
  const { data, error } = useRequest(data => ({
    url: '/api/getUser',
    data: {
      id: 1,
    },
  }));

  return (
    <>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>Vite Mockjs</b>
      </p>
      <div>
        {error ? (
          <Alert
            message="vite demo,please use ’npm start` start project"
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
