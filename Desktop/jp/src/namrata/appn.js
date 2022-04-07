import React from 'react';

import JobCardComponent from './components/JobCardComponent';
import JobInformation from './components/JobInformation';
import JobDescription from './components/JobDescription'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 

     
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element = {<JobCardComponent/>}/>
      <Route path= '/jobinformation' element = {<JobInformation/>}/>
      <Route path= '/jobdescription' element = {<JobDescription/>}/>
 
      </Routes>
    </Router>

    </div>

    // <Grid container sx={{display:'flex'}}>
    //   <Grid item xs={12} lg={6}>
    //  <JobCardComponent
    //  topic='Full Healthcare'
    //  content='We believe in thriving communities and that starts
    //  with our team being happy and healthy.'
     
    //  />
    //  </Grid>
    // <Grid item xs={12} lg={6}>
    //  <JobCardComponent
    //  topic='Full Healthcare'
    //  content='We believe in thriving communities and that starts
    //  with our team being happy and healthy.'
     
    //  />
    //  </Grid>
    // </Grid>
  );
}

export default App;
