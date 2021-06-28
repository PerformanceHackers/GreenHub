import React from "react";

function ServiceSection() {
  return (
    <div className="mt-70">
      <section id="services" className="services ">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold">Our Services</h1>
            <div className="heading-line mb-1"></div>
          </div>

          <div className="row pt-2 pb-2 mt-0 mb-3">
            <div className="col-md-6 border-right">
              <div className="bg-white p-3">
                <h2 className="fw-bold text-capitalize text-center">
                  Our Services Range From Initial Design To Deployment Anywhere
                  Anytime
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white p-4 text-start">
                <p className="fw-light">
                  Lorem ipsum dolor sit amet consectetur architecto magni, dicta
                  maxime laborum temporibus dolorem esse doloremque illo quas
                  nisi enim molestias. Tempore ducimus molestiae in dolore enim.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fa fa-paper-plane"></div>
                <h3 className="display-3--title mt-1">DESIGN</h3>
                <p className="lh-lg">
                  Design is our passion! Our team of Top Interior Designers work
                  with you to realize the home of your dreams. We work with
                  different styles - Classical, Fusion, Modern, Industrial - to
                  deliver a home you can be proud of.
                </p>
                {/* <button
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn more
                  <span>
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </button> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
                <img
                  src={require("../../assets/images/svg/7.svg").default}
                  alt="marketing illustration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
              <div className="services__pic">
                <img
                  src={
                    require("../../assets/images/svg/6.svg")
                      .default
                  }
                  alt="web development illustration"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                {/* <div className="icon d-block fa fa-code"></div> */}
                <h3 className="display-3--title mt-1">EXECUTION</h3>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  impedit rem, doloremque autem quibusdam blanditiis harum alias
                  hic accusantium maxime atque ratione magni repellat?
                </p>
                {/* <button
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn more
                  <span>
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </button> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block fa fa-cloud-upload-alt"></div>
                <h3 className="display-3--title mt-1">QUALITY</h3>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  impedit rem, doloremque autem quibusdam blanditiis harum alias
                  hic accusantium maxime atque ratione magni repellat?
                </p>
                {/* <button
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn more
                  <span>
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </button> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
                <img
                  src={
                    require("../../assets/images/svg/1.svg")
                      .default
                  }
                  alt="cloud hosting illustration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
