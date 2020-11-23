import React from 'react';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}
`;

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  padding: 10px;
  background: #59af59;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  font-size: 2em;
`;

function Row({ giver, receiver, images} ) {
  const giverImage = images.find(image => giver === image.node.name)
  const receiverImage = images.find(image => receiver === image.node.name);
  
  return (
    <Wrapper>
      <Img fixed={giverImage.node.childImageSharp.fixed}  alt={`${giver}`}/>
      <span>gives to</span>
      <Img fixed={receiverImage.node.childImageSharp.fixed} alt={`${receiver}`} />
    </Wrapper>
  )
}

export default Row;