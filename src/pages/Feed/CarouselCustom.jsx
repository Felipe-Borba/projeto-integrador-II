import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselCustom.css";

export default function CarouselCustom({ events }) {
  return (
    <Carousel
      swipeable={true}
      showIndicators={true}
      showStatus={false}
      animationHandler={"slide"}
      dynamicHeight={1}
    >
      {events && events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="carousel-custom-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {event.eventDate.toLocaleDateString()}</p>
            <p>Place: {event.place}</p>
            <p>City: {event.city}</p>
          </div>
        ))
      ) : (
        <div>No events available</div>
      )}
    </Carousel>
  );
}
