const Home = () => {
    return (
        <div>
            {/* <section
                className="h-screen bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${"images/hero-img.jpeg"})`, marginTop:"90px" }}
              >
                <h1 className="text-5xl font-bold">Blue Botel Cafe</h1>
              </section> */}

            <section className="py-5 px-4 bg-light" style={{marginTop:"90px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src={"images/about-img.png"}
                                alt="About Blue Botel Café"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-3xl font-bold mb-3 text-primary">About Us</h2>
                            <hr className="mb-3" style={{ width: "60px", border: "2px solid #007bff" }} />
                            <p className="text-lg text-muted">
                                Founded in 2024, <span className="fw-bold">Blue Botel Cafe</span> is a premier cafe chain dedicated to delivering an exceptional dining experience through our delicious food offerings. With a strong commitment to quality and taste, we have quickly become a favorite destination for burger enthusiasts and casual diners alike.
                            </p>
                            <p className="text-lg text-muted">
                                At Blue Botel Cafe, our mission is to provide our customers with high-quality, flavorful meals in a welcoming and comfortable environment. We strive to create memorable experiences through our signature burgers and a diverse menu that caters to the tastes of all our patrons.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="py-5 px-4 bg-light">
  <div className="container">
    <h2 className="text-center text-3xl font-bold mb-5">Our Sister Establishments</h2>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card text-center shadow-sm border-0">
          <div className="card-body">
            <i className="bi bi-cup-fill display-4 text-primary mb-3"></i>
            <h3 className="card-title text-2xl">Bean Town Bistro</h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card text-center shadow-sm border-0">
          <div className="card-body">
            <i className="bi bi-music-note-beamed display-4 text-success mb-3"></i>
            <h3 className="card-title text-2xl">Java Junction</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}



            <section className="py-5 px-4 bg-light">
                <div className="container">
                    <h2 className="text-center text-3xl font-bold mb-5">Contact Us</h2>
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body d-flex align-items-start">
                                    <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                        <i className="bi bi-geo-alt-fill fs-3"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="card-title mb-1">Address</h4>
                                        <p className="card-text">Blue Botel Cafe, 8FHC+466 <br />
                                            Behind City Center Al Zahia <br />
                                            Sharjah</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body d-flex align-items-start">
                                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                        <i className="bi bi-telephone-fill fs-3"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="card-title mb-1">Phone</h4>
                                        <ul className="list-unstyled">
                                            <li>+971 55 8834785</li>
                                            <li>+971 55 4651514</li>
                                            <li>+971 50 7599832</li>
                                            <li>+971 06 5337374</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body d-flex align-items-start">
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                        <i className="bi bi-envelope-fill fs-3"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="card-title mb-1">Email</h4>
                                        <p className="card-text">
                                            <a href="mailto:bluebotel@gmail.com" className="text-decoration-none">
                                                bluebotel@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body d-flex align-items-start">
                                    <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                        <i className="bi bi-instagram fs-3"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="card-title mb-1">Instagram</h4>
                                        <p className="card-text">
                                            <a href="https://instagram.com/bluebotelcafe" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                @bluebotelcafe
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 px-4 bg-light">
                <div className="container">
                    <h2 className="text-center text-3xl font-bold mb-5">Our Sister Establishments</h2>
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-3">
                                <h3 className="text-primary fw-bold">Chai Talk Restaurant</h3>
                                <p className="text-muted">Al Ain</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-3">
                                <h3 className="text-success fw-bold">Food Talk Restaurant</h3>
                                <p className="text-muted">Al Ain</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-3">
                                <h3 className="text-danger fw-bold">Saleha General Trading</h3>
                                <p className="text-muted">Dubai</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-3">
                                <h3 className="text-warning fw-bold">Humsum Arts & Gifts</h3>
                                <p className="text-muted">Dubai</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100 text-center p-3">
                                <h3 className="text-info fw-bold">Biverse Turnkey Solutions</h3>
                                <p className="text-muted">Dubai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home;