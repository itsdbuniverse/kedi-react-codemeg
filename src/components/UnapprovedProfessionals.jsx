import React from 'react'
import NavMain from './NavMain'
import { useEffect, useState } from 'react'

function UnapprovedProfessionals() {

    const [unpatientData, unpatientResult] = useState([]);

    //to get all unapproved patient
    const getunpatients = async () => {
        const response = await fetch("http://localhost:5000/patient/get-all-unapproved-patient");
        const result = await response.json()
        if (result.status) {
            console.log(result.data);
            unpatientResult(result.data);
        }
    }
    useEffect(() => {
        getunpatients();
    }, [])

    return (
        <>
            <NavMain />
            <div className="content-container">
                <content class="content">
                    <div className="left-content">
                        <h2>Unapproved Patients</h2>
                    </div>
                    <div className="right-content">
                        <div className="search-box">
                        <i class="fa fa-search" aria-hidden="true"></i>
                            <input type="Search" placeholder="Search" />
                        </div>
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
                                <th>Patient Name</th>
                                <th>Email Id</th>
                                <th>Mobile No</th>
                                <th>Assign Dr</th>
                                <th>Reg.Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                unpatientData.map((unpat) => {
                                    return (
                                        <tr>
                                            <td>{unpat.patient_refrenceId}</td>
                                            <td>{unpat.patientName}</td>
                                            <td>{unpat.patientEmail}</td>
                                            <td>{unpat.patientMobile}</td>
                                            <td>{unpat.doctor_name}</td>
                                            <td>{unpat.created_at}</td>
                                            <td><a href="#"><i1 class="fa fa-check" aria-hidden="true"></i1></a> <a href="#"><i2 class="fa fa-times" aria-hidden="true"></i2></a></td>

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
                            <p>Go to page no.
                                <button className="one-btn">1</button>
                                <button className="one-btn">
                                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                                    </button><button className="one-btn">Previous</button>
                                    <button className="one-btn">Next</button>
                                    <button className="one-btn"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnapprovedProfessionals