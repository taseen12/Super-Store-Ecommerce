import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/ProductContext.jsx'
import { FilterContextProvider } from './context/filter_context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
  
)
