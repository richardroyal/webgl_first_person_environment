var shaderProgram;
var mudTexture;

var xPos = 0;
var yPos = 0.4;
var zPos = 0;

var speed = 0;
var currentlyPressedKeys = {};

var pitch = 0;
var pitchRate = 0;

var yaw = 0;
var yawRate = 0;

var mvMatrix = mat4.create();
var mvMatrixStack = [];
var pMatrix = mat4.create();

var lastTime = 0;

function webGLStart() {
  var canvas = document.getElementById("sim");
  initGL(canvas);
  initShaders();
  loadWorld();

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  document.onkeydown = handleKeyDown;
  document.onkeyup = handleKeyUp;

  tick(); 
}


function tick() {
  requestAnimFrame(tick);
  handleKeys();
  drawScene();
  animate();
}
