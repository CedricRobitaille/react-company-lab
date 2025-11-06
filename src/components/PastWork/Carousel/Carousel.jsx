import "./Carousel.css"

const Carousel = (props) => {
  return (
    <section className="carousel">
      <button className="carousel-btn" onClick={() => { props.handleCarousel(-1) }}>Previous</button>
      <div className="carousel-item">
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
      </div>
      <button className="carousel-btn" onClick={() => { props.handleCarousel(1) }}>Next</button>
    </section>
    
    
  )
}

export default Carousel;