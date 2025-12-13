import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Lamp from './components/Lamp.jsx'
import Draggable from './Draggable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <Navbar /> */}
      {/* <App /> */}
      {/* <Lamp /> */}
      <Draggable />
    </>
  </StrictMode>,
)
