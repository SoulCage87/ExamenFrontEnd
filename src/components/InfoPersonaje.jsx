import React from 'react'


const InfoPersonaje = () => {
    return (
        <>
         <div className="container  d-flex justify-content-center align-items-center vh-100">
                <div className="row">
                    <div className="card border text-bg-secondary mb-3" style={{ maxwidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.pinimg.com/564x/56/99/b1/5699b117354ce64d24f623fb7c68d5d4.jpg" className="img-fluid rounded-start rounded" style={{maxWidth: '390px', maxHeight: '390px'}} alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-center mt-5">
                                    <h5 className="card-title">Spider-Man</h5>
                                    <p className="card-text justify-content-center align-items-center">
                                        Peter Parker, conocido como Spider-Man, es un icónico personaje de cómics de Marvel creado por Stan Lee y Steve Ditko en 1962. Tras ser mordido por una araña radiactiva, adquiere habilidades sobrehumanas. Su vida cambia cuando su tío Ben muere, llevándolo a adoptar la responsabilidad de usar sus poderes para luchar contra el crimen. La dualidad de su identidad, sus relaciones personales complejas y sus valores, como la responsabilidad y la empatía, lo han convertido en un símbolo duradero. Spider-Man ha sido adaptado en varias películas y sigue siendo un superhéroe amado y reconocido en todo el mundo.
                                    </p>
                                    <div className='d-flex'>
                                    <p className="card-text text-center col-6" style={{maxWidth: '235px'}}><medium className="">Actores que lo han interpretado: <br/>
                                    Tobey Maguire <br />
                                    Andrew Garfield <br />
                                    Tom Holland
                                    </medium></p>
                                    <div className="justify-content-end align-items-end">
                                    <p className="card-text text-center" style={{maxWidth: '235px'}}><medium className="">Peliculas Mas Populares: <br/>
                                    Spider-Man 2 (2004) <br />
                                    Amazing Spider-Man (2012) <br />
                                    Spider-Man No Way Home (2021)
                                    </medium></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          

        </>
    )
}

export default InfoPersonaje
