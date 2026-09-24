import React, { useEffect, useRef, useState } from 'react'
import Preview from '../Components/Preview'
import { FaFileDownload } from 'react-icons/fa'
import { AiFillBackward } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { viewResumeAPI, downloadResumeAPI } from '../services/allAPI'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import Edit from '../Components/Edit'

function ViewResume() {

  const { id } = useParams()
  const [resume, setResume] = useState({})
  const previewRef = useRef()

  useEffect(() => {
    getAresume()
  }, [id])

  const getAresume = async () => {
    const response = await viewResumeAPI(id)
    if (response.status == 200) setResume(response.data)
  }

  const downloadCV = async () => {
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)

    canvas.toBlob(async (imgFile) => {
      const formData = new FormData()
      formData.append("file", imgFile)
      formData.append("upload_preset", "resumes")

      const result = await fetch('https://api.cloudinary.com/v1_1/bzd00fro/auto/upload', {
        method: "POST",
        body: formData
      })

      const serverData = await result.json()
      console.log(serverData)

      const url = serverData.secure_url

      generatePDF(url, resume.fullName)
    })
  }

  const generatePDF = async (resumeImg, fullName) => {
    const today = new Date()
    const timestamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`
    const pdf = new jsPDF()

    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(resumeImg, 'PNG', 0, 0, imageWidth, imageHeight)

    const downloadDetails = {
      timestamp,
      resumeId: id,
      resumeImg,
      jobRole: resume.job
    }

    const result = await downloadResumeAPI(downloadDetails)

    if (result.status == 201) pdf.save(`${fullName}-CV.pdf`)
  }

  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-lg-2"></div>

        <div className="col-lg-8">

          <div className="d-flex justify-content-center align-items-center">

            <button onClick={downloadCV} style={{color:'#714a2f'}} className="btn me-2">
              <FaFileDownload className="fs-5" /> Download CV
            </button>

            <Edit resumeData={resume} setResumedata={setResume}/>

            <Link to="/" style={{color:'#714a2f'}} className="btn">
              <AiFillBackward className="fs-5" /> Home
            </Link>

          </div>

          <div className="p-5" ref={previewRef}>
            <Preview resumeData={resume} />
          </div>

        </div>

        <div className="col-lg-2"></div>

      </div>
    </div>
  )
}

export default ViewResume