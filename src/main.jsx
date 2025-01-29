import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-6YZHZYSQL4');

ReactGA.send({ hitType: 'pageview', page: '/my-path', title: 'Custom Title' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
