import { createRoot } from 'react-dom/client';
import './index.less';
import App from '@/router';
import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
