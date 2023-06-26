import React from "react";

const New = () => {
  return (
    <div className="d-flex flex-column justify-content-around w-100 mx-auto mt-5" >
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center" >
        <label htmlFor="" className="mr-2">Title : </label> 
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Tapez le titre de produits"
        />
      </div>
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center">
        <label htmlFor="" className="mr-2">Description : </label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="tapez le description"
        />
      </div>
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center">
        <label htmlFor="" className="mr-2">Price : </label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="tapez le prix"
        />
      </div>
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center">
        <label htmlFor="" className="mr-2">Categorie : </label>
        <select 
          className="form-control w-50 mx-auto"
          >
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center">
        <label htmlFor="" className="mr-2">Image : </label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="le lien d'image"
        />
      </div>
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center">
        <label htmlFor="" className="mr-2">Rate : </label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="le rate"
        />
      </div>
      <div className="d-flex flex-column justify-content-center w-100 mb-2 text-center">
        <label htmlFor="" className="mr-2">Count : </label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="quantite de produits"
        />
      </div>
    </div>
  );
};

export default New;
