import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store , persistor} from './store';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import  './firebase/firebase'
import App from './App';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider> 
  </React.StrictMode>
);


