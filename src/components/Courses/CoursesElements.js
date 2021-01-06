import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const CourseTilesCont = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 25px;
  background-color: orange;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const CourseTile = styled.div`
  background-color: black;
  width: 39%;
  margin: 2.5%;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 2.5%;
  border: .5% solid orange;
  border-radius: 10px;
`

export const CourseTileTitle = styled(LinkR)`
  color: orange;
  font-size: 30px;
  padding-right: auto;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: flex;
`;
