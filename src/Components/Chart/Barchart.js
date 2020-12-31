import React, { PureComponent } from 'react';

 class BarchartComponent extends PureComponent {

	componentDidMount(){
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var n = "250,200,300,400,150,100,300,350,200,300,200,400,400,150,100,300,350,200,300,300,200,400,400,150,100,100,300,350,200,300,200,400,400,150,100,300,350,200"
		var values = n.split(',');
        
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');

		var width = 15; //bar width
		var X = 10; // first bar position 
		
		for (var i =0; i<values.length; i++) {
			if(i <= 8 || i >= 23) {
				ctx.fillStyle = '#007bff29';
			} else {
				ctx.fillStyle = '#226CFC';
			}
				var h = values[i];
				ctx.fillRect(X,canvas.height-40 - h,width,h);	
				X +=  width + 10;
				ctx.fillStyle = '#B9B9B9';
				ctx.fillText(i,X - 20,canvas.height);
				ctx.fillStyle = '#B9B9B9';
				ctx.fillText(i,X - 20,canvas.height-15);	
		}
		ctx.fillText(55,X + 10,canvas.height);
		ctx.fillText(98,X + 10,canvas.height-15);
	}
  render() {
    return (
		<canvas id="myCanvas" height="500" width="1000">
		</canvas>
	);
  }
}

export default BarchartComponent
