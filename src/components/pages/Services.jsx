import React from 'react'
import img2 from '../img/imagen2.jpeg'
import img3 from '../img/imagen3.jpeg'
import img4 from '../img/imagen4.jpeg'
import img5 from '../img/imagen5.jpeg'
import img6 from '../img/imagen6.jpeg'
import img7 from '../img/imagen7.jpeg'
import img8 from '../img/imagen8.jpeg'
import img9 from '../img/imagen9.jpeg'
import img10 from '../img/imagen10.jpeg'
import img11 from '../img/imagen11.jpeg'
import img12 from '../img/imagen12.jpeg'
import img13 from '../img/imagen13.jpeg'
import img14 from '../img/imagen14.jpeg'
import img15 from '../img/imagen15.jpeg'
const Services = () => {
  return (
    <div >
      <section className='section'>
        <div className='container'>
            <div className='row '>
                <div className='col-md-12 text-center'>
                  <h2>NUESTROS SERVICIOS</h2>
                </div>
            </div> 
            <div className='row '>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card " >
                    <div className='servi'>
                      <img src={img2} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card " >
                    <div className='servi'>
                      <img src={img3} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card " >
                    <div className='servi'>
                      <img src={img4} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-xs-12'>
                  <div className="card " >
                    <div className='servi'>
                      <img src={img5} class="card-img-top" alt="..."/>
                    </div>
                    
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
      </section>
      <section className='section text-center'>
        <div className='container'>
        
          <div className='text-center'>
            <h1 className="fw-light mt-4 mb-0 galeri-text">Galeria</h1>
          </div>
          

          <hr class="mt-2 mb-5"/>

          <div class="row text-center text-lg-start">

            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img6} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img7} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img10} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img13} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img9} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img11} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img12} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img8} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img14} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img15} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img4} alt=""/>
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src={img5} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Services