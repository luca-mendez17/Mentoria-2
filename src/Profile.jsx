import React from "react";
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import './Profile.css'

function Profile() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className="containerProfile" onClick={handleAuthenticaton}>
            <h1>Hello {!user ? 'Guest' : user.email }</h1>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">First and last name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Age</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Phone number</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map(item => (
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
            ))}
        </div>
    )
}

export default Profile;