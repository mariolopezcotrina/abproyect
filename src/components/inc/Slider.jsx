import React from 'react'
import banner from '../img/banner.png'
import banner2 from '../img/banner2.png'
import banner3 from '../img/banner3.png'

const Slider = () => {
  return (
    
    <div id="carouselExampleFade" class="carousel slide carousel-fade slider" data-bs-ride="carousel">
       
        
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={banner3} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
  )
}

export default Slider