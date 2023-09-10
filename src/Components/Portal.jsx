import React from 'react'
import { Formik,Form} from 'formik';
import Input from './Input';
import { advanceSchema } from '../Schemas';
import Select from './Select';
import Checkbox from './Checkbox';
import { Link } from 'react-router-dom';

function Portal() {
  const onSubmit = async(values,actions) => {
    console.log(actions);
    
    await new Promise( resolve  => {
        setTimeout( resolve ,1000)
    
        actions.resetForm()
    }  )
        }
  
  return (
    <div>

<Formik
       initialValues={{ username: '', university:"" , isAccepted: false,  }}
      //  userName initial deyerine index.jsx-de yazdigimiz deyerler ile , inputun içerisinde fieldi parçalamaqla alinan value qarşilaşdirilir. Eger uygunsuzluq olarsa error qaytarir. O da meta ile ötürülür.
       onSubmit={onSubmit}
       validationSchema={advanceSchema}
     >

       {({isSubmitting}) => (
         <Form>
          <Input    label="Your username"  placeholder="Enter username" type="text" name="username" />
          {/* name initial value ile eyni olmalidir */}
          <Select   label="Your university"  placeholder="Select university" type="text" name="university" > 
          <option value="" disabled >Select university  </option>
          <option value="Cambridge" >Cambridge  </option>
          <option value="Oxford" >Oxford  </option>
          <option value="ICL" >ICL  </option>
          <option value="Birmingham" >Birmingham  </option>
          </Select>
          <Checkbox    type="checkbox" name="isAccepted" />
          <button type='submit' disabled={isSubmitting} >Submit </button>
          <Link  className='formLink' to="/"> Go Main Form </Link>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Portal