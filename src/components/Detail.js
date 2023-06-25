import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [data, setData] = useState();
  const params = useParams();
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.find((d) => +d.id === +params.id)));
  }, [params]);
  return (
    <div className="container text-center">
      <h1 className="mt-5">Product Details :</h1>
      {data ? (
        <div className="container mt-5">
          <h3 className="card-title mt-5 mb-2"> id : {data.id}</h3>
          <p className="card-text mb-2"><b>title :</b>  {data.title}</p>
          <p className="card-text mb-2">
            <b>Description : </b>
            {data.description}
          </p>
          <p className="card-text mb-2">
            <b>Categorie : </b>
            {data.category}
          </p>
          <p className="card-text mb-5">
            <b>Nb Product : </b>
            {data.rating.count}
          </p>
        </div>
      ) : (
        "NO DATA"
      )}
    </div>
  );
};

export default Detail;
