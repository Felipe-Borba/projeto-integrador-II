import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ events }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (events && events.length > 0) {
      // Lógica para avançar automaticamente para o próximo slide a cada 5 segundos
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [events]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
  };

  return (
    <Slider {...settings}>
      {events && events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {event.eventDate.toLocaleDateString()}</p>
            <p>Place: {event.place}</p>
            <p>City: {event.city}</p>
            {/* Adicione outros detalhes do evento conforme necessário */}
          </div>
        ))
      ) : (
        <div>No events available</div>
      )}
    </Slider>
  );
};

export default Carousel;