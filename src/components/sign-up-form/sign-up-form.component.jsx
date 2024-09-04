import { useState } from 'react';

import Forminput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';


import './sign-up-form.style.scss';



const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        };


const SignUpForm = () => {
    const [formFields, setformFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    

    /* Reset form */
    const resetFormFields = () => {
        setformFields(defaultFormFields);
    };

    
    /* Password matches  */
    const handleSubmit = async (event) => {
        event.preventDefault();                 /* We don't want any default behavior of the form  */
        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        /* If fetching firebase server is fails */
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);


            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();


        }   catch(error) {
                if(error.code === "auth/email-already-in-use") {
                    alert("Cannot create user, email already in use");
                }
                console.log("User creation encountered an error", error);
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({...formFields, [name]: value });
    };
 

    /* Email and password form  */
    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span> Sign up with your email and password </span>

            <form onSubmit={handleSubmit} >
                <Forminput
                    label="Display Name"
                    type="text" 
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}  />

                <Forminput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}  />

                <Forminput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password} />

                <Forminput
                    label="Confirm Password"
                    type="password"
                    required 
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}  />

                <Button type="submit">Sign Up </Button>

            </form>
        </div>
    );
};
export default SignUpForm;