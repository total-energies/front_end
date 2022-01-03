import { Formik, Field, Form } from 'formik';
import styles from '../styles/Login.module.css'

export default function LoginForm() {
    return (
  <div>
            <Formik
            initialValues={{
                username: '',
                password: '',
            }}

            onSubmit={() => {

            }}
        >
            <Form className="mt-5"> 
                <Field className="form-control" id="username" name="username" placeholder="Username" />
                <Field className="form-control mt-4" type="password" id="password" name="password" placeholder="Password" />
                <button className="w-100 btn mt-5" id={styles.btnBackground} type="submit">Login</button>
                <a href="#" className="link-primary mt-2" id={styles.linkPassword}>Forgot Password</a>
            </Form>
        </Formik>
  </div>
    )
}