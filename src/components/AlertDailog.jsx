import React from 'react'
import '../css/addhospitalpop.css'

function AlertDailog({setShowConfirm , hospitalId}) {

  const deleteHospital = async () => {
    // let url = `-node.codemeg.com/hospitallist/delete-hospital-by-id/${hospitalId}`
    let url = `http://localhost:5000/hospitallist/delete-hospital-by-id/`+ hospitalId
    const response = await fetch(url, { method: "DELETE",} );
    const result = await response.json()
    console.log(result);
  }

  return (
    <>
            {/* <div>Are you sure ?</div> */}
            <div className="outer-container">
        <div className="form">
            <div className="form-head">
                <h4>Delete Hospital</h4>
                <p>Are you sure want to delete?</p>
            </div>
            <div className="form-btn">
                <button class="cancel"onClick={()=>setShowConfirm(p => !p)}>Cancel</button>
                <button class="add"onClick={()=>{deleteHospital}}>Delete Hospital</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AlertDailog