import React from 'react'

const Home = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5 p-2" style={{ maxWidth: '800px', margin: 'auto' }}>
        <div className="container text-center">
          <h2>WikiNajes</h2>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://lumiere-a.akamaihd.net/v1/images/tall-ratios_e27799d8.jpeg?region=0,0,1536,864&width=960" className="d-block img-fluid" alt="..." id='img1' style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="carousel-item">
            <img src="https://i.abcnewsfe.com/a/a8731729-3f75-4b45-b187-03f0a860c14d/john-wick-jw4-ht-mz-29-230323_1679596167481_hpEmbed_3x2.jpg" className="d-block img-fluid" alt="..." id='img2' style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2021/05/walter-white.jpg" className="d-block img-fluid" alt="..." id='img3' style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-4">
        <div className="text-center"><h2>Nuestros Personajes Favoritos</h2></div>
        <div className="row mt-3">
          <div className="card col-4 mx-3" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
          <div className="card col-4 mx-3" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
          <div className="card col-4 mx-3" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
          <div className="card col-4 mx-3" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center mt-4"><h2>Personajes de la semana</h2></div>
        <div className="row">
          <div className="card col-4 mx-3 mt-4" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
          <div className="card col-4 mx-3 mt-4" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
          <div className="card col-4 mx-3 mt-4" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
          <div className="card col-4 mx-3 mt-4" style={{ width: '18rem' }}>
            <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Personaje</h5>
              <p className="card-text">Descripcion del Personaje</p>
              <a href="#" class="btn btn-primary">Mas Informacion</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card mb-3" style={{ maxWidth: '800px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Personaje del Mes</h5>
                    <p className="card-text">Descripcion del Personaje</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <h1 className='text-center'>Quienes Somos?</h1>
        <p className='text-center'>Nullam feugiat purus non sem commodo,<br /> ac commodo eros eleifend. <br /> Fusce neque turpis, <br />commodo eget tristique et, molestie eget <br /> Donec dignissim sapien in tincidunt egestas. <br /> Suspendisse potenti. Phasellus luctus, lorem ac tempus rutrum, dolor nulla efficitur quam, in tempor odio leo imperdiet augue. <br /> Nullam at mattis elit. Nunc at maximus neque. Nunc ultrices et lectus eget volutpat. <br /> In vestibulum eget augue vitae condimentum. <br /> Sed iaculis diam sit amet arcu blandit, non condimentum dolor condimentum. <br /> Praesent orci massa, rutrum vitae erat ac, consectetur aliquam augue. <br /> Maecenas luctus massa eget ultricies aliquam. <br /> Morbi porta iaculis ipsum sed condimentum. <br /> Aenean vitae tempus diam. <br /> Aenean nibh augue, maximus non maximus in, fringilla vitae tellus.</p>
      </div>

    </>
  )
}

export default Home
