// import { React, useEffect, useState } from "react";
import { React } from "react";
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const data = useSelector((state) => state.products.products)
  // const [data, setData] = useState([]);
  // const url = "https://fakestoreapi.com/products";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.filter((d) => d.id <= 3)));
  // }, []);
  return (
    <div className="container">
      <div className="row justify-content-around">
        {data
          ? data.map((data) => data.id < 4 ?(
              <div className="col-3 m-3">
                <div className="card" style={{"width" : "18rem"}}>
                  <img className="card-img-top" alt="test" src={data.image} style={{height : "300px"}}/>
                  <div className="card-body text-center">
                    <h5 className="card-title ">{data.title}</h5>
                    <p className="card-text price">{data.price} $</p>
                    <a href={"shop/" + data.id}className="btn btn-primary ">
                      VIEW DETAIL
                    </a>
                  </div>
                </div>
              </div>
            ): "")
          : "NO DATA"}
      </div>
    </div>
  );
};

export default Home;
