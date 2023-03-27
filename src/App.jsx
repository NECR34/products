import './App.css'
import ProductsForm from './components/Form'
import ProductsList from './components/ProdList'
import Filter from './components/Filter'
import { useState, useEffect } from 'react'
import axios from 'axios'




function App() {
  
  const [products, setProducts] = useState([])
  const [productsUpdate, setProductsUpdate] = useState(null)
  const [search, setSearch] = useState("");
  

  const getData = () => {
  
    axios.get('https://products-crud.academlo.tech/products/')
    .then(resp => {
      setProducts(resp.data)
    }).catch(error => {console.log(error)})
    
  }

  useEffect( () => {
      getData()
    
    }, [] )

  const productsMaker = (productsData) => {
    axios
    .post('https://products-crud.academlo.tech/products/', productsData)
    .then(() => getData())
    .catch(err => {
      console.log(err)
    })
  }

  const eraseProducts = (id) => {
    axios
  .delete(`https://products-crud.academlo.tech/products/${id}/`)
  .then(() => getData())
  .catch(err => {
    console.log(err)
  })
  }

  const selection = (productsData) => {
    setProductsUpdate(productsData)
  }

  const editProducts = (data) => {
    axios
    .put(`https://products-crud.academlo.tech/products/${data.id}/`, data)
    .then(() => getData())
    .catch(err => {
      console.log(err)
    })
    setProductsUpdate(null)
  }

  return (
    <div>

    <Filter></Filter>
   
    <ProductsForm
      createProducts = {data => productsMaker(data) }
      selectionProducts = {productsUpdate}
      updateProducts = {data => editProducts(data)}
    />
 
     <ProductsList
      productsData = {products}
      eraseProducts = {id => eraseProducts(id)}
      selectionProducts = {products => selection(products)}
    />

    

   
    
    
  </div>
  )
}

export default App
