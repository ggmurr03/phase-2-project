import React, { useState } from 'react';

function SellerForm({sellers, setSellers}) {
    const [sellerFormData, setSellerFormData] = useState({
        name: '',
        image: '',
        biography: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setSellerFormData((oldData) => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Seller submitted')

        fetch("http://localhost:3000/characters",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(sellerFormData)
        })
        .then(resp => resp.json())
        .then(data => setSellers([...sellers, data]))
        .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Seller Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={sellerFormData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="image">Image URL:</label>
            <input
                type="text"
                id="image"
                name="image"
                value={sellerFormData.image}
                onChange={handleChange}
                required
            />
            <label htmlFor="biography">Seller Bio:</label>
            <textarea
                id="biography"
                name="biography"
                value={sellerFormData.biography}
                onChange={handleChange}
                required
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SellerForm