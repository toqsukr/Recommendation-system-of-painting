import React from 'react'
import "bootstrap/dist/css/bootstrap.css";


export const Loading = () => {
  return (
    <div style={{paddingTop: '220px', marginBottom: '220px'}} className="container container-sm container-md container-lg">
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}
