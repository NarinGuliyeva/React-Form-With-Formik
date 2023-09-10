import { useField } from 'formik'
import React from 'react'

function Checkbox({label, ...props}) {
    const [ field ,meta] = useField(props)
    console.log(meta);
    console.log(field);
    // value fieldin içindedir, errorlar ise metadadır. Əgər yazdigimiz validationlar ile value uygun gelmezse meta error true olacaq. Props içinde ise bizim Portal.jsx-de input componenti icerisine yazdigimiz deyerler durur.
  return (
    <div>
        <div  className='checkbox'>  
<input  {...props}  {...field}   className={ meta.error ?"input-error" : "" } /> 
<span>I accept the agreement</span>
        </div>
{meta.error && <div className='error'>{meta.error} </div>}
    </div>
  )
}

export default Checkbox