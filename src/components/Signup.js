import { useRef } from 'react';
import { Form, Button, Card, Alert} from "react-bootstrap"
import { useAuth } from './contexts/AuthContext';
import Login from './Login';
import { useState } from 'react';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { SignupFirebase } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("thissssssssss");

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await SignupFirebase(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }  
        setLoading(false)
    }


    return (
        <>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>} 
                    <form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group> 
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>   
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>  
                        <button disabled={loading} className="w-100" type="submit">Sign Up</button>
                    </form>
                </Card.Body >

          <div className="w-100 text-center mt-2" >
              Already have an account? Login
          </div>
        </>
    )
}
