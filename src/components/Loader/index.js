import React from "react";
import "./style.css";

export default function Loader() {
  const timer = setTimeout(() => {
    if (document.getElementById("load")) {
      return (document.getElementById("load").innerHTML = "");
    }
  }, 2000);
  return (
    <div id="load">
      {timer}
      <div className="space">
        <div className="ship">
          <div className="ship-rotate">
            <div className="pod" />
            <div className="fuselage" />
          </div>
        </div>
        <div className="ship-shadow" />
        <div className="mars">
          <div className="tentacle" />
          <div className="flag">
            <div className="small-tentacle" />
          </div>
          <div className="planet">
            <div className="surface" />
            <div className="crater1" />
            <div className="crater2" />
            <div className="crater3" />
          </div>
        </div>
        <div className="test" />
      </div>
    </div>
  );
}
// $(window).on("load", function () {
//   $("#load")
//     .delay(1000)
//     .fadeOut("fast", function () {
//       $("div").removeClass("space");
//     });
// });
