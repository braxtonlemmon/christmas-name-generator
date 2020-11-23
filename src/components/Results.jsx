import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { useStaticQuery, graphql } from 'gatsby';

function Results({ pairs }) {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges;
  console.log(images);
  return (
    <>
    {
      pairs.map((pair, index) => {
        return (
          <Row key={`row-${index}`} giver={pair[0]} receiver={pair[1]} images={images}/>
        )
      })
    }
    </>
  )
}

export default Results;