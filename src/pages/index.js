import React, { useState } from "react"
import Layout from "../components/layout"
import { generate } from '../util/generate';
import Row from '../components/Row';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  min-height: 700px;
`;

const Button = styled.button`
  border-radius: 8px;
  position: absolute;
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


const IndexPage = () => {
  const [showList, setShowList] = useState(false);
  const [pairs, setPairs] = useState([])
  const [timeout, changeTimeout] = useState(1000);
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

      <p>Intro</p>
      <div>mystery box</div>
      {
        pairs.map((pair, index) => {
          let theTimeout = timeout + 1000;
          // changeTimeout(theTimeout);
          return (
            <Row key={`row-${index}`} giver={pair[0]} receiver={pair[1]} timeout={timeout} />
            )
          })
        }
      <Button onClick={(e) => handleGenerate(e)}>Generate</Button>
        </Wrapper>
    </Layout>
  )
}

export default IndexPage
