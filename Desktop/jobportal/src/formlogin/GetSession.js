import axios from 'axios';
import React, { useEffect } from 'react';

const GetSession=()=>{
    useEffect(()=>{
        axios({
            method:"post",
            url:"http://localhost:8080/user/getsession"
        }).then(res=>{
            console.log(res);
        })
    },[])
    return (
        <h1>Current user</h1>
    )
}

export default GetSession;