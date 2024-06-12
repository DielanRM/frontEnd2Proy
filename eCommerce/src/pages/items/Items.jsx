import { useEffect, useState } from 'react';
import './Items.scss'

export default function Items() {

    const [items, setItems] = useState([])// ESTE HOOK ES PARA GUARDAR LA UINFORMACION EN UN ESTADO, ESTA ATENTO A LO QUE SUCEDE DENTRO DE MI COMPONENTE

    useEffect(() => {  //el useEFFECT SIRVE PARA exTRAER informacion DE TERCEROS
        fetch('https://api-pelis-back.onrender.com/celulares')
            .then(res => res.json())
            .then(data => setItems(data.celulares))
    }, [])

    return (
        <section className='items-container'>
            <div className='items'>
                {items.map(item => (
                    <div key={item.id} className='item'>
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}
