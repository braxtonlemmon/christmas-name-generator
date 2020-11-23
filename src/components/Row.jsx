import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}
`;

const Wrapper = styled.div`
  /* opacity: 0;
  animation: 2s ${fadeIn} ${props => props.timeout} ease; */
`;

function Row({ giver, receiver, timeout} ) {
  return (
    <Wrapper timeout={timeout}>
      {giver} gives to {receiver} {timeout}
    </Wrapper>
  )
}

export default Row;