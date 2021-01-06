import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const CourseTilesCont = styled.div`
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: space-around;
`;

export const CourseTile = styled(LinkR)`
  background-color: black;
  color: orange;
  width: auto;
  margin: 25px;
  padding: 10px;
  border: 3px solid orange;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: flex;
`;