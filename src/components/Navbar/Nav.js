/*
* 작성자 : 김소영
* navbar 컴포넌트 파일 입니다.
* 업데이트 : 2022-06-17
*/

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import bagIcon from '../../img/bag_image.svg';
import logo from '../../img/apple_image.svg';
import { LinkItems } from './LinkItems';


const NavContainer = styled.nav`

  /* LandingPage.js 페이지에서만 position fixed,
     그 외 페이지에서는 props로 static을 전달 받습니다. */

  position: ${props => props.position};
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: ${props => props.toggle ? 'black' : 'rgba(0,0,0,0.8)'};
  color: ${props => props.theme.lightGray};
  height: 44px;

  @media screen and (max-width: 768px) {
    ${props => {
    if (props.toggle) {
      return `
          height: 100vh;
          transition: all 0.8s cubic-bezier(.32,.1,.24,.99);

        `
    } else {
      return `
          height: 48px;
          transition: all 0.8s cubic-bezier(.32,.1,.24,.99);
        `
    }
  }}
    }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    height: 48px;
    position: relative;
    }
`

const Logo = styled.div`
  width: 17px;
  height: 44px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 768px) {
      height: 48px;
      position: absolute;
      left: 50%;
      
    }
`

const CartIcon = styled.div`
  width: 17px;
  height: 44px;
  background-image: url(${bagIcon});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 768px) {
      height: 48px;
      position: fixed;
      right: 22px;
    }
`

const MenuToggle = styled.div`
  display: none;
  position: absolute;
  left: 22px;
  top: 14px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 768px) {
      display: block;
    }
`


const Links = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 12px;

  li {
    padding: 12px 12px;
    opacity: 0.8;
    
  }

  .link {
    color: ${props => props.theme.lightGray};
    opacity: 0.8;
    &:hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }

  @media screen and (max-width: 768px) {

        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        position: absolute;
        top: 48px;
        font-size: 15px;
        padding: 12px 0;
        top:  ${props => (props.toggle ? '48px' : '-500px')};
        transition: all 1s cubic-bezier(.32,.1,.24,.99);

     li {
      width: 100%;
      border-bottom: 1px solid ${props => props.theme.lightGray};
     }
  
    }
`


function Nav({ position }) {

  // clicked : max-width 768px 이하에서 메뉴리스트 토글버튼 구현을 위한 변수입니다.

  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <>
      <NavContainer toggle={clicked} position={position}>
        <Content>
          <MenuToggle onClick={onClick}>
            <FontAwesomeIcon icon={clicked ? faXmark : faBars} />
          </MenuToggle>
          <Link to='/'>
            <Logo />
          </Link>
          <Links toggle={clicked}>
            {
              LinkItems.map((item, index) => (
                <li key={index}>
                  <Link className='link' to={item.url}>{item.title}</Link>
                </li>
              ))
            }
          </Links>
          <Link to='/cart'>
            <CartIcon />
          </Link>
        </Content>
      </NavContainer>


    </>



  )
}

export default Nav;