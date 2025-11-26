import React from 'react';

export default function CarruselMain(){
	return(
	<React.Fragment>
	<main id="main">
		<div id="carrusel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  	<div className="carousel-indicators">
    	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    	<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  	</div>
  	<div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./media/img/img1.jpg" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Bienvenido!</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum metus est, id varius mi molestie ut. Sed blandit fermentum vulputate. Fusce nec mi laoreet, semper justo eu, pretium nibh. Nulla lobortis justo erat, nec sagittis diam blandit ut. Phasellus imperdiet condimentum lorem, blandit scelerisque nulla tempor eu. Aenean efficitur diam sit amet tempor rhoncus. Sed euismod id dolor non eleifend. Maecenas pharetra lorem non justo mattis, quis commodo sapien malesuada. Pellentesque et nisi eget dui cursus porta. Cras dapibus consectetur ante ut malesuada. Etiam eget elit quis nisi dignissim tempus quis pharetra justo. Sed congue urna eget diam auctor, eget eleifend nisl semper.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./media/img/img2.jpg" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Exposición</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum metus est, id varius mi molestie ut. Sed blandit fermentum vulputate. Fusce nec mi laoreet, semper justo eu, pretium nibh. Nulla lobortis justo erat, nec sagittis diam blandit ut. Phasellus imperdiet condimentum lorem, blandit scelerisque nulla tempor eu. Aenean efficitur diam sit amet tempor rhoncus. Sed euismod id dolor non eleifend. Maecenas pharetra lorem non justo mattis, quis commodo sapien malesuada. Pellentesque et nisi eget dui cursus porta. Cras dapibus consectetur ante ut malesuada. Etiam eget elit quis nisi dignissim tempus quis pharetra justo. Sed congue urna eget diam auctor, eget eleifend nisl semper.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./media/img/img3.jpg" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Día de muertos</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum metus est, id varius mi molestie ut. Sed blandit fermentum vulputate. Fusce nec mi laoreet, semper justo eu, pretium nibh. Nulla lobortis justo erat, nec sagittis diam blandit ut. Phasellus imperdiet condimentum lorem, blandit scelerisque nulla tempor eu. Aenean efficitur diam sit amet tempor rhoncus. Sed euismod id dolor non eleifend. Maecenas pharetra lorem non justo mattis, quis commodo sapien malesuada. Pellentesque et nisi eget dui cursus porta. Cras dapibus consectetur ante ut malesuada. Etiam eget elit quis nisi dignissim tempus quis pharetra justo. Sed congue urna eget diam auctor, eget eleifend nisl semper.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./media/img/img4.jpg" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Hackaton TECNM 2023</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum metus est, id varius mi molestie ut. Sed blandit fermentum vulputate. Fusce nec mi laoreet, semper justo eu, pretium nibh. Nulla lobortis justo erat, nec sagittis diam blandit ut. Phasellus imperdiet condimentum lorem, blandit scelerisque nulla tempor eu. Aenean efficitur diam sit amet tempor rhoncus. Sed euismod id dolor non eleifend. Maecenas pharetra lorem non justo mattis, quis commodo sapien malesuada. Pellentesque et nisi eget dui cursus porta. Cras dapibus consectetur ante ut malesuada. Etiam eget elit quis nisi dignissim tempus quis pharetra justo. Sed congue urna eget diam auctor, eget eleifend nisl semper.</p>
      </div>
    </div>
    <div className="overlay">
    </div>
  	</div>
  	<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    	<span className="visually-hidden">Previous</span>
  	</button>
  	<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    	<span className="carousel-control-next-icon" aria-hidden="true"></span>
    	<span className="visually-hidden">Next</span>
  	</button>
	</div>
	</main>
  	</React.Fragment>
	)
}