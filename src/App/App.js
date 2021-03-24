import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Login } from '../Components/auth/Login';
import { NavBar } from '../Components/NavBar/NavBar';
import { ApplicationViews } from '../ApplicationViews'
import { Register } from '../Components/auth/Register'

export const CdlSchool = () => (
    <>
        <Route render={() => {
          if (localStorage.getItem('employee_user_id')) {
            return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>;
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
);
