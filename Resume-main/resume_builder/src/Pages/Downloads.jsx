  import React from 'react'
import { Link } from 'react-router-dom'

  function Downloads() {
    return (
      <div className='container my-5'>
        <div className='d-flex justify-content-between align-items-center'>
        </div>
        <p className='my-3 fw-bolder'>Total Downloaded Resume From the Site is <span className='text-danger fs-4'>0</span></p>
        <div className='row my-5'>

          <div className='col-lg-4 mb-3'>
            <div style={{ height: '400px' }} className='shadow p-3 rounded'>
              <h6>Review at :1.00</h6>
              <div className='mt-3 text-center'>
                <Link to={""}><img className='w-100' height="300" src="placeholder.jpg" alt="Download CV" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Downloads
