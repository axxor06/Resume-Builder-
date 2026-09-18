import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllDownloadResumeAPI } from '../services/allAPI'

function Downloads() {

  const [downloadList, setDownloadList] = useState([])

  useEffect(() => {
    getDownloads()
  }, [])

  const getDownloads = async () => {
    const response = await getAllDownloadResumeAPI()
    if (response.status == 200) setDownloadList(response.data)
  }

  console.log(downloadList)

  return (
    <div className='container my-5'>
      <p className='my-3 fw-bolder'>Total Downloaded Resume From the Site is <span className='text-danger fs-4'>{downloadList.length}</span></p>

      <div className='row my-5'>
        {downloadList.length > 0 ? downloadList.map(resume => (
          <div key={resume?.id} className='col-lg-4 mb-3'>
            <div style={{height:'400px'}} className='shadow p-3 rounded'>
              <h6>Review at : {resume?.timestamp}</h6>
              <div className='mt-3 text-center'>
                <Link to={`/resume/${resume?.id}/view`}><img className='w-100' height="300" src={resume?.resumeImg} alt="Download CV" /></Link>
              </div>
            </div>
          </div>
        )) : <p>No resume downloaded yet</p>}
      </div>
    </div>
  )
}

export default Downloads