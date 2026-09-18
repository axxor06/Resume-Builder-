import React from 'react'
import { MdEditSquare } from 'react-icons/md'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { TextField } from '@mui/material'
import jobrole from '../assets/jobrole.json'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

function Edit({ resumeData, setResumedata }) {

  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ color: '#755846' }}
        className='btn me-2'
      >
        <MdEditSquare className="fs-3" /> Edit CV
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>

          <Typography variant="h6">
            Edit Resume
          </Typography>

          <Box>

            <h3>Personal Details</h3>

            <div className="p-3 row">

              <TextField
                value={resumeData.fullName || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  fullName: e.target.value
                })}
                label="Full Name"
                variant="standard"
              />

              <TextField
                value={resumeData.location || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  location: e.target.value
                })}
                label="Location"
                variant="standard"
              />

              <FormControl variant="standard">

                <InputLabel>
                  Choose Job Title
                </InputLabel>

                <Select
                  value={resumeData.job || ''}
                  onChange={e => setResumedata({
                    ...resumeData,
                    job: e.target.value
                  })}
                >

                  {jobrole.jobRoles.map(job => (
                    <MenuItem key={job} value={job}>
                      {job}
                    </MenuItem>
                  ))}

                </Select>

              </FormControl>

            </div>

          </Box>

          <div>

            <h3>Contact Details</h3>

            <div className="row p-3">

              <TextField
                value={resumeData.email || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  email: e.target.value
                })}
                label="Email"
                variant="standard"
              />

              <TextField
                value={resumeData.phone || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  phone: e.target.value
                })}
                label="Contact Number"
                variant="standard"
              />

              <TextField
                value={resumeData.linkedin || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  linkedin: e.target.value
                })}
                label="Linkedin Link"
                variant="standard"
              />

              <TextField
                value={resumeData.github || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  github: e.target.value
                })}
                label="Github Link"
                variant="standard"
              />

            </div>

          </div>

          <div>

            <h3>Educational Details</h3>

            <div className="row p-3">

              <TextField
                value={resumeData.degree || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  degree: e.target.value
                })}
                label="Bachelor's Degree"
                variant="standard"
              />

              <TextField
                value={resumeData.college || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  college: e.target.value
                })}
                label="College/University Name"
                variant="standard"
              />

              <TextField
                value={resumeData.year || ''}
                onChange={e => setResumedata({
                  ...resumeData,
                  year: e.target.value
                })}
                label="Year of Graduation"
                variant="standard"
              />

            </div>

          </div>

        </Box>
      </Modal>
    </>
  )
}

export default Edit