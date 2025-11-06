const Carousel = (props) => {
  return (
    <section>
      <button onClick={() => { props.handleCarousel(-1) }}>Previous</button>
      <div className="carousel-item">
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
      </div>
      <button onClick={() => { props.handleCarousel(1) }}>Next</button>
    </section>
    
    
  )
}

export default Carousel;