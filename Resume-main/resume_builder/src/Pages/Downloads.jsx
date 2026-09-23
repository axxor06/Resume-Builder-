import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getAllDownloadResumeAPI } from '../services/allAPI'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Downloads() {

  const [downloadList, setDownloadList] = useState([])
  const [open, setOpen] = useState(false)

  const [label, setLabel] = useState([])
  const [value, setValue] = useState([])

  const colorPallete = ['#fb542b', '#569fdc', '#37f07b', '#daed53', '#bb53ed', '#ed6161']
  const backgroundColor = label.map((value, index) => colorPallete[index % colorPallete.length])

  const data = {
    labels: label,
    datasets: [{
      label: 'Downloads',
      data: value,
      backgroundColor
    }]
  }

  useEffect(() => {
    getDownloads()
  }, [])

  const getDownloads = async () => {
    const response = await getAllDownloadResumeAPI()

    if (response.status == 200) {
      setDownloadList(response.data)

      const output = {}

      response.data.forEach(item => {
        const currentJob = item.jobRole

        if (currentJob in output) {
          output[currentJob] += 1
        } else {
          output[currentJob] = 1
        }
      })

      setLabel(Object.keys(output))
      setValue(Object.values(output))
    }
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  console.log(downloadList)

  return (
    <div className="container my-5">

      <div className="d-flex justify-content-between align-items-center">
        <h2>All Downloaded Resume Details</h2>
        <button onClick={handleOpen} style={{ backgroundColor: '#050505' }} className='btn text-light'>
          View in Chart
        </button>
      </div>

      <div className='container my-5'>

        <p className='my-3 fw-bolder'>
          Total Downloaded Resume From the Site is <span className='text-danger fs-4'>{downloadList.length}</span>
        </p>

        <div className='row my-5'>
          {downloadList.length > 0 ? downloadList.map(resume => (
            <div key={resume?.id} className='col-lg-4 mb-3'>
              <div style={{ height: '400px' }} className='shadow p-3 rounded'>

                <h6>Review at : {resume?.timestamp}</h6>

                <div className='mt-3 text-center'>
                  <Link to={`/resume/${resume?.id}/view`}>
                    <img
                      className='w-100'
                      height="300"
                      src={resume?.resumeImg}
                      alt="Download CV"
                    />
                  </Link>
                </div>

              </div>
            </div>
          )) : <p>No resume downloaded yet</p>}
        </div>

      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            CV Download Count By Job Role
          </Typography>

          <Box id="modal-modal-description" sx={{ mt: 2 }}>

            <div className="d-flex justify-content-center align-items-center m-5"></div>

            <Pie data={data} />

            <p style={{ textAlign: 'justify' }}>
              This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.
            </p>

          </Box>

        </Box>
      </Modal>

    </div>
  )
}

export default Downloads