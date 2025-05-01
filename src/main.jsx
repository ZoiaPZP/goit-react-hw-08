import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";  
import { PersistGate } from 'redux-persist/integration/react';  
import { Toaster } from 'react-hot-toast';
import App from './components/App/App';  
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}> 
          <React.Fragment>
            <App />
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                style: {
                  borderRadius: '8px',
                  background: '#333',
                  color: '#fff',
                },
                duration: 3000,  
              }}
            />
          </React.Fragment>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

