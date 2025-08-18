import React, { useState } from 'react'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {/* Show Login or Dashboard based on login state */}
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  )
}

export default App