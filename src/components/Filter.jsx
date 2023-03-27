import {useEffect, useState} from 'react';
import axios from "axios";







function Filter() {

    const [product, setProduct]= useState([]);
    const [tableProduct, setTableProduct]= useState([]);
    const [search, setSearch]= useState("");

    

    const dataGet = async()=> {
        await axios.get('https://products-crud.academlo.tech/products/')
        .then(response=>{
        setProduct(response.data);
        setTableProduct(response.data);
        }).catch(error=>{
        console.log(error);
                        })
        }

    const handleChange = e => {
        setSearch(e.target.value);
        serching(e.target.value);
    }

    const serching = (termSearch) => {
        let resultSearch=tableProduct.filter((element)=>{
            if(element.name.toString().toLowerCase().includes(termSearch.toLowerCase())
                || element.category.toString().toLowerCase().includes(termSearch.toLowerCase())
            ){
      return element;
    }
    });

     setProduct(resultSearch);
}

    useEffect( () => {
    dataGet();
    },[])

         return (
           
                <div >
                     <div >
                    <input value={search} placeholder="Name or Category" onChange={handleChange}/>
                    <button>Search</button>   
                    </div>

                    <div>
                        <ul>
                        {
                            product.map((products)=>(
                        
                                <li key={products?.id}>

                                    <p>Name: {products?.name}</p>
                                    <p>Category: {products?.category}</p>
                                    <p>Price: $ {products?.price}</p>
                                    <p>Available:{products?.isAvailable}</p> 

                              </li>
                            
    
                        ))}
                        </ul>

                        </div>
                    
                </div>
             );
}

export default Filter;