import styled from "styled-components";

import Theme from '../Theme';


const PublicationDiv = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 10px;
  margin: 20px;
`

const PublicationTitle = styled.h2`
    color: ${Theme().Colors.primary};
  margin-top: 0;
`

const PublicationDate = styled.h5`
    color: ${Theme().Colors.secondary};
  margin-top: -20px;
`

const PublicationText = styled.p`
  color: ${Theme().Colors.dark_color};
  text-align: justify;
  text-justify: inter-word;;    
`

const Publication = ({title, publicationDate, children}) => {
    if (!Boolean(children)) {
        return (<></>)
    }

    return (
        <PublicationDiv>
            <PublicationTitle>{title}</PublicationTitle>
            <PublicationDate>Publicado em: {publicationDate}</PublicationDate>
            <PublicationText>{children}</PublicationText>
        </PublicationDiv>
    )

}

export default Publication;