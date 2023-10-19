import React from 'react'
import '../css/patient.css'
import NavMain from './NavMain'
import { useEffect, useState } from 'react'


function Patients() {

    const [patientData, patientResult] = useState([])

    // to get All the patients
    const getPatients = async () => {
        const response = await fetch("http://localhost:5000/patient/getallpatient");
        const result = await response.json()
        if (result.status) {
            console.log(result.data);
            patientResult(result.data);
        }
    }
    useEffect(() => {
        getPatients();
    } , [] )
  return (
    <>
    <NavMain />
    <div className="content-container">
    <content class="content">
        <div className="left-content">
            <h2>Patients List</h2>
        </div>
        <div className="search-box">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="Search" placeholder="Search"/>
        </div>
    </content>
    </div>
    <div className="table-container">
    <div className="mid-content">
            <div class="table-box">
                <div class="table-row">
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Patient Detail</th>
                        <th>Email Id</th>
                        <th>Mobile no</th>
                        <th>Reg. Date</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                                    patientData.map((patient) => {
                                        return (
                                            <tr>
                                                <td>{patient.patient_refrenceId}</td>
                                                <td>{patient.patientName}</td>
                                                <td>{patient.patientEmail}</td>
                                                <td>{patient.patientMobile}</td>
                                                <td>{patient.patientDOB}</td>
                                                <td onClick={()=> forDelete(patientData.patient_refrenceId)}><i-delete class="fa fa-trash-o" aria-hidden="true"></i-delete></td>
                                            </tr>
                                        )
                                    })
                                }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="end-container">
        <div className="end-content">
            <div className="left-c">
                <p>Showing 1 of 1 entries</p>
            </div>
            <div className="right-c">
            <p>Go to page no.<button className="one-btn">1</button>
            <button className="one-btn"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>
            <button className="one-btn">Previous</button><button className="one-btn">Next</button>
            <button className="one-btn"><i class="fa fa-angle-double-right" aria-hidden="true"></i>
</button></p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Patients