import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Navbar/Nav';
import { plus, minus } from '../store/cartItemSlice.js'

const BagContainer = styled.div`
  padding-top: 50px;
  margin-bottom: 100px;
`;

const Header = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${props => props.theme.borderColor};

  h1 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1px;
  }
  p {
    padding-top: 13px;
    font-size: 16px;
  }
  button {
    width: 290px;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 14px;
    margin-top: 30px;
    padding: 8px;
    background-color: ${props => props.theme.blue};

    &:hover {
      background-color: ${props => props.theme.btnHover};
    }
  }
`;

const CartItem = styled.ol`
  width: 980px;
  margin-left: auto;
  margin-right: auto;

  li {
    padding: 20px 0;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }

  .flex-box {
    display: flex;
  }

  .img {
    width: 200px;
  }

  .title {
    flex-basis: 45%;
    font-size: 24px;
    font-weight: 700;
  }
  .quantity {
    flex-basis: 20%;

    button {
      width: 27px;
      height: 27px;
      border-radius: 4px;
      font-size: 13px;
      border: none
    }

    span {
      margin: 0 20px;
    }
  }
  .price {
    flex-basis: 35%;
    font-size: 24px;
    font-weight: 700;
    text-align: right;

    .delete {
      margin-top: 10px;
      font-size: 15px;
      font-weight: 400;
      color: ${props => props.theme.blue};
      cursor: pointer;
    }
  }
`;

function Cart() {
  const [position, setPosition] = useState('state'); //Navbar position

  const item = useSelector( state => state.cartItem );
  console.log(item)

  let dispatch = useDispatch();

  return (
    <div>
      <Nav position={position} />
      <BagContainer>
        <Header>
          <h1>장바구니에 들어 있는 제품입니다.</h1>
          <p>모든 주문에 무료 배송 서비스가 제공됩니다.</p>
          <button>결제</button>
        </Header>
        <CartItem>
          { item.map( (a,i)=>  
            <li key={i}>
              <div className='flex-box'>
                <div className='img'>img</div>
                <div className='flex-box' style={{width: '100%'}}>
                  <div className='title'>{a.title}</div>
                  <div className='quantity'>
                    <button onClick={ ()=>{ dispatch(minus(i))} }>-</button>
                    <span>{a.count}</span>
                    <button onClick={ ()=>{ dispatch(plus(i))} }>+</button>
                  </div>
                  <div className='price'>
                    <p>{a.price * a.count}</p>
                    <p className='delete'>삭제</p>
                  </div>
                </div>
              </div>
            </li>
           )}
        </CartItem>
      </BagContainer>
    </div>
  )
}

export default Cart