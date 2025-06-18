import React from 'react';
import { useState } from 'react';

interface ItemCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({id, name, price, imageUrl}) => {
    const [cart, setCart] = useState("Add to cart");

    const handleClick = () => {
        setCart(currentCart => currentCart === "Add to cart" ? "In cart" : "Add to cart")
    }

    return (
        <div>
            <img src={imageUrl} width={200} height={200} alt={name} title={name} />
            <h3>{name}</h3>
            <p>£{price.toFixed(2)}</p>
            <button onClick={handleClick}>{cart}</button>
        </div>
    )
}

export default ItemCard;