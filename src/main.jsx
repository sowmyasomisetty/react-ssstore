import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// importing bootstrap
import "/node_modules/bootstrap/dist/css/bootstrap.css"

// enabling react routing through react app
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
      <App />
  </BrowserRouter>

)
