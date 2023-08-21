import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = () => {
    const [movieData, setMovieData] = useState([]);
    console.log("movieData", movieData)
    useEffect(() => {
        (async () => {
            getMovieData()
        })()
    }, []);
    const getMovieData = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2EyNTdiNTgyNzVlZDI4NWY4MDdhODhlOGRkMmYwZCIsInN1YiI6IjY0ZGU1Y2ZjNWFiODFhMDBjNWI2NWNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1qWZ_VinNe-8v8DIa7nhS4WDDwspC9EphDx5orCZcs",
                Accept: "application/json"
            }
        });
        setMovieData(response.data.results)
    }
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {movieData.map((items) => {
                return <MovieCard
                    id={items.id}
                    imageId={items.backdrop_path}
                    key = {items.id}
                    title={items.original_title}
                    description={items.overview}
                    rating={items.vote_average}
                />
           })}
        </div>
    )
}

export default MovieList
