import React from 'react'
import { useState } from 'react';

function EditHospital(setEditpop, hospitalId) {
   
  return (
    <>
    <div className="outer-container">
        <div className="form">
            <div className="form-head">
                <h4>Edit Hospital</h4>
                
            </div>
            <div className="form-body">
            <input type = "text" placeholder=""></input>
            </div>
            <div className="form-btn">
                <button class="cancel"onClick={()=>setEditpop(p => !p)}>Cancel</button>
                <button class="add">Add Hospital</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditHospital