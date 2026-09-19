import React, { useRef } from 'react'
import { MdEditSquare } from 'react-icons/md'
import { FaXmark } from 'react-icons/fa6'
import { Box, Modal, Typography, InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material'
import jobrole from '../assets/jobrole.json'
import { updateResumeAPI } from '../services/allAPI'
import { toast } from 'react-toastify'

const style = { position:'absolute', top:'50%', left:'50%', maxHeight:'90vh', overflowY:'auto', transform:'translate(-50%,-50%)', width:400, bgcolor:'background.paper', border:'2px solid #000', boxShadow:24, p:4 }

function Edit({ resumeData, setResumedata }) {
  const [open, setOpen] = React.useState(false)
  const [skill, setSkill] = React.useState('')
  const skillRef = useRef()

  const haddleOpen = () => setOpen(true)
  const haddleClose = () => setOpen(false)

  const addSkill = (skill) => {
    if (skill) {
      if (resumeData?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
        toast.warning("Given skill already exist")
      } else {
        setResumedata({ ...resumeData, skills:[...(resumeData.skills || []), skill] })
      }
      skillRef.current.value = ""
      setSkill('')
    } else {
      toast.info("Input valid skill!")
    }
  }

  const removeSkill = (skill) => {
    setResumedata({ ...resumeData, skills:resumeData.skills.filter(item => item !== skill) })
  }

  const handleUpdate = async () => {
    const { fullName, location, job, email, phone, github, linkedin, degree, college, year, skills, summary } = resumeData

    if (fullName && location && job && email && phone && github && linkedin && degree && college && year && skills && summary) {
      const response = await updateResumeAPI(resumeData.id, resumeData)
      console.log(response)

      if (response.status == "200") {
        toast.success("Resume updated Successfully")
        haddleClose()
      }
    } else {
      toast.info("Please fill missing fields")
    }
  }

  return (
    <>
      <button onClick={haddleOpen} style={{ color:'#755846' }} className='btn me-2'><MdEditSquare className="fs-3" /> Edit CV</button>

      <Modal open={open} onClose={haddleClose}>
        <Box sx={style}>
          <Typography variant="h6">Edit Resume</Typography>

          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField name="fullName" value={resumeData.fullName || ''} onChange={(e) => setResumedata({ ...resumeData, fullName:e.target.value })} label="Full Name" variant="standard" />
            <TextField name="location" value={resumeData.location || ''} onChange={(e) => setResumedata({ ...resumeData, location:e.target.value })} label="Location" variant="standard" />
            <FormControl variant="standard">
              <InputLabel>Choose Job Title</InputLabel>
              <Select name="job" value={resumeData.job || ''} onChange={(e) => setResumedata({ ...resumeData, job:e.target.value })}>
                {jobrole.jobRoles.map(job => <MenuItem key={job} value={job}>{job}</MenuItem>)}
              </Select>
            </FormControl>
          </div>

          <h3>Contact Details</h3>
          <div className="row p-3">
            <TextField name="email" value={resumeData.email || ''} onChange={(e) => setResumedata({ ...resumeData, email:e.target.value })} label="Email" variant="standard" />
            <TextField name="phone" value={resumeData.phone || ''} onChange={(e) => setResumedata({ ...resumeData, phone:e.target.value })} label="Contact Number" variant="standard" />
            <TextField name="linkedin" value={resumeData.linkedin || ''} onChange={(e) => setResumedata({ ...resumeData, linkedin:e.target.value })} label="Linkedin Link" variant="standard" />
            <TextField name="github" value={resumeData.github || ''} onChange={(e) => setResumedata({ ...resumeData, github:e.target.value })} label="Github Link" variant="standard" />
          </div>

          <h3>Educational Details</h3>
          <div className="row p-3">
            <TextField name="degree" value={resumeData.degree || ''} onChange={(e) => setResumedata({ ...resumeData, degree:e.target.value })} label="Bachelor's Degree" variant="standard" />
            <TextField name="college" value={resumeData.college || ''} onChange={(e) => setResumedata({ ...resumeData, college:e.target.value })} label="College/University Name" variant="standard" />
            <TextField name="year" value={resumeData.year || ''} onChange={(e) => setResumedata({ ...resumeData, year:e.target.value })} label="Year of Graduation" variant="standard" />
          </div>

          <h3>Skills</h3>
          <div className="d-flex gap-2">
            <input ref={skillRef} type="text" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Add new skill" className="form-control" />
            <button onClick={() => addSkill(skillRef.current.value)} style={{ color:'#755846' }} className="btn">Add</button>
          </div>

          <h6 className="mt-3">Added Skills</h6>
          <div className="p-3 d-flex gap-2 flex-wrap">
            {resumeData?.skills?.map((skill) => (
              <button key={skill} onClick={() => removeSkill(skill)} className="btn my-1" style={{ backgroundColor:'#8e9cdd' }}>{skill} <FaXmark className="ms-2" /></button>
            ))}
          </div>

          <h3>Summary</h3>
          <div className="p-3 row">
            <TextField name="summary" value={resumeData.summary || ''} onChange={(e) => setResumedata({ ...resumeData, summary:e.target.value })} label="Summary" variant="standard" multiline rows={4} />
          </div>

          <div>
            <button onClick={handleUpdate} className='btn btn-light' style={{ color:'#755846' }}>Update Resume</button>
          </div>

        </Box>
      </Modal>
    </>
  )
}

export default Edit