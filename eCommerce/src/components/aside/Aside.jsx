import './Aside.scss'

export default function Aside() {
  return (
    <>
      <div className='aside-container'>
        <aside className='aside'>
            <div className='aside__title'>
                <h2>Categorias</h2>
            </div>
            <div className='aside__content'>
                <ul>
                    <li>Juguetes</li>
                    <li>Rompa</li>
                    <li>Tecnologia</li>
                </ul>
            </div>
        </aside>
      </div>
    </>
  )
}
