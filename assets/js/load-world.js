function loadWorld() {
  var request = new XMLHttpRequest();
  request.open("GET", "assets/environments/world.json");
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
        handleLoadedWorld(request.responseText);
    }
  }
  request.send();
}

function handleLoadedWorld(data) {
  window.world = JSON.parse(data);

  worldVertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, worldVertexBuffer);
  vertices = [];
  for(i=0; i < window.world.objects.length; i++) {
    for(j=0; j < window.world.objects[i].vertices.length; j++) {
      vertices.push( parseFloat(window.world.objects[i].vertices[j]) );
    }
  }
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  worldVertexBuffer.itemSize = 3;
  worldVertexBuffer.numItems = vertices.length / 3;
  worldVertexBuffer.vertex_count = vertices.length;


  worldColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, worldColorBuffer);
  colors = [];
  for(i=0; i < window.world.objects.length; i++) {
    for(j=0; j < window.world.objects[i].colors.length; j++) {
      colors.push( parseFloat(window.world.objects[i].colors[j]) );
    }
  }
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  worldColorBuffer.itemSize = 4;
  worldColorBuffer.numItems = colors.length / 4;



  document.getElementById("loadingtext").textContent = "";
}
