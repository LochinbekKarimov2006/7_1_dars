import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyProvider } from './context/GlobalContext.jsx'; // MyProvider ni import qilish

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider> {/* App ni MyProvider bilan o'rab olamiz */}
      <App />
    </MyProvider>
  </React.StrictMode>,
)
