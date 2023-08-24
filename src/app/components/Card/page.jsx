// 'use client'

import Image from "next/image"

export default function Card(props) {
      
    return(
        <section className="w-80 h-56 bg-black rounded-xl relative transition-all cursor-pointer">
            <h2 className="font-bold text-white text-center absolute z-20 w-full bg-purple-700 rounded-t-[12px] p-1">{props.tittle}</h2>
            <Image 
            loader={props.image}
            src="me.png"
            alt={props.texto}
            width={320}
            height={320}
            className="absolute bottom-0 left-0 rounded-b-[12px] bg-cover bg-center"
            />
        </section>
    )
}