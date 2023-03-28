function HomePage() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row justify-content-center bg-light">
        <img
          className="m-3"
          src="./JoelHiltonHeadshot.jpg"
          alt="JoelHiltonPic"
          style={{ borderRadius: '40px', width: '400px', height: '100%' }}
        ></img>
      </div>

      <div className="row mt-4">
        <h1>Joel Hilton Movie Collection</h1>
      </div>
    </div>
  );
}

export default HomePage;
