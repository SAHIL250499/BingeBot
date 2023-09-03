import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  console.log(movies);

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <div className="absolute right-8 top-[20%]   z-20 ">
        <button
          className=" text-9xl text-white pb-8 px-2 md:bg-gray-600 opacity-80 md:hover:bg-gray-900"
          onClick={() => swiper.slideNext()}
        >
          &#8250;
        </button>
      </div>
    );
  };
  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <div className="absolute  top-[20%]   z-20">
        <button
          className=" text-9xl text-white pb-8 px-2 md:bg-gray-600 opacity-80 md:hover:bg-gray-900"
          onClick={() => swiper.slidePrev()}
        >
          &#8249;
        </button>
      </div>
    );
  };
  const breakpoints = {
    412: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 10,
    },
  };

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      <Swiper breakpoints={breakpoints} modules={[Navigation]} loop={true}>
        <SwiperButtonPrev></SwiperButtonPrev>
        <SwiperButtonNext></SwiperButtonNext>

        <div>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default MovieList;
