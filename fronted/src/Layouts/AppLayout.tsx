import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader';
import styled from 'styled-components';
import Header from '../components/Header';
import Popups from '../components/Popups';
import Web3ReactManager from '../components/Web3ReactManager';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 160px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};

  z-index: 1;
`;

const Marginer = styled.div`
  margin-top: 5rem;
`;

export default function AppLayout() {
  return (
    <Fragment>
      <DarkModeQueryParamReader />
      <AppWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Popups />
          <Web3ReactManager>
            <Outlet />
          </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Fragment>
  );
}
