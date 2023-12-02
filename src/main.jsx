import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/Normalize.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <ChakraProvider>
          <h1>qotaq</h1>
    {/* <App /> */}
    </ChakraProvider>
     </BrowserRouter>
)
