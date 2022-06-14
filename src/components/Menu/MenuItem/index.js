import styled from "styled-components";
import {Link} from "react-router-dom";

import Theme from "../../Theme";

const MenuLi = styled.li`
  margin: 5px;
  padding: 10px;
  font-size: 12px;
  border-radius: 50px;
  font-weight: bold;
  background-color: ${Theme().Colors.secondary};
  color: ${Theme().Colors.dark_color};
  &:hover {
    background-color: ${Theme().Colors.primary_dark};
    color: ${Theme().Colors.ligth_color};
  }
  
  a {
    text-decoration: none;
    color: ${Theme().Colors.dark_color};
  }
  
  a:hover {
    text-decoration: none;
    color: ${Theme().Colors.ligth_color};
  }
`

const MenuItem = ({ title, to }) => {
    return (
        <MenuLi>
            <Link to={to}   >{title}</Link>
        </MenuLi>
    )
}

export default MenuItem