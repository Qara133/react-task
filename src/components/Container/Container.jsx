import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import List from "../List/List";
import Search from "../Search/Search";
import axios from "axios";

function Container({ setBasketActive, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [movies, setMovies] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [list, setList] = useState([]);
  const url = `https://api.themoviedb.org/3/discover/movie`;
  const getSearch = (search) => {
    setSearchParams(search);
  };

  console.log(basket);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgyZTE2OWE2YTM4MTgzY2VjMzIyOGU2ODAyMGNlNCIsIm5iZiI6MTczNDU0OTI5Mi42NDk5OTk5LCJzdWIiOiI2NzYzMWYyYzY3Yzk2MzIxODA0YTMzMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VadvJRK3oKcc-V3Hcungn2mVd4biXCBNO6RZiYvAy_c",
          Accept: "application/json",
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log(basket);

  return (
    <div className="container">
      <div className="container-left">
        <Search
          getData={getSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="container-cards">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchParams.toLowerCase())
            )
            .map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                setList={setList}
                list={list}
              />
            ))}
        </div>
      </div>
      <div className="container-right">
        <List
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
          list={list}
          setList={setList}
        />
      </div>
          
    </div>
  );
}

export default Container;
