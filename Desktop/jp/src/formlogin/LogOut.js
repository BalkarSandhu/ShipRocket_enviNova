import axios from 'axios';
import React, { useEffect } from 'react';

const LogOut=()=>{
    useEffect(()=>{
        axios({
            method:"post",
            url:"http://localhost:8080/user/logout"
        }).then(res=>{
            console.log(res);
        })
    },[])
    return (
        <h1>Current user</h1>
    )
}

export default LogOut;