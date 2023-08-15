import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ponemos aqui esta libreria para no estar poniendo en todas las paginas
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer />
  </>
  // <React.StrictMode>
  // </React.StrictMode>,
)
