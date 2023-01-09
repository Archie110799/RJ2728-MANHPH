import React from "react";
import styles from "./index.module.css";

const JSX = () => {
  window.addEventListener(
    "resize",
    function () {
      console.log(window.innerWidth, window.innerHeight);
      let elm = document.getElementById("div__right");
      if (elm) {
        elm.style.margin = window.innerWidth < 800 ? "auto" : "";
      }
    },
    true
  );
  return (
    <React.Fragment>
      <header
        className={`py-3 ps-2 mb-5 ${styles.bg__ccc} ${styles.text__white}`}
      >
        <h1>The Pulpit Rock</h1>
      </header>
      <div className="row w-100">
        <div className="col-12 col-md-3 mb-3">
          <div className={`${styles.item} p-4`}>The Drive</div>
          <div className={`${styles.item} p-4`}>The Walk</div>
          <div className={`${styles.item} p-4`}>The Return</div>
          <div className={`${styles.item} p-4`}>The End</div>
        </div>
        <div className="col col-md m-3">
          <h1>The Walk</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Pulpit rock"
            className="w-100 h-75"
          />
        </div>
        <div id="div__right" className="col-11 col-md-3 bg-info h-75">
          <div>
            <h1>What?</h1>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
          </div>
          <div>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway.</p>
          </div>
          <div>
            <h1>Price?</h1>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
      <footer
        className={`mt-5 w-100 text-center py-2 ${styles.footer} ${styles.bg__ccc} ${styles.text__white}`}
      >
        This web page is a part of a demonstration of fluid web design made by
        www.w3schools.com. Resize the browser window to see the content response
        to the resizing.
      </footer>
    </React.Fragment>
  );
};

export default JSX;
