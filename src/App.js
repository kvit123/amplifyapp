import React, { useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';
import AppLayout from './components/AppLayout';

import './App.css';
import OtpPage from './components/Otp/OtpPage';
import uploadPage from './components/uploadPage';
import Dashboard from './components/Dashboard';
import Agent from './components/Agent';
import click2CallPage from './components/Click2call/click2CallPage';
import customerDB from './components/Admin/customerDB'
import creatCustomer from './components/Admin/components/CustomerDB/creatCustomer'
// const withLayout =
//     (Component: ComponentType): FunctionComponent =>
//     (props) =>
//         (
//             <AppLayout>
//                 <Component {...props} />
//             </AppLayout>
//         );
const withLayout = (Component) => (props) => {
  const Comp = useCallback(() => <Component {...props} />, [props]);
  return (
    <AppLayout>
      <Comp />
    </AppLayout>
  );
};

function App() {

  //const Dash = useMemo(() => withLayout(Dashboard), []);

  return (
    <>
    <NorthStarThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={withLayout(Dashboard)}></Route>
        <Route exact path="/agent" component={withLayout(Agent)}></Route>
        <Route exact path="/otp" component={withLayout(OtpPage)}></Route>
        <Route exact path="/upload" component={withLayout(uploadPage)}></Route>
        <Route exact path="/c2c" component={withLayout(click2CallPage)}></Route>
        <Route exact path="/customerDB" component={withLayout(customerDB)}></Route>
        <Route exact path="/creatCustomer" component={withLayout(creatCustomer)}></Route>
      </Switch>
    </Router> 
    </NorthStarThemeProvider>
    </>
  );
}
export default App
