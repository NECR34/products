import {useForm} from "react-hook-form"
import { useEffect } from "react"





const ProductsForm = ({createProducts, selectionProducts, updateProducts}) => {

  

    const {register, handleSubmit, reset} = useForm ()
   
    
        useEffect(() => {
            if (selectionProducts) {
                reset(selectionProducts)
            } else {
                resetForm()
            }
        },[selectionProducts])

        const submit = (data) => {
            if (selectionProducts) {
                updateProducts(data)
            } else {
                createProducts(data)
                resetForm()
            }
            
        }
       

    const resetForm = () => {reset( {
        name:"",
        category:"",
        price:"",
        isAvailable:"",
        

    })}
        return (
    <div>
        <form onSubmit={handleSubmit(submit)}>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Product Name" {...register("name")} />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" placeholder="Product Category"  {...register("category")} />
            <label htmlFor="price" >Price</label>
            <input type="text" id="price" placeholder="Price"  {...register("price")} />
            <label htmlFor="isAvailable">Is Available</label>
            <input type="checkbox" id="isAvailable" {...register("isAvailable")} />
            <input type="submit" value={ selectionProducts? "update" : "register" } />
            <button onClick={() => resetForm () }>Reset</button>
            

        </form>

    

    </div>
        )

}



export default ProductsForm