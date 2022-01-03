import React from 'react'
import { Form, Field } from 'formik'

function AddModal () {
    return (
        // Modal Fields 
        <Form>
           <Field as="select" name="color" placeholder="Theme">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
           <Field as="select" name="color" placeholder="Sub Theme">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
         
        </Form>
      
    )
}


export  default  AddModal;