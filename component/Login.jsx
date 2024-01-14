import React, { useState, useRef } from 'react';
import './Login.css'

function Login({ name, setName, page, setPage }) {
    const dialogRef = useRef();

    const [editedName, setEditedName] = useState('')
    const [nameError, setNameError] = useState('');
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let hasError = false;

        if (editedName === '') {
            setNameError('Name is required');
            hasError = true;
        } else {
            setNameError('');
        }

        if (email === '') {
            setEmailError('Email is required!');
            hasError = true;
        } else {
            setEmailError('');
        }    
        
        if (!hasError) {
            setName(editedName);
            console.log('Form data saved!');
            dialogRef.current.close();
        }
    }

    function go(event, nextPage){
        event.preventDefault();
        setPage(nextPage);
        dialogRef.current.close();
    }

    return (
        <>
            <button
                className='login-button'
                onClick={() => dialogRef.current.showModal()}
            >    
            Login
            </button>

            <dialog ref={dialogRef}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name*: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(event) => {
                                setEditedName(event.target.value);
                                setNameError('');
                            }}
                        />
                        <p>{nameError}</p>
                    </div>

                    <div>
                        <label htmlFor='email'>Email*: </label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            onChange={(event) => {
                                setEmail(event.target.value);
                                setEmailError('');
                            }}
                        />
                        <p>{emailError}</p>
                    </div>
                    <div className='btn-container'>
                        <button type="submit">Login</button>
                        <button type="button" onClick={() => dialogRef.current.close()}>
                            Close
                        </button>
                    </div>
                    <div className='register-container'>
                        <p>No account?</p>
                        <button><a onClick={(event)=>go(event, 'Register')}>Register</a></button>
                    </div>
                </form>
            </dialog>
        
        </>
    )
}

export default Login
