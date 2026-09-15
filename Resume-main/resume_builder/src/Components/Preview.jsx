import { Divider } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
                                                            
function Preview({resumeData}) {
  return (
    <>
    <div>
      <div className="w-100">
        <h2>{resumeData.fullName}</h2>
        <p className='fs-6 lh-1'>Phone : {resumeData.phone}</p>
        <p className='fs-6 lh-1'>E mail : {resumeData.email}</p>
        <p className='fs-6 1h-1'>Linkedin : {resumeData.linkedin}</p>
        <p className='fs-6 1h-1'>Github : {resumeData.github}</p>
        <p className='fs-6 1h-1'>Location : {resumeData.location}</p>
        <Divider className='bg-dark my-3'/>
        <h4>Professional summary</h4>
        <p>{resumeData.summary}</p>
        <Divider className='bg-dark my-3'/>
        <h4>Technical Skills</h4>
        { resumeData?.skills?.map((skill, index) => (
          <span key={skill || index}> <Button variant="text" className='text-dark'>{skill}</Button> </span>
        ))}
        <Divider className='bg-dark my-3'/>
        <h4>Education</h4>
        <p className='fs-6 lh-1'>Bachelors degree in: {resumeData.degree}</p>
        <p className='fs-6 lh-1'>University / College name: {resumeData.college}</p>
        <p className='fs-6 lh-1'>Year of graduation : {resumeData.year}</p>
      </div>
    </div>
      
    </>
  )
}

export default Preview