import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../auth/AuthContext';
import { Form, Button, Card, Alert, Container } from "react-bootstrap"


export default function RegisterPageContainer() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    //validation
    const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    async function handleSubmit(e) {
        e.preventDefault()

        let formValues = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: passwordConfirmRef.current.value
        }

        setFormErrors(validate(formValues));

        setError("")
        setLoading(true)
        const res = await signup(emailRef.current.value, passwordRef.current.value)
        if (res.uid) {
            navigate("/")
        } else {
            setError("Failed to create an account")
        }
        setLoading(false)
    }

    return (
        <div>
            <>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Sign Up</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit} >
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                        <span className='text-danger'><small>{formErrors.email}</small></span>
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                        {formErrors.password && <span className='text-danger'><small>{formErrors.password}</small></span>}
                                    </Form.Group>
                                    <Form.Group id="password-confirm">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control type="password" ref={passwordConfirmRef} required />
                                        {formErrors.confirmPassword && <span className='text-danger'><small>{formErrors.confirmPassword}</small></span>}
                                    </Form.Group>
                                    <Button disabled={loading} className="w-100 mt-4" type="submit">
                                        Register
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/login">Log In</Link>
                        </div>
                    </div>
                </Container>
            </>
        </div>
    )
}
