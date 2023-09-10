import { useField } from 'formik'
import React from 'react'

function Select({label, ...props}) {
    const [ field ,meta] = useField(props)
    console.log(meta);
    console.log(field);
    // value fieldin içindedir, errorlar ise metadadır. Əgər yazdigimiz validationlar ile value uygun gelmezse meta error true olacaq. Props içinde ise bizim Portal.jsx-de input componenti icerisine yazdigimiz deyerler durur.
  return (
    <div>
<label>{label} </label>
<select   {...props}  {...field}   className={ meta.error ?"input-error" : "" } /> 

{meta.error && <div className='error'>{meta.error} </div>}
    </div>
  )
}

export default Select