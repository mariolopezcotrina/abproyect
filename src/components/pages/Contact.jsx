import React from 'react'

const Contact = () => {
  return (
    <section class="ftco-section section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contacto</h2>
				</div>
			</div>
			<div class="row justify-content-center ">
				<div class="col-lg-10 col-md-12 ">
					<div class="wrapper">
						<div class="row no-gutters ">
							<div class="col-md-7 d-flex align-items-stretch ">
								<div class="contact-wrap w-100 p-md-5 p-4 shadow">
									<h3 class="mb-4">Cuéntanos...</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
                  Estamos aqui para brindarte un servicio de calidad
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-6 mt-2">
												<div class="form-group">
													<input type="text" class="form-control" name="name" id="name" placeholder="Nombre"/>
												</div>
											</div>
											<div class="col-md-6 mt-2"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Correo"/>
												</div>
											</div>
											<div class="col-md-12 mt-2">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto"/>
												</div>
											</div>
											<div class="col-md-12 mt-2">
												<div class="form-group">
													<textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Mensaje"></textarea>
												</div>
											</div>
											<div class="col-md-12 mt-2">
												<div class="form-group">
													<input type="submit" value="Enviar Mensaje" class="btn btn-danger"/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch ">
								<div class="info-wrap contact1 w-100 p-lg-5 p-4 shadow">
									<h3 class="mb-4 mt-md-4">Grupo A&B</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Direccion:</span> Av. Los Jardines 154 - SJL</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Telefono:</span> 
                      <a href="tel://1234567920">+51 987569985 </a>
                      <a href="tel://1234567920">+51 987564123</a>
                      </p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Correo:</span> 
                        <a href="mailto:grupoayb@gmail.com">grupoayb@gmail.com </a>
                        <a href="mailto:ventascorporativas@grupoa&b.com">ventascorporativas@grupoa&b.com</a>
                        
                      </p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="#">yoursite.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div className='row'>
        <div className='col-md-12 mt-4'>
        <div id="map-container-google-2" class="z-depth-1-half map-container" >
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7802.842176415913!2d-77.034389!3d-12.083299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fe229636f951111!2sCl%C3%ADnica%20de%20Ojos%20D&#39;%20Opeluce!5e0!3m2!1ses-419!2spe!4v1665941969628!5m2!1ses-419!2spe" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
      </div>
		</div>
	</section>
  )
}

export default Contact