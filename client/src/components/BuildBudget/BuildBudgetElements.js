import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: black;
  margin-bottom: 15px;
  margin-top: 15px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5%;
  border: .5% solid orange;
  border-radius: 10px;
`

export const FormTitle = styled.h2`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-bottom: 15px;
`

export const SectionTitle = styled.h3`
  color: #fff;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-bottom: 10px;
`

export const InputsCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


export const Label = styled.h3`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-bottom: 15px;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

export const ProgressBar = styled.div`
  background-color: rgb(35, 35, 35);
  margin-bottom: 15px;
  margin-top: 15px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  border: .5% solid rgb(35, 35, 35);
  border-radius: 10px;
`

export const Progress = styled.div`
  background-color: orange;
  margin: 0px;
  width: 25%;
  padding: 1%;
  border: .5% solid orange;
  border-radius: 10px;

`
