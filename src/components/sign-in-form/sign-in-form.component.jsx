import { useState } from 'react';

import Forminput from '../form-input/form-input.component';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword  } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';


const defaultFormFields = {
        email: '',
        password: '',
        };


const SignInForm = () => {
    const [formFields, setformFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    

    /* Reset form */
    const resetFormFields = () => {
      setformFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
             await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();

        }   catch(error) {
            switch(error.code) {
                case "auth/invalid-credential":
                    alert("Incorrect password or incrorrect email");
                    break;

                case "auth/popup-closed-by-user":
                    alert("Popup closed by the user");
                    break;
                    default:
                        console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({...formFields, [name]: value });
    };

    /* Email and password form  */
    return (
        <div className='sign-up-container'>
            <h2>Already have an account? </h2>
            <span> Sign in with your email and password </span>

            <form onSubmit={handleSubmit} >
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


            <div className='buttons-container'>
                <Button type="submit">Sign In </Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                    Sign In With Google</Button>
            </div>
            </form>
        </div>
    );
};

export default SignInForm;