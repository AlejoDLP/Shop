import React from 'react'
import styled from 'styled-components'
import { alimentosList } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProductsAlimentos = () => {
    return (
        <Container>
            {alimentosList.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default ProductsAlimentos
