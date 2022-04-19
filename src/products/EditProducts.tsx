import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import { ProductType } from '../style/ProductsType';
import axios from 'axios';


type EditProductsProps = {
  onEdit : (products : ProductType) => void
}

type inputfom = {
    id?: string,
    name: string,
    img: string,
    price: number,
    desc: string
}
const EditProducts = (props: EditProductsProps) => {
    const navigete = useNavigate();
    const {register, handleSubmit, formState: {errors},reset} = useForm<inputfom>();
    const {id} = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const {data} = await axios.get('http://localhost:3001/products/'+id);
            reset(data);
        }
        getProduct()
    },[]);

    const onSubmit = (data : ProductType) =>{
        props.onEdit(data)
        navigete('/products');
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label  className="form-label">name</label>
    <input type="text" {...register('name', {required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.name && <span>khong duoc de trong</span>}
  </div>
  <div className="mb-3">
    <label  className="form-label">img</label>
    <input type="text" {...register('img', {required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.img && <span>khong duoc de trong</span>}
  </div>
  <div className="mb-3">
    <label  className="form-label">price</label>
    <input type="number" {...register('price', {required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.price && <span>khong duoc de trong</span>}
  </div>
  <div className="mb-3">
    <label  className="form-label">desc</label>
    <input type="text" {...register('desc', {required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.desc && <span>khong duoc de trong</span>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default EditProducts 