import { Formik, Field, Form } from 'formik';
import router  from 'next/router';
import styles from '../styles/Login.module.css'
import { useState} from "react";
 

export default function LoginForm() {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    //let history = useHistory();
    const handleUsernameChange = (e) => {
         setUsernameInput(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
     e.preventDefault();
        let hardcodedCred = {
            username: 'Admin',
            password: 'Admin'
        }
       
         
        if (usernameInput == hardcodedCred.username && passwordInput == hardcodedCred.password) {
            //alert('correct username and password combination');
            swal({
                title: `${usernameInput}  successfully Logged In!`,
                text: "",
                icon: "success",
                buttons: {
                  confirm: true,
                },
              }).then(okay => {
                if (okay) {
                // window.location.href = "URL";
                router.push({ pathname: '/dashboard'});
               }
             });
            //router.push({ pathname: '/'});
            //return <Redirect to={{ pathname: '/'}}></Redirect>
        } 
         else {
        //     //bad combination
           //alert('wrong email or password combination');
           swal({
            title: " Incorrect Credentials!",
            text: "Wrong Username or Password entered ",
            icon: "error",
            buttons: {
              confirm: true,
            },
          });
         }
    }
    
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
            <Form className="mt-5" autoComplete="off" onSubmit={handleLoginSubmit} > 
                <Field className="form-control" id="username" name="username" placeholder="Username" onChange={handleUsernameChange}  value={usernameInput}  />
                <Field className="form-control mt-4" type="password" id="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={passwordInput}/>
                <button className="w-100 btn mt-5" id={styles.btnBackground} type="submit">Login</button>
                <a href="#" className="link-primary mt-2" id={styles.linkPassword}>Forgot Password</a>
            </Form>
        </Formik>
  </div>
    )
}