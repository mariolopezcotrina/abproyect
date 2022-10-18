import React from 'react'
import img7 from '../img/imagen7.jpeg'
import mision from '../img/mision.png'
import vision from '../img/vision.png'
import Valores from './inc/Valores'

const About = () => {
  return (
    <div>
      <section className="section">
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 '>
              <div class="card shadow">
                <img src={img7} class="card-img" alt="..."/>
                
              </div>
            </div>
            <div className='col-md-6 '>
              <div class="card  border-0" >
                <div class="card-body text-center">
                  <h6 class="card-subtitle mb-2 text-muted">¿Quienes Somos?</h6>
                  <h5 class="card-title">PASION POR LA INGENIERIA</h5>
                  
                  <p class="card-text">Es una empresa de Ingeniería perunana, que inicia sus operaciones en el años 2018, con un staff de profesionales expertos en los sectores público y privado, cuyos conocimientos, capacidades y experiencia se conjuegan para brindar a nuestros clientes y socios comercialaes las mejores soluciones a cada uno de sus proyectos utilixandoequipos de última generacuon y software con tecnología moderna. </p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-6 '>
              <div class="card shadow" >
                <div class="card-body text-center">
                  <div className='circulo mb-4'>
                    <img src={mision} class="img " alt="" />
                  </div>
                  
                  
                  <h5 class="card-title">MISION</h5>
                  
                  <p class="card-text">Realizar con calidad, esmero y pasión, todas y cada una de la actividade que conllevan nuestros servicios para contribuir a mejoras la calidad de vida de la problacion a traves de proyectos y contrucciones de infraestructuras seguras y eficientes, dejando un legado a nuestras generaciones futuras. </p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div className='col-md-6 '>
              <div class="card shadow" >
                <div class="card-body text-center">
                <div className='circulo mb-4'>
                    <img src={vision} class="img " alt="" />
                  </div>
                  
                  <h5 class="card-title">VISION</h5>
                  
                  <p class="card-text">Ser la empresa lider en los servicios que ofrecemos, a nivel local y nacional, con tecnología de vanguardia y el mejor capital humano en estas área. Ofreciendo servicios de calidad a nuestros clientes y calidad de vida a quienes conforman nuestro equipo de trabajo.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
        </div>
      </div>
      
    </section>
    <Valores/>
    </div>
    
    
    
  )
}

export default About