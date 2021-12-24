import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsComponent() {
    const{id,name}=useParams()
    return (
        <div>
        <h2>Details</h2>
        <dl>
            <dt>Id</dt>
            <dd>{id}</dd>
            <dt>Name</dt>
            <dd>{name}</dd>
           
        </dl>
    </div>
    )
}
