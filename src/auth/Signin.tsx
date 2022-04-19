import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import { ProductType } from '../style/ProductsType';
import axios from 'axios';
import { Usertype } from '../style/UserType';


type inputfom = {
    id?: string,
    name:string,
    email: string,
    password: number
}
const Signin = () => {
    const navigete = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<inputfom>();

    const onSubmit = async (datas : Usertype) =>{
        const {data} = await axios.post('http://localhost:3001/signin', datas);
        localStorage.setItem('user', JSON.stringify(data) );

    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label  className="form-label">email</label>
    <input type="text" {...register('email', {required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.email && <span>khong duoc de trong</span>}
  </div>
  <div className="mb-3">
    <label  className="form-label">Pass</label>
    <input type="number" {...register('password', {required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.password && <span>khong duoc de trong</span>}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signin  