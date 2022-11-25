import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContainer>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 연습용 KR</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              넷플릭스 소개
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              고객 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              미디어 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">
              이용 약관
            </FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>Netflix Rights Reserved.</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;
//justify-content: center 디스플레이 가로 축을 가운데정렬
//align-items: center 세로 축을 센터정렬
//border-top -> 위에 선긋기
//@media (max-width: 769px){} => 미디어 쿼리를 이용, 769px보다 줄어들면 이렇게 바꿔라 선언

const FooterContent = styled.div``;
// 태그내용이 없으므로, div를 써도 되지만, 통일성을 위해 이름 붙임
const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;
const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-bewteen;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;
//  justify-content: space-bewteen; 띄엄 띄엄 정렬, 아이템 사이에 균일한 간격 보장
//반응형 디자인에 map쿼리 사용
const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
// hover: 마우스 가져다댈 때,

const FooterDescContainer = styled.div`
  margin-top: 30px @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
