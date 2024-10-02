import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
   font-weight: 400;
`
export const Button = styled.button`
  border: none;
  width: 90px;
  height: 45px;
  background-color: #ECEEF2;
  transition: all .3s;
  &:hover{
    background-color: lightblue;
    cursor: pointer;
  }
`
export const Input = styled.input`
  border: none;
  width: 300px;
  padding: 15px;
 background-color: #ECEEF2;
 outline: none;
 &::placeholder{
    color: 000;
 }
 &:focus{
    border: none
 }
  transition: all .3s;
`
export const StyledLink = styled(NavLink)`
border: none;
color: #000;
text-decoration: none;
font-size: 20px;
transition: all .3s;
&:hover{
  color: #4a4747;
}
&.active{
  color: red;
}
&.active:hover{
  color: #fc5151;
}
& + a{
  margin-left: 80px;
}
`
export const Text = styled('p')`
font-size: 19px;
margin: 2px;

`


