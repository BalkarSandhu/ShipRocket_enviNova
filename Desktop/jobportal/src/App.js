
import Findjobs from './Assemble/Findjobs'
import Browser from "../src/Assemble/Browsecompanies"
import Jobdescription from './Assemble/Jobdescription';
import Searchcompaniesresult from './Assemble/Searchcompaniesresult';

import StartPosting from "./NehaBhagat1/StartPosting";
import { Route, Routes,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import * as React from 'react'
import { UserContext } from './ContextFiles';
import RegisterCard from './formlogin/components/RegisterCard'
import Verification from './formlogin/components/Verification'
import ForgotPassword from './formlogin/components/NewPassword'
import NewPassword from './formlogin/components/NewPassword'
import axios from 'axios'

import Companyprofile from './Assemble/Companyprofile';

export const queryContext = React.createContext({
  value: '',
  setValue: () => { }
})


function App() {
  const [query, setQuery] = useState('')

  const [authState, setAuthState] = useState({
    authenticated: false,
    user: {},
})
const navigate = useNavigate()
// useEffect(() => {
//     const loggedInUser = localStorage.getItem("keewe.lmsStorage");
//     if (loggedInUser) {
//         const foundUser = JSON.parse(loggedInUser);
//         axios({
//             // url: "https://lmsapi.keewesolutions.com/check",
//             url: 'http://localhost:8081/check',
//             method: "POST",
//             data: {
//                 token: foundUser.user.idToken
//             }
//         }).then(res=>{
//             if(res.data.callStatusCode === 200){
//                 let newAuthState = {...authState}
//                 newAuthState.authenticated = true
//                 let newPayload = res.data.response
//                 let newUser = {
//                     id: newPayload['cognito:username'],
//                     email: newPayload.email,
//                     idToken: foundUser.user.idToken,
//                     refreshToken: foundUser.user.refreshToken.token
//                   }
//                   newAuthState.user = newUser
//                 setAuthState(newAuthState)
//             }else{
//                 navigate('/login')
//             }
//         })
        

//     }
// }, []);
  return (
   
    <queryContext.Provider value={{
      value: query,
      setValue: setQuery
    }}>
      <Routes>
          <Route path="/" element={<Findjobs />} />
          <Route path="/findjobs" element={<Findjobs />} />
          <Route path="/searchcompanies" element={<Browser />} />
          <Route path="/companiesresult" element={<Searchcompaniesresult />} />
          <Route path="/jobdescription" element={<Jobdescription />} />
          <Route path="/companyprofile" element={<Companyprofile />} />
          </Routes>
      </queryContext.Provider>

  );
}

export default App;
