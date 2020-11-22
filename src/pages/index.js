import React, { useState } from "react"
import Layout from "../components/layout"
import { generate } from '../util/generate';
import Row from '../components/Row';

const IndexPage = () => {
  const [showList, setShowList] = useState(false);
  const [pairs, setPairs] = useState([])
  
  const handleGenerate = (e) => {
    e.preventDefault();
    let pairs = generate();
    while (!pairs) {
      pairs = generate();
    }
    console.log(pairs);
    setPairs(pairs);
  }
  
  return (
    <Layout>
      <p>Intro</p>
      <div>mystery box</div>
      {
        pairs.map((pair, index) => {
          return (
            <Row key={`row-${index}`} giver={pair[0]} receiver={pair[1]} />
          )
        })
      }
      <button onClick={(e) => handleGenerate(e)}>Generate</button>
    </Layout>
  )
}

export default IndexPage
