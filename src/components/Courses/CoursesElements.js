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
`;

export const CourseTileTitle = styled(LinkR)`
  color: orange;
  font-size: 30px;
  padding-right: auto;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  margin-bottom: 7px;
`;

export const TodaysClassesList = styled.div`
  background-color: black;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
`

export const ClassListItem = styled.div`
  background-color: rgb(20, 20, 20);
  border: .1px solid rgb(20, 20, 20);
  border-radius: 10px;
  margin: 5px;
  padding: 3px 10px;
`

export const ClassName = styled.h4`
  color: orange;
`

export const TileInfo = styled.h3`
  color: orange;
`

export const ClassInfo = styled.h6`
  color: orange;
  word-spacing: 30px;
`


export const CalendarButtonCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`

export const CalendarButton = styled.div`
  background-color: rgb(20, 20, 20);
  border: 2px solid orange;
  border-radius: 10px;
  color: orange;
  padding: 7px;
  margin-top: 15px;
`
