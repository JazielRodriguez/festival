import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'wouter'
import App from './App'
import LoadingPage from './pages/Loading'
import './index.css'
const LogIn = React.lazy(() => import('./pages/LogIn'))
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <Route path='/'>
        <App />
      </Route>
      <Route path='/log-in'>
        <LogIn />
      </Route>
    </Suspense>
  </React.StrictMode>
)
