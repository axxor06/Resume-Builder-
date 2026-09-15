import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import jobrole from '../assets/jobrole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { saveResumeAPI } from '../services/allAPI';
import { useNavigate } from "react-router-dom";

const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Review & Submit'];

function Userinput({resumeData,setResumeData}) {
  const [activeStep, setActiveStep] = React.useState(0);

  //usenavigate hook to route pages

  const navigate= useNavigate()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.fullName || ""} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField value={resumeData.location || ""} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" />
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
              <Select
                value={resumeData.job || ""}
                onChange={e=>setResumeData({ ...resumeData, job: e.target.value })}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select"
                label="Job"
              >
                { jobrole.jobRoles.map(job=>(
                  <MenuItem key={job} value={job}>{job}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      )
      break;
      case 1: return(
        <div>
          <h3>Contact Details</h3>
          <div className="row p-3">
            <TextField value={resumeData.email || ""} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
            <TextField value={resumeData.phone || ""} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-num" label="Contact Number" variant="standard" />
            <TextField value={resumeData.linkedin || ""} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
            <TextField value={resumeData.github || ""} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-github" label="Github Link" variant="standard" />
          </div>
        </div>
      )
      break;
      case 2: return(
        <div>
          <h3>Educational Details</h3>
          <div className="row p-3">
            <TextField value={resumeData.degree || ""} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
            <TextField value={resumeData.college || ""} onChange={e=>setResumeData({...resumeData,college:e.target.value})} id="standard-basic-college" label="College/University Name" variant="standard" />
            <TextField value={resumeData.year || ""} onChange={e=>setResumeData({...resumeData,year:e.target.value})} id="standard-basic-year" label="Year of Graduation" variant="standard" />
          </div>
        </div>
      )
      break;
      case 3: return(
        <div>
          <p>Our AI will generate Skills & Summary according to your job role.Once the form get submitted, user won't get the chance to update the resume details. If you want ot proceed please click the <b>Generate AI Skill & Summary</b> button to submit. </p>
        </div>
      )
      break;
      default: return null 
      break;
    }
  }


  //generate skills and summary

  const generateSkills=()=>{
    setResumeData({
      ...resumeData,
      skills: (resumeData.job && jobSkills[resumeData.job]) ? jobSkills[resumeData.job] : [],
      summary: (resumeData.job && summaries[resumeData.job]) ? summaries[resumeData.job] : ""
    })
    handleNext()
  }

//save resuuummmme
  const handleAddResume=async()=>{
const{ fullName, location, job, email, phone, github, linkedin, degree, college, year, skills,
summary}=resumeData
if(fullName &&location&& job&&email&&phone&&github&&linkedin&&degree&&college&& year&&skills&&
summary) {

 const response=await saveResumeAPI(resumeData)
 console.log(response);

 if(response.status=="201"){
  alert("Resume Added Successfully")
  
  const resumeId=response.data.id
  setTimeout(()=>{
    navigate(`/resume/${resumeId}/view`)
  },2000)
 }
  
}else{
alert("please fill missing fields ")

// save resume

}
  }
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleAddResume}>
                Finish
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>
              {/* render Content */}
              {renderFormContent(activeStep)}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              
                {activeStep === steps.length - 1 ? <Button onClick={generateSkills}>Generate AI Skills & Summary</Button> : <Button onClick={handleNext}>Next</Button>}
              
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default Userinput