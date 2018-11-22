import React from 'react';

function canvas(props) {
  return (
    <canvas id="myCanvas" width="480" height="320"></canvas>

    //canvas and ctx = canvas component
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // x and y = canvas
    var x = canvas.width / 2;
    var y = canvas.height - 30;
  )
}

export default canvas