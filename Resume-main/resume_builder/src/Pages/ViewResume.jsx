import React, { useEffect, useState } from 'react'
import Preview from '../Components/Preview'
import { FaFileDownload, FaEdit } from 'react-icons/fa'
import { AiFillBackward } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { viewResumeAPI } from '../services/allAPI'

function ViewResume() {

  const { id } = useParams()
  const [resume, setResume] = useState({})

  console.log(resume)

  useEffect(() => {
    getAresume()
  }, [id])

  const getAresume = async () => {
    const response = await viewResumeAPI(id)

    if (response.status == "200") {
      setResume(response.data)
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">

          <div className="col-lg-2"></div>

          <div className="col-lg-8">

            <div className="d-flex justify-content-center align-items-center">

              <button
                style={{ color: '#714a2f' }}
                className="btn me-2"
              >
                <FaFileDownload className="fs-5" />
                Download CV
              </button>

              <button
                style={{ color: '#714a2f' }}
                className="btn me-2"
              >
                <FaEdit className="fs-5" />
                Edit
              </button>

              <Link
                to="/"
                style={{ color: '#714a2f' }}
                className="btn"
              >
                <AiFillBackward className="fs-5" />
                Home
              </Link>

            </div>

            <div className="p-5">
              <Preview resumeData={resume} />
            </div>

          </div>

          <div className="col-lg-2"></div>

        </div>
      </div>
    </>
  )
}

export default ViewResume