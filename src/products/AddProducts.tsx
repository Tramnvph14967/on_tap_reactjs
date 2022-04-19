import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import { ProductType } from '../style/ProductsType';


type AddProductsProps = {
  onAdd : (products : ProductType) => void
}

type inputfom = {
    id?: string,
    name: string,
    img: string,
    price: number,
    desc: string
}
const AddProducts = (props: AddProductsProps) => {
    const navigete = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<inputfom>();
    const onSubmit = (data : ProductType) =>{
        props.onAdd(data)
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

export default AddProducts