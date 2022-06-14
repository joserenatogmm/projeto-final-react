import styled from "styled-components";

import Theme from '../Theme';
import MenuItem from "./MenuItem";

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: -22px;
  height: 50px;
  border-bottom: 1px ${Theme().Colors.secondary} solid;
`

const MenuUl = styled.ul`
  list-style-type: none;
  display: flex;
  padding-inline-start: 0;
  cursor: pointer;
`

export default function Menu() {
    return (
        <MenuDiv>
            <MenuUl>
                <MenuItem title="Home" to="/"></MenuItem>
                <MenuItem title="Sobre Nós" to="/sobre-nos"></MenuItem>
            </MenuUl>
        </MenuDiv>
    )
}