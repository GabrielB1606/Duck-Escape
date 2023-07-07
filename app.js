var vertexShaderText = 
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'',
'void main()',
'{',
'  fragColor = vertColor;',
'  gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
'  gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');

const InitDemo = () =>{
    console.log("loading");

    var canvas = document.getElementById("game");
    var gl = canvas.getContext('webgl');

    if(!gl){
        gl = canvas.getContext('experimental-webgl');
    }

    if(!gl){
        console.log("browser not compatible");
    }

    gl.clearColor(0.2, 0.6, 0.2, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

}