import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Navbar/Nav';
import iphone13L from '../img/apple/iphone13_large.jpeg'; 
import iphone13M from '../img/apple/iphone13_medium.jpeg'; 
import iphone13S from '../img/apple/iphone13_small.jpeg'; 
import wallpaper from '../img/iphone13_wallpaper.jpeg';


const HeaderContent = styled.div`
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255,255,255,0.72);
  color: ${props => props.theme.darkGray};
  width: 100%;
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #cccccc;
  padding: 0 15px;
  z-index: 5;

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
    height: 500px;
    background-image: url(${iphone13S});
    background-size: cover;
    background-position: center;
    background-position-y: bottom;
  }
  
`;

const SectionContent = styled.div`
  background-image: url(${wallpaper});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: -100vw;
  height: 200vh;
  padding-top: 100px;


  .text-content {
    margin: 0 auto;
    max-width: 980px;
    color: ${ props => props.theme.lightGray };
    font-size: 80px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1px;
  }
  ul {
    margin-right: 100px;
  }

  li {
    display: inline;
    word-break: keep-all;
    transition: opacity 0.5s cubic-bezier(0.25,1,0.5,1);
    
  }

  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0.3;
  }

  p {
    margin: 53px 0;
  }
  .ml {
    margin-left: 6.4px;
  }

  @media screen and ( max-width: 1068px ){

    .text-content {
     width: 692px;
     margin: 0 auto;
     font-size: 64px;
     line-height: 1.3;
   }
   ul {
    margin: 0 auto;
   }
  }

  @media screen and ( max-width: 734px ){
    .text-content {
     width: 87.5%;
     margin: 0 auto;
     font-size: 32px;
     font-weight: 600;
   }
  }
`;



function Iphone13() {

  const [position, setPosition] = useState('state'); //Navbar position
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition)
  };

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  console.log(scrollY)

  


  return (
    <div>
     <Nav position={position}/>
     <div>
      <HeaderContent>
        <div>
          <p>iPhone 13 Pro</p>
          <div className='flex-grow'></div>
          <div><Link to=''><Btn>구입하기</Btn></Link></div>
        </div>
      </HeaderContent>
      <TextBox>
        <h1>iPhone 13 pro</h1>
        <h2>이게 바로 프로.</h2>
      </TextBox>
      <ImgBox></ImgBox>
      <SectionContent>
       <div className='text-content'>
        <ul>
          <li className={ ( 725 < scrollY && scrollY < 928 ) ? 'show' : 'hide' }>비약적으로 강화된 카메라 시스템.</li>
          <li className={`ml ${( 928 < scrollY && scrollY < 1100 ) ? 'show' : 'hide' }`}>뛰어난 반응성으로 매일 하던 제스처에 전혀 새로운 감각을 선사하는 디스플레이.</li>
          <li className={`ml ${( 1100 < scrollY && scrollY < 1280 ) ? 'show' : 'hide' }`}>스마트폰 사상 가장 빠른 칩.</li>
          <li className={`ml ${( 1280 < scrollY && scrollY < 1563 ) ? 'show' : 'hide' }`}>독보적인 내구성. 획기적인 도약을 이뤄낸 배터리 성능까지.</li>
        </ul>
        <p className={`ml ${( 1563 < scrollY ) ? 'show' : 'hide' }`}>이제 프로할 시간.</p>
       </div>
     </SectionContent>
     </div>     
    </div>
  )
}

export default Iphone13