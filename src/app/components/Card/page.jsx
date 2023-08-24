// 'use client'

import Image from "next/image"

export default function Card(props) {
      
    return(
        <section className="w-80 h-56 bg-black rounded-xl relative p-3 transition-all hover:w-[730px] cursor-pointer">
            <h2 className="font-bold text-white text-center">{props.tittle}</h2>
            <Image 
            loader={props.image}
            src="me.png"
            alt={props.texto}
            width={320}
            height={320}
            className="absolute bottom-0 left-0 rounded-b-[12px]"
            />
            <div className="w-[320px] absolute h-full hover:right-[0] transition-all duration-300 ease-in-out">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores facere ducimus tenetur libero eius cumque explicabo accusantium.
                </p>
            </div>
        </section>
    )
}