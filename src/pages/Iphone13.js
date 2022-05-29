import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Navbar/Nav';
import iphone13L from '../img/apple/iphone13_large.jpeg'; 
import iphone13M from '../img/apple/iphone13_medium.jpeg'; 
import iphone13S from '../img/apple/iphone13_small.jpeg'; 


const SectionContent = styled.div`
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255,255,255,0.72);
  color: ${props => props.theme.darkGray};
  width: 100%;
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #cccccc;
  padding: 0 15px;

  div {
    height: 50px;
    max-width: 980px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }

  .flex-grow {
    flex-grow: 1;
  }

  p {
    font-size: 21px;
    font-weight: 700;
  }
  
`

const Btn = styled.button`
  width: 65px;
  height: 24px;
  color: #fff;
  background-color: ${ props => props.theme.blue };
  font-size: 11px;
  border: none;
  border-radius: 30px;
  padding: 4px 11px;

  &:hover {
    background-color: #0071e3;
  }
`;

const TextBox = styled.div`
  margin-top: 130px;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
  }

  @media screen and ( max-width: 1068px ){
    margin-top: 970x;

    h2 {
      font-size: 56px;
      font-weight: 700;
      margin-top: -5px;
    }
  }

  @media screen and ( max-width: 734px ){
    margin-top: 70px;

    h1 {
      font-size: 20px;
    }
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 750px;
  background-image: url(${iphone13L});
  background-position: right;
  background-position-y: -50px;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and ( max-width: 1068px ){
    height: 670px;
    background-image: url(${iphone13M});
    background-position-y: center;
  }

  @media screen and ( max-width: 734px ){
    height: 746px;
    background-image: url(${iphone13S});
    background-position: center;
    background-position-y: -150px;
  }
  
`;



function Iphone13() {

  const [position, setPosition] = useState('state');
  
  return (
    <div>
     <Nav position={position}/>
     <div style={{height:'1000px'}}>
      <SectionContent>
        <div>
          <p>iPhone 13 Pro</p>
          <div className='flex-grow'></div>
          <div><Link to=''><Btn>구입하기</Btn></Link></div>
        </div>
      </SectionContent>
      <TextBox>
        <h1>iPhone 13 pro</h1>
        <h2>이게 바로 프로.</h2>
      </TextBox>
      <ImgBox></ImgBox>
     </div>
     
    </div>
  )
}

export default Iphone13