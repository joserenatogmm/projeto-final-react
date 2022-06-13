import styled from "styled-components";
import Theme from '../Theme';

const MenuDiv = styled.div`
  background-color: ${Theme().Colors.primary};
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: -21px;
}
`

const BlogTitle = styled.h1`
  color: ${Theme().Colors.ligth_color};
  font-size: 32px;
  padding: 10px;
  font-weight: normal;
}
`

export default function Header() {
    return (
        <MenuDiv>
            <BlogTitle>Blog de Notícias</BlogTitle>
        </MenuDiv>
    )
}