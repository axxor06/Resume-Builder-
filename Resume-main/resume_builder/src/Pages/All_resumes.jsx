import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaTrash } from 'react-icons/fa'
import { allResumeAPI, deleteResumeAPI } from '../services/allAPI'

function All_resumes() {

  const [allResumes, setAllResumes] = useState([])
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    getAllResumes()
  }, [])

  const searchOutput = useMemo(() => {
    return allResumes.filter(item => item.job.toLowerCase().includes(searchKey.toLowerCase()))
  }, [allResumes, searchKey])

  const getAllResumes = async () => {
    const response = await allResumeAPI()
    console.log(response)

    if (response.status == "200") {
      setAllResumes(response.data)
    }
  }

  const removeResume = async (id) => {
    if (confirm("are you sure")) {
      const response = await deleteResumeAPI(id)

      if (response.status == "200") {
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
        <input onChange={e => setSearchKey(e.target.value)} type="text" placeholder="Search Candidate by their Job Roles" className="form-control" />
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
          {searchOutput.length > 0 ?
            searchOutput.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td><Link to={`/resume/${item.id}/view`}>{item.fullName?.toUpperCase()}</Link></td>
                <td>{item.job?.toUpperCase()}</td>
                <td><button onClick={() => removeResume(item?.id)} className="btn text-danger"><FaTrash /></button></td>
              </tr>
            )) : <tr><td colSpan="4">No Resume Here!</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default All_resumes