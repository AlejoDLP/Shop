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
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
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

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREA UNA CUENTA</Title>
                <Form>
                    <Input placeholder="Nombre" />
                    <Input placeholder="Apellido" />
                    <Input placeholder="Usuario" />
                    <Input placeholder="Correo" />
                    <Input placeholder="Contraseña" />
                    <Input placeholder="Confirma tu contraseña" />
                    <Button>Crear</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
