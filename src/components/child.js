import React from "react";

import "../App.css";

function Child(props) {
  return (
    <>
      <center>
        <h1>Welcome to our Shop</h1>
      </center>

      <div class="container">
        {props.list.map((el, id) => (
          <div class="card" style={{ width: "18em" }}>
            <img src={el.image} class="card-img-top tof" alt="tof" />
            <div class="card-body">
              <h5 class="card-title">{el.title}</h5>
              <b>{el.price} TND</b>
              <p class="card-text">{el.description}</p>
              <div>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => props.up(id)}
                >
                  +
                </a>
              </div>
              <div className="card-text">{el.quantity}</div>
              <div>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => props.down(id)}
                >
                  -
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Child;
