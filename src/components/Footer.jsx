//import react from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import {Room,Phone,MailOutline} from '@material-ui/icons';
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
    
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`
const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    `

const Logo = styled.h1`
    display: flex;
`

const Desc = styled.p`
    margin:20px 0;
`

const ContactItem = styled.p`
    display:flex;
    align-items:center;
`

const Payment = styled.img`
    width:50%;
`

const SocialContainer = styled.div`
    display: flex;
    `

const SocialIcon = styled.div`
    with:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;

    
`

const Footer = () =>{
     return(
         <Container>
              <Left>
                 <Logo>LAMA.</Logo>
                 <Desc>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type 
                     specimen book. It has survived not only five centuries, but also the leap into 
                     electronic typesetting, remaining essentially unchanged.</Desc>
                 <SocialContainer>
                     <SocialIcon color="3B5999">
                         <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                         <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                         <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                         <PinterestIcon/>
                    </SocialIcon>
                 </SocialContainer>
             </Left>
              <Center>
                  <Title>Useful Links</Title>
                  <List>
                      <ListItem>Home</ListItem>
                      <ListItem>Cart</ListItem>
                      <ListItem>Men Fassion</ListItem>
                      <ListItem>Women Fassion</ListItem>
                      <ListItem>Accessories</ListItem>
                      <ListItem>My Account</ListItem>
                      <ListItem>Order Tracking</ListItem>
                      <ListItem>WishList</ListItem>
                      <ListItem>WishList</ListItem>
                      <ListItem>Terms</ListItem>
                  </List>    
              </Center>
             <Right>
                <Title>Contact</Title>
                <ContactItem>
                   <Room style={{marginRight:"10px"}}/> 622,Dixie Path, South Africa
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+1 234 56 71
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>Contact@me.dev
                </ContactItem>
                <Payment src="https://i.iib.co/qfvn4z6/payment.png"/>
             </Right>
         </Container>
         )
     
 };
 export default Footer;