var canvas;
var gl;
var vPosition;
var program;

var letter1vertices, letter2vertices;
var buffer1, buffer2;

var Tx = 0.0, Ty = 0.0, Tz = 0.0;

var xScale = 1.0, yScale = 1.0;

var red = 1.0, green = 0.0, blue = 0.0;
var color, colorLoc;


window.onload = function init()
{
	canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //  Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    var u_Translation = gl.getUniformLocation(program, 'u_Translation');
    gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);

    colorLoc = gl.getUniformLocation(program,"color");


    letter1vertices = [

        vec2(-0.6,-0.4),
        vec2(-0.5,-0.4),
        vec2(-0.6,0.4),
        vec2(-0.5,0.15),//4
        vec2(-0.5,0.4),
        vec2(-0.38,0.0),
        vec2(-0.35,0.1),
        vec2(-0.32,0.0),
        vec2(-0.2,0.15),//9
        vec2(-0.35,0.1),//k
        vec2(-0.2,0.4),//10
        vec2(-0.1,0.4),
        vec2(-0.2,0.15),
        vec2(-0.1,-0.4),
        vec2(-0.2,-0.4),       

     ] ;


    letter2vertices = [

        vec2(0.1,-0.4),
        vec2(0.2, -0.4),  
        vec2(0.1, 0.35),  
        vec2(0.2, 0.30), //4
        vec2(0.15, 0.38),
        vec2(0.2, 0.4),
        vec2(0.25, 0.28),//7
        vec2(0.25, 0.4),
        vec2(0.33, 0.22),//9
        vec2(0.4, 0.4),
        vec2(0.33, 0.20),
        vec2(0.45, 0.36),        
        vec2(0.5, 0.25),
        vec2(0.33, 0.20),
        vec2(0.45, 0.16),
        vec2(0.33, 0.20),
        vec2(0.4, 0.1),//12
        vec2(0.25, 0.13),
        vec2(0.25, 0.02),//14
        vec2(0.2, 0.1),
        vec2(0.2, 0.0),//16
        vec2(0.2, -0.1),//17
        vec2(0.28, -0.02),
        vec2(0.3, -0.15),//19
        vec2(0.35, -0.06),
        vec2(0.35, -0.2),
        vec2(0.44, -0.14),
        vec2(0.5, -0.25),
        vec2(0.32, -0.25),
        vec2(0.45, -0.34),
        vec2(0.25, -0.3),
        vec2(0.42, -0.36),
        vec2(0.25, -0.3),
        vec2(0.39, -0.38),
        vec2(0.25, -0.3),
        vec2(0.25, -0.4),   
        vec2(0.2, -0.3),
        vec2(0.2, -0.4),   
    
        ];
       

    
    		
	buffer1 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer1 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter1vertices), gl.STATIC_DRAW );  
  
    buffer2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer2 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(letter2vertices), gl.STATIC_DRAW );      

	document.getElementById("posX").oninput = function(event) {
        Tx = parseFloat(event.target.value);
        init();
    };    
    document.getElementById("posY").oninput = function(event) {
        Ty = parseFloat(event.target.value);
        init();
    };
    document.getElementById("scaleX").oninput = function(event) {
        xScale =  event.target.value;
        init();
    };
    document.getElementById("scaleY").oninput = function(event) {
        yScale =  event.target.value;
        init();
    };  
    document.getElementById("redSlider").oninput = function(event) {
        red = event.target.value;
        color = vec4(red+red,green,blue,1.0);
        init();
    };
    document.getElementById("greenSlider").oninput = function(event) {
        green = event.target.value;
        color = vec4(red,green+green,blue,1.0);
        init();
    };
    document.getElementById("blueSlider").oninput = function(event) {
        blue = event.target.value;
        color = vec4(red,green,blue+blue,1.0);
        init();
    };

    color = vec4(red,green,blue,1.0);
    xScaleLoc = gl.getUniformLocation( program, "xScale" );
    yScaleLoc = gl.getUniformLocation( program, "yScale" );

    render();
};

function render() {

    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.uniform1f( xScaleLoc, xScale );
    gl.uniform1f( yScaleLoc, yScale );

    
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer1 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    color = vec4(red,green,blue,1.0);
    gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter1vertices.length);

    
  
    gl.bindBuffer( gl.ARRAY_BUFFER, buffer2 );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    // draw rectangle
    
    color = vec4(1-red,1-green,1-blue,1.0);
    gl.uniform4fv(colorLoc,color);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter2vertices.length);

    window.requestAnimFrame(render);
}
