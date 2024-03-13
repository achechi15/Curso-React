
export const PokemonCard = ( { id, name, sprites = [] } ) => {
    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize"># {id} - { name }</h2>

            {/* Imagenes */}
            <div>
                {/* {const image = sprites.front_default} */}
                {
                    sprites.map(el => (
                        <img key ={el} src = {el} alt= { name }/>
                    ))
                }
            </div>
        </section>
    )
}
