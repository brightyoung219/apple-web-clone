import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  padding: 0 15px;
  margin-top: 15px;
  color: #89898f;
  display: flex;
  flex-direction: column;

  .footer {
    width: 100%;
    margin: auto;
    max-width: 980px;
  }

  .borderB {
    border-bottom : 0.5px solid #89898f;
    margin-bottom: 8px;
  }

  .marginR {
    margin-right: 25px;
  }

  .flex-box {
    display: flex;
    justify-content: space-between;
  }

  .flex-glow {
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    .flex-box{      
      flex-direction: column;
    }
  }
`

const Text = styled.p`
  font-size: ${ props => props.fontSize};
  padding-bottom: 8px;

  @media screen and (max-width: 768px) {
      order: ${ props => props.order };
      padding-bottom: 5px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <div className='footer'>
        <Text fontSize={'11px'} className='borderB'>다양한 쇼핑 방법: Apple Store를 방문하거나, 리셀러를 찾아보거나, 080-330-8877번으로 전화하세요.</Text>
        <div className='flex-box'>
          <Text fontSize={'11px'} order={'3'} className='marginR'>Copyright © 2022 Apple Inc. 모든 권리 보유.</Text>
          <Text fontSize={'11px'} order={'4'}>개인정보 처리방침 | 웹 사이트 이용 약관 | 판매 및 환불 법적 고지 ⎮ 사이트 맵</Text>
          <Text className='flex-glow' order={'2'}></Text>
          <Text fontSize={'11px'} order={'1'}>대한민국</Text>
        </div>
        <Text fontSize={'10px'}> 사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2011-서울강남-00810호 | 대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로 517 | 대표전화 : 02-6712-6700 | 팩스 : 02-6928-0000</Text>
      </div>
    </FooterContainer>
  )
}

export default Footer