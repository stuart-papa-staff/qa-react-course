//import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
//import itemsData from '../itemsData.json';

interface ItemsPageProps {
    itemsData: Array<{id: string; [key: string]: any}>;
}

const ItemsPage: React.FC<ItemsPageProps> = ({itemsData}) => {
    
    return (
        <>
        <h1>Our plants</h1>
            <div>
            {
            itemsData.map((item) => (
                <ItemCard
                key={item.id}  
                id={item.id} 
                name={item.name} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                />
             ))
            }
            </div>
        </>
    )
}

export default ItemsPage;