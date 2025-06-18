type CheckoutItemProps = {
    id: string
    name: string
    imageUrl: string
    price: number
}

const CheckoutItem = ({name, imageUrl, price }: CheckoutItemProps) => {
    return (
    <div>
        <img src={imageUrl} height={80} width={64} alt={name} title={name} />
        <div>
            <h3>{name}</h3>
            <p>£{price.toFixed(2)}</p>
        </div>
    </div>
    )
}
                          
export default CheckoutItem;