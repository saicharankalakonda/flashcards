import React, { useState } from 'react';
import FlipCard from './FlipCard';
import "./Carousel.css"
const Carousel = ({notes}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % notes.length);
        console.log(notes)
    };

    const prevCard = () => {
        setCurrentIndex((currentIndex - 1 + notes.length) % notes.length);
    };

    return (
        <div className="carousel-container">
            <button onClick={prevCard}>Previous</button>
            <FlipCard
                question={ notes[currentIndex].content}
                answer ={ notes[currentIndex].title }
            />
            <button onClick={nextCard}>Next</button>
        </div>
    );
};

export default Carousel;
