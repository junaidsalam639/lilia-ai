import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router"
import App from './App.jsx'
import CustomCursor from './components/CustomCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <div className="md:block hidden">
        <CustomCursor />
      </div>
    </BrowserRouter>
  </StrictMode>,
) 
