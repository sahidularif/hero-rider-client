import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/login/login'
import Protected from './component/route/Protected';
// import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Dashboard from './component/admin/Dashboard';
import RiderType from './component/account/RiderType';
import Rider from './component/account/riderAccount';
import Learner from './component/account/learnerAccount';
// ######################################################################

const engine = new Styletron();
function App() {

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className=''>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RiderType />} />
              <Route path="/rider" element={<Rider />} />
              <Route path="/learner" element={<Learner />} />
              <Route path='/' element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </BaseProvider>
    </StyletronProvider>

  )
}

export default App
