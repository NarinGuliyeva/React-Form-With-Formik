import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../Schemas';
import { Link } from 'react-router-dom';

function General() {
    const onSubmit = async(values,actions) => {
console.log(actions);

await new Promise( resolve  => {
    setTimeout( resolve ,1000)

    actions.resetForm()
}  )
    }

    const {values, errors, isSubmitting, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: "" ,
          age:"",
          password:"",
          confirmPassword:""
        },
        validationSchema:basicSchema,
        onSubmit:onSubmit,
      });
    //   yuxaridaki her bir propsa useFormik içerisindeki deyer uygun gelir. 
  return (
    <div>
        <form onSubmit={handleSubmit}>
<div>
    <label >Email</label>
    <input type="email"  id='email'   value={values.email}   onChange={handleChange}  placeholder='Enter your email'    className={ errors.email ? "error-input" : ""  } />
    { errors.email && <p> {errors.email}  </p>   }
</div>
<div>
    <label>Age</label>
    <input type="number"  id='age'   value={values.age}   onChange={handleChange}  placeholder='Enter your age'  className={errors.age ? "error-input"  : ""}  />
    { errors.age && <p> {errors.age} </p> }
</div>
<div>
    <label>Password</label>
    <input type="password"  id='password'   value={values.password}   onChange={handleChange}  placeholder='Enter your password'   className={errors.age ? "error-input"  : ""}  />
    { errors.password && <p> {errors.password} </p> }
</div>
<div>
    <label>Confirm password</label>
    <input type="password"  id='confirmPassword'   value={values.confirmPassword}   onChange={handleChange}  placeholder='Enter your password again'   className={errors.age ? "error-input"  : ""}  />
    { errors.confirmPassword && <p> {errors.confirmPassword} </p> }
</div>
<button  type='submit'  disabled={isSubmitting}  >Submit</button>
<Link  className="formLink" to="/portal">Go Portal</Link>
        </form>
    </div>
  )
}

export default General