import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Navbar/Nav';
import { Link } from 'react-router-dom';
import ImgIphone13P from '../img/apple/iphone13-p.png';
import ImgIphone13M from '../img/apple/iphone13-m.png';
import ImgIphoneSeP from '../img/apple/iphoneSE-p.png';
import ImgIphoneSeM from '../img/apple/iphoneSE-m.png';
import unit1 from '../img/unit/unit1.png';
import unit2 from '../img/unit/unit2.png';
import unit3 from '../img/unit/unit3.png';
import unit4 from '../img/unit/unit4.png';
import unit5 from '../img/unit/unit5.png';
import unit6 from '../img/unit/unit6.png';


const SectionContent = styled.div`
  padding-top: 44px;
  background-color: ${props => props.theme.lightGray};
  color: ${props => props.theme.darkGray};
  width: 100%;
  display: flex;

  p {
    font-size: 13px;
    padding: 14px 22px ;
    margin: 0 auto;
    text-align: center;
  }

  a {
    color: ${props => props.theme.blue};
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
      padding-top: 48px;
    }
`


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 15px;
  gap: 15px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-right: 15px;
  }
`

const GridItem = styled.div`
  grid-column: ${ props => props.column };
  grid-row: ${ props => props.row };
  background-color: #fbfbfd;
  color: ${props => props.theme.darkGray};

  .links {
    text-align: center;
    margin: 15px 0;
    color: ${props => props.theme.blue};
    font-size: 17px;

    a {
      color: ${props => props.theme.blue};
      &:hover {
        text-decoration: underline;
      }
    }
    
    .ml {
      margin-left: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: ${ props => props.mrow };
  }
`
const TextCenter = styled.p`
  text-align: center;
  font-size: ${ props => props.size };
  font-weight: ${ props => props.weight };
  padding-top: ${ props => props.pt };
  height: ${ props => props.height };

  @media screen and (max-width: 768px) { 
    height: ${ props => props.mh };
    font-size: ${ props => props.ms };
    font-weight: ${ props => props.mw };
  } 

`

const ImgBox = styled.div`
    width: 100%;
    height: ${ props => props.h };
   

  .img {
    justify-self: center;
    height: 100%;
    background-image: url( ${props => props.pcImg} );
    background-size: contain;
    background-repeat : no-repeat;
    background-position : center bottom;
  }

  @media screen and (max-width: 768px) { 
    height : ${ props => props.mh };

    .img {
      background-size: ${props => props.size};
      background-image:  url( ${props => props.mobileImg} );
      background-position : ${props => props.position};
    }
  }
`


function LandingPage() {

  const [position, setPosition] = useState('fixed');

  return (
    <>
     <Nav position={position}/>
     <SectionContent>
      <p><Link to="">온라인으로 쇼핑하고</Link>하고 무료 배송, 스페셜리스트 지원 등의 혜택을 받으세요.</p>
     </SectionContent>

     <GridContainer>
       <GridItem column={'1 / span2'} row={'1'} mrow={'1/2'}>
         <div>
          <TextCenter height={'125px'} mh={'100px'} size={'55px'} weight={'700'} pt={'50px'} ms={'33px'}>iPhone 13 Pro</TextCenter>
          <TextCenter size={'25px'} weight={'400'} ms={'18px'} >이게 바로 프로.</TextCenter>
          <div className='links'>
            <Link to="/iphone-13">더 알아보기 &gt;</Link>
            <Link to="" className='ml'>구입하기 &gt;</Link>
          </div>
         </div>
          
         <ImgBox h={'370px'} mh={'350px'} pcImg={ImgIphone13P} mobileImg={ImgIphone13M} position={'center bottom'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>

       <GridItem column={'1 / span2'} row={'2'} mrow={'2/3'}>
         <div>
          <TextCenter size={'20px'} weight={'600'}  pt={'50px'}>새로운</TextCenter>
          <TextCenter height={'80px'} mh={'50px'} size={'55px'} weight={'700'} ms={'33px'}>iPhone SE</TextCenter>
          <TextCenter size={'25px'} weight={'400'} ms={'18px'} >거침없는 파워. 실속 있는 선택.</TextCenter>
          <div className='links'>
            <Link to="/iphone-13-pro">더 알아보기 &gt;</Link>
            <Link to="" className='ml'>구입하기 &gt;</Link>
          </div>
         </div>
          
         <ImgBox h={'330px'} mh={'300px'} pcImg={ImgIphoneSeP} mobileImg={ImgIphoneSeM} position={'right'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
       
       
       <GridItem column={'1'} row={'3'} mrow={'3/4'}>
        <ImgBox h={'600px'} mh={'480px'} pcImg={unit1} mobileImg={unit1} position={'center center'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
       <GridItem column={'2'} row={'3'} mrow={'4/5'}>
        <ImgBox h={'600px'} mh={'480px'} pcImg={unit2} mobileImg={unit2} position={'center center'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
       <GridItem column={'1'} row={'4'} mrow={'5/6'}>
        <ImgBox h={'600px'} mh={'480px'} pcImg={unit3} mobileImg={unit3} position={'center center'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
       <GridItem column={'2'} row={'4'} mrow={'6/7'}>
        <ImgBox h={'600px'} mh={'480px'} pcImg={unit4} mobileImg={unit4} position={'center center'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
       <GridItem column={'1'} row={'5'} mrow={'7/8'}>
        <ImgBox h={'600px'} mh={'480px'} pcImg={unit5} mobileImg={unit5} position={'center center'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
       <GridItem column={'2'} row={'5'} mrow={'8/9'}>
        <ImgBox h={'600px'} mh={'480px'} pcImg={unit6} mobileImg={unit6} position={'center center'} >
          <div className='img'></div>
        </ImgBox>
       </GridItem>
     </GridContainer>
      

    </>
  )
}

export default LandingPage;