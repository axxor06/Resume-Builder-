import React, { useState } from 'react'
import UserInput from '../Components/UserInput'
import Preview from '../Components/Preview'


function UserFor() {

  const[resumeData, setResumeData]=useState({
    fullName:"",
    location:"",
    job: "",
    email:"",
    phone: "",
    contact: "",
    github:"",
    linkedin:"",
    degree: "",
    college:"",
    year:"",
    skills: [],
    summary:""
  })
  console.log(resumeData);
  
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <UserInput resumeData={resumeData} setResumeData={setResumeData}/>
          </div>
          <div className="col-lg-6">
           {resumeData.fullName&& <Preview resumeData={resumeData}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFor
