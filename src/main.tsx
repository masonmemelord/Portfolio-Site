import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App fileUrl="https://example.com/sample.pdf" 
  fileType="pdf"/>
  </StrictMode>,
)
