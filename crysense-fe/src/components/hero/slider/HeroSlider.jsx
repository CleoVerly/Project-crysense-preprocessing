import { Carousel } from "flowbite-react";
import sliderData from "../../data/SliderData";
import SlideItem from "./SliderItem";

const HeroSlider = () => {
  return (
    <section className="bg-white max-w-screen-xl border border-gray-200 rounded-2xl mx-auto px-8">
      <div className="mx-auto">
        <Carousel
          slideInterval={5000}
          pauseOnHover
          indicators={true}
          leftControl="❮"
          rightControl="❯"
        >
          {sliderData.map((slide, index) => (
            <SlideItem
              key={index}
              title={slide.title}
              description={slide.description}
              image={slide.image}
              buttonText={slide.buttonText}
              buttonLink={slide.buttonLink}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSlider;
