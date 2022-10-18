import React from 'react'
import client1 from '../img/client-1.png'
import client2 from '../img/client-2.png'
import client3 from '../img/client-3.png'
import client4 from '../img/client-4.png'
import client5 from '../img/client-5.png'
import client6 from '../img/client-6.png'
import img3 from '../img/imagen3.jpeg'
import img4 from '../img/imagen4.jpeg'
import { Activity } from 'react-bootstrap-icons'
import { Box } from 'react-bootstrap-icons'
import { Bricks } from 'react-bootstrap-icons'
import { Boxes } from 'react-bootstrap-icons'

const Home = () => {
  return (
    <div >
      <section id="featured-services" class="featured-services section-bg section">
      <div class="container">

        <div class="row no-gutters">
          <div class="col-lg-3 col-md-6 col-xs-6 p-3 text-center">
            <div class="icon-box">
              <div class="icon"><Activity color="royalblue" size={48}/></div>
              <h4 class="title"><a href="">Nosotros</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-6 p-3 text-center">
            <div class="icon-box">
              <div class="icon"><Box color="royalblue" size={48}/></div>
              <h4 class="title"><a href="">Servicios</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-6 p-3 text-center">
            <div class="icon-box">
              <div class="icon"><Bricks color="royalblue" size={48}/></div>
              <h4 class="title"><a href="">Portafolio</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trade stravi</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-6 p-3 text-center">
            <div class="icon-box">
              <div class="icon"><Boxes color="royalblue" size={48}/></div>
              <h4 class="title"><a href="">Contactanos</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trade stravi</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="about" class="section">
      <div class="container">

        <div class="section-title">
          <h2>Nosotros</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2">
            <img src={img4} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>

    
    <section id="clients" class="clients">
      <div class="container">

        <div class="section-title">
          <h2>Our Clients</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src={client1} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={client1} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={client1} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={client1} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src="{img2}" class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-6.png" class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-8.png" class="img-fluid" alt=""/></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
      
    </div>
  )
}

export default Home      