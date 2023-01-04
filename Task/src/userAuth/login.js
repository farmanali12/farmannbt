import React from 'react'
import { Button, Eye, Form, FormGroup, Image, Input, Submit } from './login.style'
import hide from '../assets/hide.svg'

const Login = () => {
    return (
        <Form>
            <FormGroup>
                <label htmlFor="user">username</label>
                <Input id='user' type='text' name='user' />
            </FormGroup>
            <FormGroup>
                <label htmlFor="pwd">password</label>
                <Input id='pwd' type='password' name='pwd' />
                <Eye>
                    <Button type='button' bg='none' >
                        <Image src={hide} alt="" />
                    </Button>
                </Eye>
            </FormGroup>
            <FormGroup>
                <Submit type='submit' bg='red'>
                    submit
                </Submit>
            </FormGroup>
        </Form>
    )
}

export default Login