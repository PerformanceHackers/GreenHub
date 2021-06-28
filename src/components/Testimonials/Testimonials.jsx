import React from 'react'

function Testimonials() {
 return (
  <>
  <section id="testimonials" className="testimonials">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  <div className="container">
    <div className="row text-center text-white">
      <h1 className="display-3 fw-bold">Testimonials</h1>
      <hr style={{width: '100px', height: '3px'}} className="mx-auto" />
      <p className="lead pt-1">what our clients are saying</p>
    </div>


    <div className="row align-items-center">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
          
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fa fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fa fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </p>
            </div>
         
            <div className="testimonials__">
              <img src={require("../../assets/images/testimonials/client-1.jpg").default} alt="client-1 " className="rounded-circle img-fluid" />
            </div>
       
            <div className="testimonials__name">
              <h3>Patrick Muriungi</h3>
              <p className="fw-light">CEO & founder</p>
            </div>
          </div>     
    
          <div className="carousel-item">
        
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fa fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fa fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </p>
            </div>
        
            <div className="testimonials__">
              <img src={require("../../assets/images/testimonials/client-2.jpg").default} alt="client-2 " className="rounded-circle img-fluid" />
            </div>
         
            <div className="testimonials__name">
              <h3>Joy Marete</h3>
              <p className="fw-light">Finance Manager</p>
            </div>
          </div>     
    
          <div className="carousel-item">
        
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fa fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fa fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </p>
            </div>
    
            <div className="testimonials__">
              <img src={require("../../assets/images/testimonials/client-3.jpg").default} alt="client-3 " className="rounded-circle img-fluid" />
            </div>
        
            <div className="testimonials__name">
              <h3>ClaireBelle Zawadi</h3>
              <p className="fw-light">Global brand manager</p>
            </div>
          </div>     
    
          <div className="carousel-item">
       
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fa fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fa fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </p>
            </div>
       
            <div className="testimonials__">
              <img src={require("../../assets/images/testimonials/client-4.jpg").default} alt="client-4 " className="rounded-circle img-fluid" />
            </div>
           
            <div className="testimonials__name">
              <h3>Uhuru Kenyatta</h3>
              <p className="fw-light">C.E.O & Founder</p>
            </div>
          </div>     
        </div>
        <div className="text-center">
          <button className="btn btn-outline-light mr-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <i className="fa fa-long-arrow-left"></i>
        </button>
        <button className="btn btn-outline-light ml-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <i className="fa fa-long-arrow-right"></i>
        </button>
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</section>
   
  </>
 )
}

export default Testimonials
