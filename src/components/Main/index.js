import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Theme from '../Theme';
import Publication from "../Publication";
import Noticias from "../../Noticias";

const MainFrame = styled.div`
  background-color: ${Theme().Colors.reset_background};
  padding-right: 250px;
  padding-left: 250px;
`
const Publications = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${Theme().Colors.reset_background};
`

function dataFormatada(dataString){
    var data = new Date(dataString),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}


export default function Main() {
    var noticias = Noticias.items

    return (
        <MainFrame>
                <Routes>
                    <Route path="/" element={
                        <Publications>
                            {noticias.map(
                                noticia =>
                                    <Publication title={noticia.content.title} publicationDate={dataFormatada(noticia.publication)} url={noticia.content.url}>
                                        {noticia.content.summary}
                                    </Publication>
                            )}
                        </Publications>
                    }></Route>
                    <Route path="/sobre-nos" element={<span>sobre</span>}></Route>
                </Routes>
        </MainFrame>
    )
}