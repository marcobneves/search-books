import React, { useState } from 'react';
import './login.css'

import { Link } from 'react-router-dom';


const Login = () => {
    /** Created inputs */
    const username = useFormInput('')
    const password = useFormInput('')

    /** Send form */
    function submit(e) {
        e.preventDefault();
    }

    return (
        <div className="body-custom">
            <div className="container">
                <div className="content-center-custom">
                    <div className="row justify-content-center">
                        <div className="col-md-4 align-items-center">

                            <div className="card">
                                <div className="card-header background-title-custom">
                                    Login Form
                                    <button type="button" className="close close-custom">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <input
                                                maxLength="16"
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                {...username} />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                maxLength="10"
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                {...password} />
                                        </div>

                                        <div className="d-flex flex-row align-items-center">
                                            <div className="p-0">
                                                <div className="form-group">
                                                    <Link className="btn btn-custom" to='grid'>Sign in</Link>
                                                </div>
                                            </div>

                                            <div className="p-2">
                                                <div className="form-group">
                                                    <a href="#">Lost Your Password ?</a>
                                                </div>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function useFormInput(initialState) {
    const [value, setValue] = useState(initialState);

    /** return funcation handleChangeInput */
    function handleChangeInput(e) {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChangeInput
    }
}

export default Login;
