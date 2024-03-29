import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    margin: 20px 0px;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Iniciar Sesion</Title>
                <Form>
                    <Input placeholder="Correo" />
                    <Input placeholder="Contraseña" />
                    <a href="/">
                        <Button>Inciar Sesion</Button>
                    </a>
                    <Link>CREAR UNA NUEVA CUENTA</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
