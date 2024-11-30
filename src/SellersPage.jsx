import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import SellerCard from './SellerCard';


const SellersPage = () => {
    const [sellers, setSellers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/characters")
        .then(resp=>resp.json())
        .then(data => setSellers(data))
        .catch(error=>console.error(error))
    }, [])
        return (
            <div>
                <header><NavBar /></header>
                <h1>Sellers</h1>
                <p>Get to know the sellers.</p>
                <ul>
                    {sellers.map(seller => <SellerCard key= {seller.id} name={seller.name} image={seller.image} biography={seller.biography}/>)}
                </ul>
    
                
            </div>
        );
}

export default SellersPage;
