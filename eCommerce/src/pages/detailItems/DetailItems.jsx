import { useEffect, useState } from "react"
import { getItem } from "../../services/itemServices"

export default function DetailItems() {

const [item, setItem] = useState(true)
const [loading, setLoading] = useState(true)

useEffect(()=>{
    const fetchData = async()=>{
        try {
            const data = await getItem('5fbc19a65a3f794d72471163')
            setItem(data)
            setLoading(false)
        } catch (error) {
            console.error('el error es:', error);
        }
    } 
    fetchData()
},[])

  
    if (loading) {
        return ( <h1>Loading ...</h1> )
    } else {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src="" alt="" />
                        </div>
                        <div className='col'>
                            <h3>{item.product_name}</h3>
                            <p>{item.brand}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
