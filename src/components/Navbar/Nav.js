import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import bagIcon from '../../img/bag_image.svg';
import logo from '../../img/apple_image.svg';
import { LinkItems } from './LinkItems';


const NavContainer = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: rgba(0,0,0,0.8);
  color: ${props => props.theme.lightGray};
  height: 44px;

  @media screen and (max-width: 768px) {
    ${props => {
    if (props.toggle) {
      return `
          background-color: black;
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
  padding: 0 22px;

  @media screen and (max-width: 768px) {
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
      position: absolute;
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
        transition: all .5s cubic-bezier(.32,.1,.24,.99);

    ${props => {
    if (props.toggle) {
      return `
        opacity: 1;
        
        `
    } else {
      return `
        opacity: 0;
       
        `
    }
  }}
     
     

     li {
      width: 100%;
      border-bottom: 1px solid ${props => props.theme.lightGray};
     }
  
    }
`


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


function Nav() {

  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <>
      <NavContainer toggle={clicked}>
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
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))
            }
          </Links>
          <CartIcon />
        </Content>
      </NavContainer>
      <SectionContent>
        <p><Link to="">온라인으로 쇼핑하고</Link>하고 무료 배송, 스페셜리스트 지원 등의 혜택을 받으세요.</p>
      </SectionContent>

    </>



  )
}

export default Nav;