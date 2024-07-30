import React from 'react'
import Container from '../../components/container'
import {Field, Form, Formik} from "formik"

const Create = () => {
  return (
    <Container>
     <Formik initialValues={{name:""}} onSubmit={()=>{}}>
      <Form>
        <Field types="email" name="email"></Field>

      </Form>
      </Formik>
    </Container>
  )
}

export default Create
