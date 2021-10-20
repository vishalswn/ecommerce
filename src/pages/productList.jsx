import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Announcement from '../components/Annoucement';
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from "../responsive"
import { useLocation } from 'react-router';
const Container = styled.div``;

const Title = styled.h1``;

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;

`;

const Filter = styled.div`
    margin:20px;
    ${mobile({ width:"0px 20px", display:"flex", flexDirection:"column" })}
    
`

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    ${mobile({ marginRight:"0px" })}
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({ margin:"10px 0px" })}
`
const Option = styled.option`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`

const ProductList = () => {
    const location = useLocation();
    // console.log('location',location.pathname.split("/")[2]);
    const [filter,setFilters] = useState({})
    const [sort,setSort] = useState("newest");
    const [cat,setCat] = useState();
    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value,

        });
        
    };
    console.log('filterdata',filter)

    return (
        <Container>
            {/* <Announcement/> */}
            <Navbar />
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Pink</Option>
                        <Option>Yellow</Option>
                        <Option>Orange</Option>
                    </Select>
                </Filter>
               
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="desc">Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filter} />
            <Newsletter />
            <Footer />
        </Container>
    )
}
export default ProductList;