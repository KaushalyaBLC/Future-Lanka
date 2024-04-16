import React from "react";

const Search = () => {
  return (
    <>
      <div className="col-12 p-3 d-flex justify-content-center align-items-center search ">
        <div className="col-lg-5 col-sm-12">
          <input type="text" className="col-12 "/>
        </div>
        <div className="col-lg-2 col-sm-12 ps-2 ">
          <button className="rounded">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
