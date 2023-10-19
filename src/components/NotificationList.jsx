import React from 'react'
import '../css/noti.css'
import NavMain from './NavMain'


function NotificationList() {
    return (
        <>
            <NavMain />
            <div className="content-container-noti">
                <content class="content">
                    <div className="left-content">
                        <h2>Notifications List</h2>
                    </div>
                </content>
                <div className="table-container">
                    <div className="mid-content">
                        <div class="table-box">
                            <div class="table-row-noti">
                                <table>
                                    <thead> 
                                        <tr>
                                            <th>Id</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><h6>User Onboard</h6>
                                                <p>test sss wants to onboard on the portal as a Doctor</p><p>8 minutes ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><h6>User Onboard</h6>
                                                <p>lisa chore wants to onboard on the portal as a Doctor</p><p>2 weeks ago.</p></td>

                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Jack wants to onboard on the portal as a patient</p><p>2 weeks ago.</p></td>

                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Jacky wants to onboard on the portal as a patient</p><p>2 weeks ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Fatou Ndeye wants to onboard on the portal as a patient</p><p>2 weeks ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Sayon KEITA wants to onboard on the portal as a patient</p><p>2 weeks ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Sayon KEITA wants to onboard on the portal as a patient</p><p>2 weeks ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Patient Rohan wants to onboard on the portal as a patient</p><p>2 months ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Patient Roman wants to onboard on the portal as a patient</p><p>2 months ago.</p></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td><h6>User Onboard</h6>
                                                <p>Doctor Lisa wants to onboard on the portal as a patient</p><p>2 months ago.</p></td>
                                        </tr>
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
                                <button className="one-btn"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationList