import { useOutletContext } from "react-router-dom";
import Carousel from "../Components/Carousuel";
import "./../Style/home.css";
import Card from "../Components/card";
const Home = () => {
  const { restaurants } = useOutletContext();
  //   console.log("homne page", restaurants);

  return (
    <div className="home">
      <div className="carousel">
        <div className="carousel__container">
          <h2 className="carousel__title">Top restaurant chains in Noida</h2>
          <div className="carousel__controls">
            <button className="carousel__arrow" onClick={handlePrevClick}>
              <img src="/images/left.png"></img>
            </button>
            <button className="carousel__arrow" onClick={handleNextClick}>
              <img src="/images/right.png"></img>
            </button>
          </div>
        </div>
        <section className="carousel__slider">
          <ul className="carousel__slides" ref={slidesContainerRef}>
            <li className="carousel__slide" key={res._id}>
              <Card res={res} show={false}></Card>
            </li>
            {restaurants.map((res) => {
              return (
                <li className="carousel__slide" key={res._id}>
                  <Card res={res} show={false}></Card>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>
      <div className="home__card-container">
        {restaurants.map((res) => {
          return <Card show={true} res={res}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;
