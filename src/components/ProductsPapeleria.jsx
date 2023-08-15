import React from 'react'
import styled from 'styled-components'
import { papeleriaList } from '../data'
import Product from './Product'
import PapeleriaList from '../pages/PapeleriaList'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const PapeleriaProducts = () => {
    return (
        <Container>
            {papeleriaList.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default PapeleriaProducts
