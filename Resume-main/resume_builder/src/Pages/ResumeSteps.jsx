import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";



function ResumeSteps() {
  return (
    
    <>
      
      <div style={{minHeight: '100vh'}} className="mt-5">
        <h1 className="text-center">Create an ATS Friendly Resume in Minutes with AI rBuilder
        </h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <IoDocumentText />
              <h4>Add Your Details</h4>
              <p>Our AI will generate Skills & Summary</p>
              <h5>Step 1</h5>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <FaDownload />
              <h4>Download Your Resume</h4>
              <p>Download your resume in PDF format</p>
              <h5>Step 2</h5>
              </div>
            <div className="col-md-1"></div>
            </div>
        </div>

        <div className="mt-5 text-center">
          <a href={'/form'} style={{ backgroundColor: 'black' }}>Create Resume</a>
        </div>
      </div>
    </>
  )
}

export default ResumeSteps
