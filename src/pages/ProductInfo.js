/*
* 작성자 : 김소영
* iPhone13 제품의 디테일 정보를 담고있는 페이지입니다.
* 업데이트 : 2022-06-19
*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Nav from '../components/Navbar/Nav';
import iphone13pro from '../img/apple/iphone13-pro.png';
import { addItem } from '../store/cartItemSlice';

const RibbonAnimation = keyframes`
  0% {
    transform: translateY(-48px);
    color: white;
    background-color: #0066cc;
  }
  30%{
    transform: translateY(0px);
    color: white;
    background-color: #0066cc;
  }
  100% {
    color: #1d1d1f;
    background-color: #f5f5f7;
  }
`;

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

  .price {
    font-size: 17px;
    font-weight: 400;
  }
`

const RibbonContent = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightGray};
  animation: ${RibbonAnimation} 2.2s ease-in-out;

  p{
    font-size: 13px;
    text-align: center;
  }
`;

const InfoBox = styled.div`
  display: flex;
  width: 980px;
  height: 530px;
  margin: auto;

  .img {
    flex-basis: 50%;
    background-image: url(${iphone13pro});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .product {
    margin-left: 80px;
  }

  .product-header{
    padding-top: 40px;
    color: ${props => props.theme.darkGray};
    
    p {
      color: #bf4800;
      font-size: 16px;
    }

    h1 {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: -1px;
      padding-bottom: 10px;
    }

    h5 {
      font-size: 16px;
    }
  }

  .summary {
    background-color: #fbfbfd;
    width: 100%;
    padding: 30px;
    margin-top: 30px;

    h1 {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
      margin-bottom: 2px;
      opacity: 0.7;

    }
    .color-blue {
      color: ${props => props.theme.blue};
      opacity: 1;
      padding-bottom: 50px;
      border-bottom: 0.5px solid ${props => props.theme.borderColor};
    }
    .btn {
      font-size: 14px;
      width: 100%;
      color: white;
      border: none;
      border-radius: 6px;
      background-color: ${props => props.theme.blue};
      margin-top: 50px;
      padding: 8px;

      &:hover {
        background-color: ${props => props.theme.btnHover};
      }
    }
  }
`;


function ProductInfo() {

  let dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <HeaderContent>
        <div>
          <p>iPhone 13 Pro</p>
          <div className='flex-grow'></div>
          <p className='price'>₩1,350,000부터</p>
        </div>
      </HeaderContent>
      <div style={{ overflow: 'hidden' }}>
        <RibbonContent>
          <p>보상 판매 대상 iPhone을 반납하고 새 기기를 더 저렴하게.</p>
        </RibbonContent>
      </div>
      <InfoBox>
        <div className='img'></div>
        <div className='product'>
          <div className='product-header'>
            <p>New</p>
            <h1>iPhone 13 Pro 구입하기</h1>
            <h5>iPhone 8 이후 모델을 보상 판매하고 ₩70,000 – ₩720,000 더 저렴하게*</h5>
          </div>
          <div className='summary'>
            <h1>₩1,350,000</h1>
            <p>약 ₩122,727의 VAT 포함</p>
            <p className='color-blue'>최대 12 개월 신용 카드 할부</p>
            <Link to ='/cart'>
              <button
              className='btn'
              onClick={ ()=>{ dispatch(addItem({id : 0, title : 'iPhone 13 Pro', price : 1350000, count : 1})) }}>
                장바구니 담기
              </button>
            </Link>
          </div>

        </div>
      </InfoBox>
    </div>
  )
}

export default ProductInfo;