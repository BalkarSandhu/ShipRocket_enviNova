import axios from 'axios';
import React, { useEffect } from 'react';

const CurrentUser=()=>{
    useEffect(()=>{
        axios({
            method:"post",
            url:"http://localhost:8080/user/currentuser"
        }).then(res=>{
            console.log(res);
        })
    },[])
    return (
        <h1>Current user</h1>
    )
}

export default CurrentUser;