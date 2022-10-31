import React from "react";
import { useParams, Link } from "react-router-dom";
import './Error.css'

const Error = () => {
    const {id} = useParams();
    return (
        <div className="error" >
            <Link to={'/'}><a href="./Home" class="btn btn-primary errorBoton">Return</a></Link>
        </div>
    )
}

export default Error;