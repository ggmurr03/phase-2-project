import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';


const FormPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        seller: ""
    })

    return (
        <>
            <header><NavBar /></header>
            <section>
                <form autoComplete="off">
                    <h3>Add Item to Sell</h3>

                    <label htmlFor="name">Item Name</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="image">Item Image</label>
                    <input type="text" id="image" name="image" />

                    <label htmlFor="description">Item Description</label>
                    <textarea id="description" name="description" />

                    <label htmlFor="seller">Seller</label>
                    <input type="text" id="seller" name="seller" />

                    <button type="submit">Add Item</button>
                </form>
            </section>
        </>
    );
}

export default FormPage;
