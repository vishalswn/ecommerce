import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Annoucement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from "../responsive"
const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ padding:"10px", flexDirection:"column" })}
`

const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({ height:"40vh", })}

`

const InfoContainer = styled.div`
     flex:1;
     padding:0px 50px;
     ${mobile({ padding:"10px"})}
`

const Title = styled.h1`
    font-weight:200;
`

const Desc = styled.p`
    margin:20px 0px;
`

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
    width:50%;
    margin 30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({ width:"100%" })}
`

const Filter = styled.div`
    dispaly:flex;
    align-items:center;
`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    ${mobile({ width:"100%" })}
    
    
    justify-content:space-between;
    `

const AmountContainer = styled.div`
    font-weight:700;
    display:flex;
    align-items:center;
`

const Amount = styled.span`
    width: 30px;
    height:30px;
    border-radius: 10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`

const Button = styled.button`
    padding:15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4
    }
`

const Remove = styled.button``

const Add = styled.button``

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor:pointer;
`

// const FilterContainer = styled.div``


const Product = (props) => {
    return (
        <div>
            <Container>
                <Navbar />
                <Announcement />
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://www.pinkblueindia.com/pub/media/catalog/product/cache/2de1d3c8e7267fcd3f38924536aad35c/p/a/partywear-velvet-dress-for-kids-girls.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Denim Jumpsuite</Title>
                        <Desc>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting,
                    </Desc>
                        <Price>$ 20</Price>
                        <FilterContainer>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color ="black"/>
                            <FilterColor color ="darkblue"/>
                            <FilterColor color ="gray"/>

                        </FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>Xs</FilterSizeOption>
                            </FilterSize>    
                        </Filter>
                        <AddContainer>
                            <AmountContainer>
                                <Remove>-</Remove>
                                <Amount>1</Amount>
                               <Add>+</Add>
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>    
                    </InfoContainer>
                </Wrapper>
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}
export default Product;