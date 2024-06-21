import { useEffect, useState } from 'react';
import { getItems } from '../../services/itemServices.js';
import { Link } from 'react-router-dom';
import './Items.scss';

export default function Items() {

    const [items, setItems] = useState([])// ESTE HOOK ES PARA GUARDAR LA UINFORMACION EN UN ESTADO, ESTA ATENTO A LO QUE SUCEDE DENTRO DE MI COMPONENTE
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getItems()
                setItems(response.data)
                setLoading(false)
            } catch (error) {
                console.error('el error se produjo por:', error);
            }
        }
        getData()
    }, [])


    if (loading) {
        return <h1>Loading ...</h1>
    } else {
        return (
            <section className='items-container'>
                <div className='items'>
                    {items.map(item => (
                        <Link to={`/item/${item.id}`} key={item.id}>
                            <div className='item'>
                                <img src={item.image} />
                                <h3>{item.product_name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        )
    }
}
