import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaTrash } from 'react-icons/fa'

function All_resumes() {
  return (
    <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>
      <p style={{ textAlign: 'justify' }} className="my-5">
        All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.
      </p>
      <div className="d-flex justify-content-center align-items-center w-50">
        <input type="text" placeholder="Search Candidate by their Job Roles" className="form-control" />
        <FaSearch style={{ marginLeft: '-30px' }} />
      </div>
      <table className="my-5 table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
            <tr>
<td>1</td>
<td> <Link to={""}> fullName </Link> </td>
<td> job</td>
<td> <button className="btn text-danger"> <FaTrash/> </button> </td>
</tr>
        </tbody>
      </table>
    </div>
  )
}

export default All_resumes
