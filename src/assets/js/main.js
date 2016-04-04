var scene = require('./Utils/Scene').create();
var camera = require('./Utils/Camera').create();
var renderer = require('./Utils/Renderer').create();

var terrain = require('./Terrain').create(scene, camera, renderer);
var sounds = require('./Sounds').create();
var controls = require('./Controls').create(camera);
var terrain = require('./Terrain');
var UI = require('./UI');

var render = function() {
    requestAnimationFrame(render);

    controls.update();
    renderer.render(scene, camera);
};

render();
