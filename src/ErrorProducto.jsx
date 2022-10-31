import React from "react";
import { useParams, Link } from "react-router-dom";
import './ErrorProducto.css'

const ErrorProducto = () => {
    const {id} = useParams;
    return (<div className="errorProduct">
                <div class="card" >
                    <img class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Item not available!</h5>
                        <Link to={'/'}><a href="./Home" class="btn btn-primary errorBtn">Return</a></Link>
                    </div>
                </div>
            </div>
)
}

export default ErrorProducto;