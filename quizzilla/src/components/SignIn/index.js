// Core
import React, { Component } from 'react';
import { auth, googleAuthProvider, goodleAuthProvider } from '../../instruments/firebase';

class SignIn extends Component {
    render() {
        return (
            <div className="SignIn">
                <button onClick={() => auth.signInWithPopup(goodleAuthProvider)}>
                    Sign In
                </button>
            </div>
        )
    }
}

export default SignIn;
