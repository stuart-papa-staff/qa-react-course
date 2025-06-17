import React from 'react';

interface ItemCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({id, name, price, imageUrl}) => {

    return (
        <div>
            <img src={imageUrl} width={200} height={200} alt={name} title={name} />
            <h3>{name}</h3>
            <p>£{price.toFixed(2)}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default ItemCard;