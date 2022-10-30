import { useForm } from "react-hook-form";
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom"; 

import { AuthUser } from "../services/Auth";

function Login() {
  //let navigate = useNavigate();

  const [getData, setDat] = useState("");

  const onSubmit = (getData) => {
    setDat(JSON.stringify(getData));//Transform to JSON
    AuthUser(getData); //Send to service

    //Create localStorage

   /*if (getData.user === "User" && getData.password === "123") {
      
      navigate("Home");

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Acceso denegado',
      })
    }*/

  };

  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <div class="background-gradient">
    <div className="row col-md-12">
      <div className="col-md-7 col-lg-4 col-sm-8 mx-auto">
        <div className="card card-login">
          <div className="card-body  p-5">
            <div className="container">
            <img
              className="image"
                  src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                  alt={"icon"}
            />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="div">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="div">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>

              <button className="button btn-block" type="submit" onClick={onSubmit}>
                Sing in
              </button>
              
            </form>
            
           {getData}
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;
