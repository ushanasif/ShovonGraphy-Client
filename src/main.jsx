import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthContextProvider from './contextApi/AuthContextProvider.jsx'
import { Toaster } from 'react-hot-toast'
import ImageFetchingProvider from './contextApi/ImageFetchingProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContextProvider>
        <ImageFetchingProvider >

          <RouterProvider router={router} />
        </ImageFetchingProvider>
        
    </AuthContextProvider>
    <Toaster />
   
  </StrictMode>,
)
