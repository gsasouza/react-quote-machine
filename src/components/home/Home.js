// @flow

import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Quote from './Quote';

const Wrapper = styled.div`
  @font-face {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    font-style: normal;
  }
`;
export default () => (
  <Wrapper>
    <Content><Quote/></Content>
  </Wrapper>
);
