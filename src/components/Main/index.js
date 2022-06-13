import styled from "styled-components";

import Theme from '../Theme';
import Publication from "../Publication";

const MainFrame = styled.div`
  background-color: ${Theme().Colors.reset_background};
  padding-right: 250px;
  padding-left: 250px;
`
const Publications = styled.div`
    background-color: red;
`

export default function Main() {
    return (
        <MainFrame>
            <Publications>
                <Publication title="Teste" publicationDate="26/12/1974">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec orci congue, varius lectus a, feugiat risus. In vitae neque tincidunt libero imperdiet interdum. Fusce tempor diam id feugiat vulputate. Nulla volutpat sem velit, in ullamcorper quam aliquam eu. Aenean scelerisque, nulla eu ullamcorper tempor, sem elit ultrices dui, a egestas ligula lectus non leo. Duis sollicitudin aliquam dolor, et ullamcorper nulla consectetur eu. Vivamus at quam lorem. Proin a lorem justo. Sed scelerisque ac est ac congue. Aenean vitae arcu vestibulum, mollis tellus ac, porttitor sapien. Mauris erat ipsum, volutpat eget lacinia in, aliquet eget ligula. Cras quis tortor purus. Nulla facilisi. Pellentesque ultricies blandit accumsan.
                </Publication>
                <Publication title="Teste" publicationDate="26/12/1974">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec orci congue, varius lectus a, feugiat risus. In vitae neque tincidunt libero imperdiet interdum. Fusce tempor diam id feugiat vulputate. Nulla volutpat sem velit, in ullamcorper quam aliquam eu. Aenean scelerisque, nulla eu ullamcorper tempor, sem elit ultrices dui, a egestas ligula lectus non leo. Duis sollicitudin aliquam dolor, et ullamcorper nulla consectetur eu. Vivamus at quam lorem. Proin a lorem justo. Sed scelerisque ac est ac congue. Aenean vitae arcu vestibulum, mollis tellus ac, porttitor sapien. Mauris erat ipsum, volutpat eget lacinia in, aliquet eget ligula. Cras quis tortor purus. Nulla facilisi. Pellentesque ultricies blandit accumsan.
                </Publication>
                <Publication title="Teste" publicationDate="26/12/1974">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec orci congue, varius lectus a, feugiat risus. In vitae neque tincidunt libero imperdiet interdum. Fusce tempor diam id feugiat vulputate. Nulla volutpat sem velit, in ullamcorper quam aliquam eu. Aenean scelerisque, nulla eu ullamcorper tempor, sem elit ultrices dui, a egestas ligula lectus non leo. Duis sollicitudin aliquam dolor, et ullamcorper nulla consectetur eu. Vivamus at quam lorem. Proin a lorem justo. Sed scelerisque ac est ac congue. Aenean vitae arcu vestibulum, mollis tellus ac, porttitor sapien. Mauris erat ipsum, volutpat eget lacinia in, aliquet eget ligula. Cras quis tortor purus. Nulla facilisi. Pellentesque ultricies blandit accumsan.
                </Publication>
                <Publication title="Teste" publicationDate="26/12/1974">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec orci congue, varius lectus a, feugiat risus. In vitae neque tincidunt libero imperdiet interdum. Fusce tempor diam id feugiat vulputate. Nulla volutpat sem velit, in ullamcorper quam aliquam eu. Aenean scelerisque, nulla eu ullamcorper tempor, sem elit ultrices dui, a egestas ligula lectus non leo. Duis sollicitudin aliquam dolor, et ullamcorper nulla consectetur eu. Vivamus at quam lorem. Proin a lorem justo. Sed scelerisque ac est ac congue. Aenean vitae arcu vestibulum, mollis tellus ac, porttitor sapien. Mauris erat ipsum, volutpat eget lacinia in, aliquet eget ligula. Cras quis tortor purus. Nulla facilisi. Pellentesque ultricies blandit accumsan.
                </Publication>
            </Publications>
        </MainFrame>
    )
}