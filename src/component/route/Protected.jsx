import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../auth/authService'
function Protected({ children }) {

  const jwt = isAuthenticated()
  if (!jwt) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected