import React from 'react'
import '../css/unapprovedpatient.css'
import NavMain from './NavMain'
import { useEffect, useState } from 'react'

function UnapprovedPatient() {

    const [unProfessional, unprofessionalResult] = useState([]);

    //to get all the unapproved professionals
    const getunProfessional = async () => {
        const response = await fetch("http://localhost:5000/user/get-all-unapproved-user");
        const result = await response.json();
        if (result.status) {
            console.log(result.data);
            unprofessionalResult(result.data);
        }
    }
    useEffect(() => {
        getunProfessional();
    })

    return (
        <>
            <NavMain />
            <div className="content-container">
                <content class="content">
                    <div className="left-content">
                        <h2>Unapproved Professionals</h2>
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
                                <th>User Name</th>
                                <th>Type</th>
                                <th>Email Id</th>
                                <th>Mobile no</th>
                                <th>Reg.Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                unProfessional.map((unproff) => {
                                    return (
                                        <tr>
                                            <td>{unproff.user_refrenceId}</td>
                                            <td>{unproff.userName}</td>
                                            <td>{unproff.userType}</td>
                                            <td>{unproff.userEmail}</td>
                                            <td>{unproff.userMobile}</td>
                                            <td>{unproff.created_at}</td>
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
                            <p>Go to page no.<button className="one-btn">1</button>
                            <button className="one-btn"><i class="fa fa-angle-double-left" aria-hidden="true"></i>
</button>
                            <button className="one-btn">Previous</button>
                            <button className="one-btn">Next</button>
                            <button className="one-btn"><i class="fa fa-angle-double-right" aria-hidden="true"></i>
</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnapprovedPatient