import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListProducts from './products/ListProducts'
import AddProducts from './products/AddProducts'
import EditProducts from './products/EditProducts'
import { ProductType } from './style/ProductsType'
import axios from 'axios'
import Signup from './auth/Signup'
import Signin from './auth/Signin'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<ProductType[]>([]); //1

  useEffect(() => {
        const getProduct = async () => {
          const {data} = await axios.get('http://localhost:3001/products');
          setProducts(data);
        }
        getProduct()
  },[]);

  const onHanderRemove = (id: any) => {
    confirm('ban muon xua khong')
      axios.delete('http://localhost:3001/products/'+id);
      setProducts(products.filter(item => item.id !== id));
      alert('xoa thanh cong')
  }

  const onhanderAdd = (data : ProductType) => {
      axios.post('http://localhost:3001/products', data);
      setProducts([...products, data]);
      alert("them thanh cong")
  }

  const onHanderEdit = (data: ProductType) => {
        axios.put('http://localhost:3001/products/'+data.id, data);
        setProducts(products.map(item => item.id === data.id ? data: item));
        alert('update thanh cong');
  }
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />
          <Route path='/products' element={<ListProducts products={products} onRemove={onHanderRemove}/>} />
          <Route path='/products/add' element={<AddProducts onAdd={onhanderAdd}/>} />
          <Route path='/products/:id/edit' element={<EditProducts onEdit={onHanderEdit}/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>
    </div>
  )
}

export default App
