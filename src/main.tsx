import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './style/main.scss'
import App from './App.tsx'
import { AlertProvider } from './provider/AlertProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>,
)
