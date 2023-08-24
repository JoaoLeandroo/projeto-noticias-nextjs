'use client'

import Card from "@/app/components/Card/page";

const imageTeste = () => {
    return "https://img.olhardigital.com.br/wp-content/uploads/2022/12/Destaque-gravidade-na-lua.jpg"
}

const imageCristianoRonaldo = () => {
    return "https://1xbet.tv/wp-content/uploads/2023/08/tj5pyte4aqhb1.jpg"
}

const imageFormula1 = () => {
    return "https://blog.pneustore.com.br/wp-content/uploads/2023/05/max-verstappen-da-red-bull-durante-os-treinos-livres-do-gp-de-miami-de-f1-1683324424614_v2_1920x1279-825x510.jpg"
}

const imageFilme = () => {
    return "https://uploads.metropoles.com/wp-content/uploads/2023/07/18152459/Barbie-15_Easy-Resize.com_-600x400.jpg"
}

const imageFutebol = () => {
    return "https://www.latercera.com/resizer/tQTdcdWqKbLaD7Hh6TZrESsG6uM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/C76BBJTM6XXEPGP34HIF2UFYCA.jpg"
}

const imageWar = () => {
    return "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3191661:1644606762/russo.jpeg?f=default&$p$f=b37fdd3"
}

export default function Noticias() {

    return(
        <main className="p-5 max-w-[95%] m-auto mt-5 min-h-screen">
            <div className="w-full flex justify-center flex-wrap gap-5">
            <Card tittle="Homem de volta a Lua?" image={imageTeste} texto="a humanidade está pronta para voltar a lua"/>
            <Card tittle="SEMPRE ELE!!!" image={imageCristianoRonaldo} texto="Jogador Cristiano Ronaldo"/>
            <Card tittle="Sucesso de bilheteria" image={imageFilme} texto="filme da Barbie"/>
            <Card tittle="Verdão Imparável" image={imageFutebol} texto="Palmeira goleia"/>
            <Card tittle="Formula 1 de volta" image={imageFormula1} texto="Formula 1 volta esse final de semana"/>
            <Card tittle="Conflito sem Fim" image={imageWar} texto="Guerra entre Russia e Ucrania"/>
            </div>
        </main>
    )
}