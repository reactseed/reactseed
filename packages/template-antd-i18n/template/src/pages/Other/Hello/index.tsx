import { Button, Input } from 'antd';
import useStore from './useStore';

const Hello = () => {
  const { age, name, becomeOlder, updateName } = useStore();

  return (
    <>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>zustand</b>，See the section about&nbsp;
        <a href="https://github.com/pmndrs/zustand">zustand</a>
        &nbsp; for more information.
      </p>

      <h1>
        Hello {name} ({age})
      </h1>

      <Input
        style={{ width: 240, marginRight: 16 }}
        onChange={e => {
          updateName(e.target.value);
        }}
        value={name}
      />
      <Button onClick={becomeOlder}>Older</Button>
    </>
  );
};

export default Hello;
