import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// styles
import './assets/css/tailwind.output.css';
import './assets/css/style.css';
import App from './App';
import { Windmill } from '@windmill/react-ui'
import reportWebVitals from './reportWebVitals';
import { SidebarProvider } from './context/SidebarContext';
import ThemedSuspense from './components/ThemedSuspense';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences>
        <App />
      </Windmill>
    </Suspense>
  </SidebarProvider>,
  document.getElementById('root')
)
// 👇 perfomance tracking, should be transfered to analytics when app goes live
reportWebVitals(console.log)
// 👇 loads app faster with cache
serviceWorker.register()
