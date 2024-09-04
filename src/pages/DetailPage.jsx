import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../constants/constants";
import Loading from "../components/Loading.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const DetailPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    /* Filmin Temel Bilgiler */
    axios
      .get(`/movie/${id}`, constants.options)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));

    /* Oyuncu Bilgileri */
    axios
      .get(`/movie/${id}/credits`, constants.options)
      .then((res) => setCast(res.data.cast))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) {
    return <Loading />;
  }

  const formattedBudget = movie.budget
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(movie.budget)
    : "N/A";

  const formattedRevenue = movie.revenue
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(movie.revenue)
    : "N/A";

  return (
    <div>
      <div key={movie.id}>
        <img
          className="w-100"
          src={constants.baseImageURL.concat(movie.backdrop_path)}
          alt={`${movie.title} backdrop`}
        />
      </div>
      <h1 className="text-center mt-3 text-color-primary">{movie.title}</h1>
      <div className="row">
        <div className="col-md-12 my-5">
          <h3 className="text-warning">Oyuncular</h3>
          <Splide
            options={{
              height: "200px",
              gap: "10px",
              pagination: false,
              autoWidth: true,
            }}
          >
            {cast
              ?.filter((actor) => actor.profile_path)
              .map((actor) => (
                <SplideSlide key={actor.cast_id}>
                  <img
                    className="movie"
                    src={constants.baseImageURL.concat(actor.profile_path)}
                    alt={actor.name}
                  />
                  <span></span>
                </SplideSlide>
              ))}
          </Splide>
        </div>
        <div className="col-md-6 p-5">
          <h3 className="text-warning mb-4">Yapımcı Şirketler</h3>
          <div className="d-flex flex-wrap gap-3">
            {movie.production_companies.map((company) => (
              <div className="card" key={company.id}>
                {company.logo_path && (
                  <img
                    className="object-fit-contain"
                    title={company.name}
                    width={100}
                    height={50}
                    src={constants.baseImageURL.concat(company.logo_path)}
                    alt={company.name}
                  />
                )}
              </div>
            ))}
          </div>
          <h3 className="text-warning mt-4">Konuşulan Diller</h3>
          <div className="d-flex flex-wrap gap-3">
            {movie.spoken_languages.map((lang) => (
              <div className="card text-black p-2" key={lang.iso_639_1}>
                <span>{lang.english_name}</span>
              </div>
            ))}
          </div>
          <h3 className="text-warning mt-4">Yapımcı Ülkeler</h3>
          <div className="d-flex flex-wrap gap-3">
            {movie.production_countries.map((country) => (
              <div className="card text-black p-2" key={country.iso_3166_1}>
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <h3 className="text-warning mt-4">Filmin Konusu</h3>
          <p className="lead">{movie.overview}</p>
          <p className="fw-bold">
            Bütçe: <span className="text-success">{formattedBudget}</span>
          </p>
          <p className="fw-bold">
            Gelir: <span className="text-success">{formattedRevenue}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
