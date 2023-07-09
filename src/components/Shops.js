// import { React, useEffect, useState } from "react";
import { React } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { supp, add, edit } from "./ProductSlice";
import "./css/Shop.css";
const Shop = () => {
  const data = useSelector((state) => state.prods.products)
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  // const url = "https://fakestoreapi.com/products";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.filter((d) => d.id <= 9)));
  // }, []);
  return (
    <div className="container">
      <div className="row justify-content-around">
        {data
          ? data.map((data, index) => (
              <div className="col-3 m-3" key={index}>
                <div className="card" style={{"width" : "18rem"}}>
                  <img className="card-img-top" alt="test" src={data.image} style={{height : "300px"}}/>
                  <div className="card-body text-center">
                    <h5 className="card-title ">{data.title}</h5>
                    <p className="card-text price">{data.price} $</p>
                    <p className="card-text price">rest : {data.rating.count}</p>
                    <a href={"shop/" + data.id}className="btn btn-primary ">
                      VIEW DETAIL
                    </a>
                    <button className="btn btn-primary ms-1" onClick={() => dispatch(edit(index))}>
                      EDIT PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            ))
          : "NO DATA"}
      </div>
    </div>
  );
};

export default Shop;
