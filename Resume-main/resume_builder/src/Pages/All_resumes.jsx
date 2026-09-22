import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaTrash, FaForward, FaBackward } from 'react-icons/fa'
import { allResumeAPI, deleteResumeAPI } from '../services/allAPI'

function All_resumes() {

  const [allResumes, setAllResumes] = useState([])
  const [dummyResumes, setDummyResumes] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 4

  useEffect(() => {
    getAllResumes()
  }, [])

  const searchOutput = useMemo(() => {
    return dummyResumes.filter(item => item.job.toLowerCase().includes(searchKey.toLowerCase()))
  }, [dummyResumes, searchKey])

  const lastIndexOfCurrentPage = currentPage * rowsPerPage
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - rowsPerPage
  const currentResume = searchOutput.slice(firstIndexOfCurrentPage, lastIndexOfCurrentPage)
  const totalPages = Math.ceil(searchOutput.length / rowsPerPage)

  const getAllResumes = async () => {
    const response = await allResumeAPI()
    console.log(response)

    if (response?.status == "200") {
      setAllResumes(response.data)
      setDummyResumes(response.data)
    }
  }

  const removeResume = async (id) => {
    if (confirm("are you sure")) {
      const response = await deleteResumeAPI(id)

      if (response?.status == "200") {
        getAllResumes()
      }
    }
  }

  return (
    <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>

      <p style={{ textAlign: 'justify' }} className="my-5">
        All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.
      </p>

      <div className="d-flex justify-content-center align-items-center w-50">
        <input onChange={e => { setSearchKey(e.target.value); setCurrentPage(1) }} type="text" placeholder="Search Candidate by their Job Roles" className="form-control" />
        <FaSearch style={{ marginLeft: '-30px' }} />
      </div>

      <table className="my-5 table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>options</th>
          </tr>
        </thead>

        <tbody>
          {currentResume.length > 0 ?
            currentResume.map((item, index) => (
              <tr key={item.id}>
                <td>{firstIndexOfCurrentPage + index + 1}</td>
                <td><Link to={`/resume/${item.id}/view`}>{item.fullName?.toUpperCase()}</Link></td>
                <td>{item.job?.toUpperCase()}</td>
                <td><button onClick={() => removeResume(item?.id)} className="btn text-danger"><FaTrash /></button></td>
              </tr>
            )) : <tr><td colSpan="4">No Resume Here!</td></tr>
          }
        </tbody>
      </table>

      <div className='d-flex align-items-center'>
        <button className='btn' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage == 1 || totalPages == 0}><FaBackward /></button>

     {currentPage} of {totalPages}

        <button className='btn' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == totalPages || totalPages == 0}><FaForward /></button>
      </div>
    </div>
  )
}

export default All_resumes