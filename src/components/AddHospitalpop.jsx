import React, { useEffect,useState } from 'react'
import '../css/addhospitalpop.css'



function AddHospitalpop({setRefresh}) {


    //to get all hospital
    const [hospitalName, setHospitalName] = useState("")
    const Addhospital = async () => {
        let url = "http://localhost:5000/hospitallist/add-hospital-name"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ hospitalName: hospitalName })
        });
        const result = await response.json()
        console.log(result);
        setHospitalName("")
        setRefresh(p => !p)
    }


  return (
    <>
    <div className="outer-container">
        <div className="form">
            <div className="form-head">
                <h4>Add Hospital</h4>
                
            </div>
            <div className="form-body">
            <input type = "text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} placeholder="Enter Hospital"></input>
            </div>
            <div className="form-btn">
                <button class="cancel">Cancel</button>
                <button class="add" onClick={AddHospitalpop}>Add Hospital</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddHospitalpop