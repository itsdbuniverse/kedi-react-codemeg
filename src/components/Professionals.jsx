import React from 'react'
import '../css/prof.css'
import NavMain from './NavMain'
import { useEffect, useState } from 'react'
function Professionals() {

    const [professionalData, professionalResult] = useState([])

    //to get all the professionals
    const getProfessionals = async () => {
        const response = await fetch("http://localhost:5000/user/get-all-doctor");
        const result = await response.json()
        if (result.status) {
            console.log(result.data);
            professionalResult(result.data);
        }
    }
    useEffect(() => {
        getProfessionals();
    }, [])

    return (
        <>
            <NavMain />
            <div className="content-container">
                <content class="content">
                    <div className="left-content">
                        <h2>Professionals List</h2>
                    </div>
                    <div className="search-box">
                    <i class="fa fa-sort-desc" aria-hidden="true"></i>
                        <span class="all-input"><input type="dropdown" placeholder="All" /></span>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <span class="e-input"><input type="email" placeholder="Email-Address" /></span>
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
                                <th>User Detail</th>
                                <th>User type</th>
                                <th>Email Id</th>
                                <th>Mobile no</th>
                                <th>Reg. Date</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                professionalData.map((prof) => {
                                    return (
                                        <tr>
                                            <td>{prof.user_refrenceId}</td>
                                            <td>{prof.userName}</td>
                                            <td>{prof.userType}</td>
                                            <td>{prof.userEmail}</td>
                                            <td>{prof.userMobile}</td>
                                            <td>{prof.userDOB}</td>
                                            <td onClick={() => forDelete(professionalData.user_refrenceId)}><i-delete class="fa fa-trash-o" aria-hidden="true"></i-delete></td>
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

export default Professionals
