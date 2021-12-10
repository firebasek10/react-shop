import React from 'react'

export default function NetflixHeaderComponent() {
    
    return (
        <div className='d-flex  justify-content-between P-3'>
            <div className='background'style={{color:'red', fontSize:'50px'}}>
                NETFLIX
            </div>
            <div>

            <div>
                <select>
                    <option value="">Language</option>
                    <option value="">English</option>
                    <option value="">हिंदी</option>

                </select>
            <button class="btn btn-danger ms-3">
                       Signin
                   </button>
            </div>
        </div>
        </div>
    )
}
