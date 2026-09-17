import React, { useEffect, useRef, useState } from 'react'
import Preview from '../Components/Preview'
import { FaFileDownload, FaEdit } from 'react-icons/fa'
import { AiFillBackward } from 'react-icons/ai'
import { generatePath, Link, useParams } from 'react-router-dom'
import { viewResumeAPI } from '../services/allAPI'
import html2canvas from 'html2canvas'
// import { jspdf } from "jspdf"

function ViewResume() {

  const { id } = useParams()
  const [resume, setResume] = useState({})
  const previewRef = useRef()

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

  const downloadCV = async () => {
   const previewTag=previewRef.current
   const canvas=await html2canvas(previewTag)
   console.log(canvas);
   
   canvas.toBlob((blob)=>{
    const shortUrl=URL.createObjectURL(blob)
    generatePDF(shortUrl)
   })
  }


  const generatePDF = async(resumeImg)=>{

    let today = new Date()

    let timestamp=`${today.toLocaleDateString()},${today.toLocalTimeString()}`;
    const pdf = new jspdf();


    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getWidth()
    pdf.addImage(resumeImg,"PNG",0,onabort,imageWidth,imageHeight)
  
  
  }

  

  return (
    <>
      <div className="container my-5">
        <div className="row">

          <div className="col-lg-2"></div>

          <div className="col-lg-8">

            <div className="d-flex justify-content-center align-items-center">

              <button
                onClick={downloadCV}
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

            <div className="p-5" ref={previewRef}>
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