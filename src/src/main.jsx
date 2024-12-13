import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './telas/App.jsx'
//import App from './telas/Tela1.jsx'
//import App from './telas/Tela2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)