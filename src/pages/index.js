import React, { useState } from "react"
import Layout from "../components/layout"
import { generate } from '../util/generate';
import Results from '../components/Results';
import styled, {keyframes} from 'styled-components';
import { graphql } from 'gatsby';
import candyCane from '../images/cane.png';


const wobble = keyframes`
  0% { transform: rotate(-30deg)}
  25% { transform: rotate(0deg)}
  50% { transform: rotate(30deg)}
  75% { transform: rotate(0deg)}
  100% {transform: rotate(-30deg)}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  min-height: 700px;
`;

const Button = styled.button`
  border-radius: 8px;
  /* position: absolute; */
  bottom: 30px;
  border: none;
  box-shadow: 0 0 8px rgba(0,0,0,0.4);
  padding: 20px;
  cursor: pointer;
  font-size: 3em;
  margin: 15px;
  outline: none;
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
  }
`;

const CandyCaneLeft = styled.img`
  position: absolute;
  left: 0px;
  height: 500px;
  animation-name: ${wobble};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const CandyCaneRight = styled.img`
  position: absolute;
  right: 0px;
  height: 500px;
  transform: scaleX(-1);
`;


const IndexPage = () => {
  const [showList, setShowList] = useState(false);
  const [pairs, setPairs] = useState([])
  const [timeout, changeTimeout] = useState(1000);
  console.log(candyCane);
  const handleGenerate = (e) => {
    e.preventDefault();
    let pairs = generate();
    while (!pairs) {
      pairs = generate();
    }
    setPairs(pairs);
    changeTimeout(1000);
  }
  
  return (
    <Layout>
      <Wrapper>
        <Button onClick={(e) => handleGenerate(e)}>Generate</Button>
        <Results pairs={pairs} />
        <CandyCaneLeft src={candyCane} alt="candy cane" />
        <CandyCaneRight src={candyCane} alt="candy cane" />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
