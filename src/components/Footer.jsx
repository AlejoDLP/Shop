import React from 'react'
import styled from 'styled-components'
import {
    Instagram,
    Phone,
    MailOutline,
    Person,
    School,
} from '@mui/icons-material'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Newman Shop</Logo>
                <Desc>
                    Bienvenido a <strong>Newman Shop</strong>. Ofrecemos una
                    amplia selección de productos de alta calidad para
                    satisfacer las necesidades de estudiantes y padres por
                    igual. Desde útiles escolares y materiales de arte hasta
                    comida para comprar en el colegio, tenemos todo lo que
                    necesita para ayudar a sus hijos a tener éxito en la
                    escuela. Nuestro compromiso con la excelencia y la
                    satisfacción del cliente significa que siempre trabajamos
                    duro para ofrecerle los mejores productos y servicios
                    posibles.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Link Utiles</Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Papeleria</ListItem>
                    <ListItem>Alimentos</ListItem>
                    <ListItem>Mi Cuenta</ListItem>
                    <ListItem>Lista de Deseos</ListItem>
                    <ListItem>Sobre Nostros</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem>
                    <Person style={{ marginRight: '10px' }} />
                    Alejandro De la pava
                </ContactItem>
                <ContactItem>
                    <School style={{ marginRight: '10px' }} />
                    Newman School
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} />
                    +57 123 4567890
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} />
                    alejandro.delapava@newmanstudent.edu.co
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
