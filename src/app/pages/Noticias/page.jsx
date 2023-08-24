'use client'

import Card from "@/app/components/Card/page";

const imageTeste = () => {
    return "https://img.olhardigital.com.br/wp-content/uploads/2022/12/Destaque-gravidade-na-lua.jpg"
}

export default function Noticias() {

    return(
        <main className="p-4">
            <Card tittle="Astronauta" image={imageTeste} texto="xxxxx"/>
        </main>
    )
}