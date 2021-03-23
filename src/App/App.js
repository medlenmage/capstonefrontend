import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Login } from '../Components/auth/Login';
import { NavBar } from '../Components/NavBar/NavBar';
import { ApplicationViews } from '../ApplicationViews'

export const CdlSchool = () => (
    <>
        <Route render={() => {
          if (localStorage.getItem('lu_token')) {
            return <>
                    <Route render={NavBar} />
                    {/* <Route render={props => <ApplicationViews {...props} />} /> */}
                </>;
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/login" render={Login} />
        {/* <Route path="/register" render={Register} /> */}
    </>
);
