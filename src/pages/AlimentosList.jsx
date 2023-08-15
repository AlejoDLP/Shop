import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import ProductsAlimentos from '../components/ProductsAlimentos'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const AlimentosList = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Title>Alimentos</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Productos:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Tipo
                        </Option>
                        <Option>Alimentos</Option>
                        <Option>Bebidas</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Organizar Productos:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Más reciente
                        </Option>
                        <Option>Precio (Asc)</Option>
                        <Option>Precio (Desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductsAlimentos />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default AlimentosList
