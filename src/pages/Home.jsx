import { FaArrowAltCircleRight } from "react-icons/fa";
import { About } from "./About";

export const Home=()=>{
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore The World, One Country At a Time
                    </h1>
                    <p className="paragraph">
                          Discover the history, culture, and beauty of every nation. Sort,
                        search, and filter through countries to find the details you
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaArrowAltCircleRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="World Image" className="banner-image"/>
                </div>
            </div>
            <About/>
        </main>
    );
};