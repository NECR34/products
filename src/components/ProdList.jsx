


const ProductsList = ({productsData, eraseProducts, selectionProducts}) => {

  
    
const eraseConfirm = (id) => {
    const confirm = window.confirm(`¿Are you sure you want to delete this article?${id}` )
    if (confirm) eraseProducts(id)
}

const editConfirm = ( id ) => {
    const confirm = window.confirm(`¿Do you want to edit this article?${id}` )
        if (confirm) selectionProducts(id)
}

    return(
        <ul>
            {
                productsData?.map ((products)=>{
                    return (
                        <li key={products?.id}>
                            
                            <p>Name: {products?.name}</p>
                            <p>Category: {products?.category}</p>
                            <p>Price: $ {products?.price}</p>
                            <p>Available:</p> 
                            <button onClick={() => {eraseConfirm(products?.id)}}>Erase</button>
                            <button onClick={() => {editConfirm(products)}}>Edit</button>
                            
                        </li>
                    )
                })
            }
        </ul>
    )

} 

export default ProductsList