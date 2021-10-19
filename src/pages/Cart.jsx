import Announcement from '../components/Annoucement'
import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {mobile} from "../responsive"

import {Add,Remove} from '@material-ui/icons';
const Container = styled.div``

const Wrapper = styled.div`
    padding:20px;
    ${mobile({ padding:"10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBotton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor:pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column" })}
    
`
const TopTexts = styled.div`
    ${mobile({ dispaly:"none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0px 10px;
`

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection:"column" })}
`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;

const Image = styled.img`
    width:200px;
`;



const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height: 50vh;

`;

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color:${props=>props.color}

`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`

    flex: 1;
    display: flex;
    align-item: center;
    justify-content:center;
    flex-direction: column;

`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin:"5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:200;
    ${mobile({ marginBottom:"20px" })}
    
`
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:1px;
    
`
const SummaryTitle = styled.h1`
    font-weight:400;
`

const SummaryItem = styled.div`
    margin: 30px 0px;   
    display:flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && 500};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color:black;
    color:white;
    font-weight:600;

`



const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopBotton>CONTINUE SHOPPING</TopBotton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                        <TopBotton type="filled">CHECKOUT NOW</TopBotton>
                    </TopTexts>
                </Top>

                <Bottom>
                    

                    <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER</ProductName>
                                <ProductId><b>Id:</b>98765435674</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://media.istockphoto.com/photos/mens-shortsleeve-tshirt-mockup-in-front-and-back-views-picture-id1328049157?b=1&k=20&m=1328049157&s=170667a&w=0&h=Vr2S5dDVJaUxE8LqQ9q0lc98yNQFfU7rYaUA2rBnphk=" />
                            <Details>
                                <ProductName><b>Product:</b>T-shirt</ProductName>
                                <ProductId><b>Id:</b>98765435674</ProductId>
                                <ProductColor color="Gray" />
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                    <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
export default Cart