import styled from "styled-components";
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
`

const MenuItem = ({ title }) => {
    return (
        <MenuLi>{title}</MenuLi>
    )
}

export default MenuItem