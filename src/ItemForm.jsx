import React, { useState } from 'react';
import styled from "styled-components";

const StyledForm = styled.form`
  width: 200px;
  margin: auto;
  box-sizing: border-box;
  font-family: Uncial Antiqua, cursive;
  font-size: 20px;
  border: ridge 5px #D4AF37;
`
function ItemForm({items, setItems}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    seller: 'Warrior'
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')

    // setItems([...items, formData])


    fetch("http://localhost:3000/items",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(formData)
    })
    .then(resp=>resp.json())
    .then(data=> setItems([...items, data]))
    .catch(error=>console.error(error))
  }

  return (
      <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <label htmlFor="seller">Seller:</label>
          <select
            id="seller"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
          >
            <option value="Warrior">Warrior</option>
            <option value="Princess">Princess</option>
            <option value="Thorak">Thorak</option>
            <option value="Green Mage">Green Mage</option>
            <option value="Ninja">Ninja</option>
          </select>
          <button type="submit">Submit</button>
      </StyledForm>
  )
}

export default ItemForm