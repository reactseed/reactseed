import mocker from 'mocker-api';

export default function proxy() {
  mocker('/api', {
    target: 'https://api.github.com',
    changeOrigin: true,
    ws: true,
  });
}
