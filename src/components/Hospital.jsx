import { useEffect, useState } from 'react'
import '../css/hospital.css'
import { Link } from 'react-router-dom'
import AddHospitalpop from './AddHospitalpop'
import AlertDailog from './AlertDailog'
import NavMain from './NavMain'
import EditHospital from './EditHospital'

function Hospital() {
    const [delId, setDelId] = useState(null)
    const [editId, seteditId] = useState(null)


    // to show/hide Popup to add Hospitals
    
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [showEditpop, setEditpop] = useState(false);

    const [hospitals, setHospitals] = useState([])

    // to get All the hospitals
    const getHospitals = async () => {
        const response = await fetch("http://localhost:5000/hospitallist/get-all-hospital-name");
        const result = await response.json()
        if (result.status) {
            console.log(result.data);
            setHospitals(result.data)
        }
    }


    // to pass Hospital Id into popup components
    const forDelete =(hospitalId)=>{
        setShowConfirm(p => !p)
        setDelId(hospitalId)
    }
    //edit hospital
    const forEdit =(hospitalId)=>{
        setEditpop(p => !p)
        seteditId(hospitalId)
    }



    useEffect(() => {
        getHospitals()
    } , [] )

    return (
        <>
        <NavMain/>
            <div>
                <div className="content-container">
                    <content class="content">
                        <div className="left-content">
                            <h2>Hospitals List</h2>
                        </div>
                        <div className="right-content">
                            {/* <Link to="/add-h-pop"> */}
                                <button class="right-btn" onClick={()=> setShow(p => !p)}>Add Hospital</button>
                            {/* </Link> */}
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
                                    <th>Hospitals Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    hospitals.map((hospital) => {
                                        return (
                                            <tr>
                                                <td>{hospital.hospitalId}</td>
                                                <td>{hospital.hospitalName}</td>
                                                <td onClick={()=> forEdit(hospital.hospitalId)}><i-edit class="fa fa-pencil-square-o" aria-hidden="true"></i-edit></td>
                                                <td onClick={()=> forDelete(hospital.hospitalId)}><i-delete class="fa fa-trash-o" aria-hidden="true"></i-delete></td>
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
            </div>
            {show && <AddHospitalpop/>}
            {showConfirm && <AlertDailog hospitalId={delId} setShowConfirm={setShowConfirm} />}
            {showEditpop && <EditHospital hospitalId={editId} setEditpop={setEditpop} />}
        </>
    )
}

export default Hospital