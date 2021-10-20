import React from 'react'

import styled from "styled-components"
import {mobile} from "../responsive"
const Container = styled.div`
    width:100vh;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#fff;
    justify-content:center;
    background-size:cover;
`

const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        ${mobile({ width:"75%" })}

`

const Title = styled.h1`
        font-size: 24px;
        font-weight:300;
`

const Form = styled.form`
    display:flex; 
    flex-wrap:wrap;
    flex-direction:column;
`

const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin:10px 0px;
        padding: 10px;
`

const Link = styled.a`
    margin: 5px opx;
    font-size:12px;
    text-decoration:underline;
    cursor: pointer;
    `

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    cursor:pointer;
    color:white;
    margin-bottom: 10px;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )

}
export default Login