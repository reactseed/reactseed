import useAxios from 'axios-hooks';

const AppInfo = () => {
  const [{ data, loading }, refetch] = useAxios({
    url: '/api/app',
  });

  return (
    <div>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>mock</b> feature，Edit <i>/mock/app.js</i>{' '}
        and save to reload.
      </p>

      <p>
        /api/app <button onClick={() => refetch()}>refetch</button>
      </p>
      <code style={{ whiteSpace: 'break-spaces' }}>
        {loading ? 'loading' : JSON.stringify(data, null, 2)}
      </code>
    </div>
  );
};

export default AppInfo;
