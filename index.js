/* 设置画布的高宽 */
let canvasId = "mainCanvas"
let canvas = document.getElementById("mainCanvas")
let [width, height] = [1600, 800]
var scene = null;
var camera = null;
var renderer = null;
var fov = 45
var id = null;
var controls;
let stats;
var mouse;
var raycaster; 
var Objlength= 0;

async function onResize() {
  let parent = canvas.parentNode;
  width = parent.offsetWidth;
  height = parent.offsetHeight;
  canvas.width = width
  canvas.height = height

}  
function initGrid() {
  var helper = new THREE.GridHelper(width, 40);
  // helper.setColors(0x0000ff, 0x808080);
  scene.add(helper);
}

function initLight() {
  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(30, 30, 15);
  scene.add(light);
  var light1 = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light1);
}


function initCamea() {
  //远交相机
  camera = new THREE.PerspectiveCamera(fov, width / height, 1, 10000);
  camera.position.set(0, 200, 500);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);
}

function draw() {
  stats.update()
  renderer.render(scene, camera);
  requestAnimationFrame(draw);
}

function initBox({
  x,
  y,
  z
}) {
  var rightCube = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10), new THREE.MeshLambertMaterial({
    color: 0xffff00
  }));
  rightCube.position.x = x;
  rightCube.position.y = y;
  rightCube.position.z = z;
  rightCube.params = {
    id: 12
  }
  scene.add(rightCube);
}
//鼠标
function initControls() {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  //动态阻尼系数 就是鼠标拖拽旋转灵敏度
  controls.dampingFactor = 1;
  //是否可以缩放
  controls.enableZoom = true;
  //是否自动旋转 controls.autoRotate = true; 设置相机距离原点的最远距离
  controls.minDistance = 20;
  //设置相机距离原点的最远距离
  controls.maxDistance = 900;
  //是否开启右键拖拽
  controls.enablePan = true;
}
//帧数
function initStats() {
  var stats = new Stats()
  stats.setMode(0)
  document.getElementById("stats").appendChild(stats.domElement)
  return stats

}
//拖拽
function initDragControls() {
  var transformControls = new THREE.TransformControls(camera, renderer.domElement);

  scene.add(transformControls);
  // 过滤不是 Mesh 的物体,例如辅助网格对象
  var objects = [];
  for (var i = 0; i < scene.children.length; i++) {
    if (scene.children[i].isMesh) {
      objects.push(scene.children[i]);
    }
  }
  // 初始化拖拽控件
  var dragControls = new THREE.DragControls(objects, camera, renderer.domElement);

  // 鼠标略过事件
  dragControls.addEventListener('hoveron', function (event) {
    // 让变换控件对象和选中的对象绑定
    transformControls.attach(event.object);
  });

  // 开始拖拽
  dragControls.addEventListener('dragstart', function (event) {
    controls.enabled = false;
  });
  // 拖拽结束
  dragControls.addEventListener('dragend', function (event) {
    controls.enabled = true;
  });

}

function init() {
  // 添加地板背景
  var foot = THREE.ImageUtils.loadTexture('./assets/foot.jpg', {}, function () {
    renderer.render(scene, camera);
  });
  foot.wrapS = foot.wrapT = THREE.RepeatWrapping;
  foot.repeat.set(width / 40, height / 40);
  var plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height),
    new THREE.MeshLambertMaterial({
      map: foot,
      side: THREE.DoubleSide,
    }));
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);
}

function initClick() {
  var objects = []
  var cubeGeometry = new THREE.BoxBufferGeometry(20, 20, 20);
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x00ff80,
    overdraw: 0.5
  });
  var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
  geometry.rotateX(-Math.PI / 2);

  plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    visible: false
  }));
  scene.add(plane);

  objects.push(plane);
  //点击
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  document.addEventListener('mousedown', onDocumentMouseDown, false); 
  function onDocumentMouseDown(event) { 
    event.preventDefault();
    mouse.x = (event.offsetX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.offsetY / renderer.domElement.clientHeight) * 2 + 1;
    if (event.button == 2) {
     /*  raycaster.setFromCamera(mouse, camera);
      var intersects = raycaster.intersectObjects(objects);
      var intersect = intersects[0];
      var voxel = new THREE.Mesh(cubeGeometry, cubeMaterial);
      voxel.position.copy(intersect.point).add(intersect.face.normal);
      voxel.position.divideScalar(20).floor().multiplyScalar(20).addScalar(10);
      scene.add(voxel);
      voxel.params={}
      objects.push(voxel)   */
    } else {
      var vector2 = new THREE.Vector3(mouse.x, mouse.y, 1.0).unproject(camera); //得到那个点了
      var raycaster2 = new THREE.Raycaster(camera.position, vector2.sub(camera.position).normalize()); //起始位置，方向 pos-camerapos
      var result2 = raycaster2.intersectObjects(scene.children);
      if (result2.length > 0) {
        var intersected = result2[0].object; //第一个点到的就作为打中的目标  
      
      }

    }
  }
}

function addLink({x,y}) {
  var geometry = new THREE.Geometry();
  var material = new THREE.LineBasicMaterial({
      vertexColors: true,
      linewidth: 12
  });
  var color1 = new THREE.Color(0xffffff),
      color2 = new THREE.Color(0xff0000); 
  // 线的材质可以由2点的颜色决定 线的材质可以由2点的颜色决定
  var p1 = new THREE.Vector3(x.x, x.y, x.z);
  var p2 = new THREE.Vector3(y.x, y.y, y.z);
  geometry.vertices.push(p1);
  geometry.vertices.push(p2);
  geometry.colors.push(color1, color2);

  var line = new THREE.Line( geometry, material ); 
  scene.add(line);
}
function initObj(params) { 
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load(params.mtl, function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(params.obj, function (object) {
      object.position.y = params.y
      object.position.x = params.x
      object.position.z = params.z
      object.params = {
        id: params.id
      } 
      scene.add(object)
      Objlength++
      if(Objlength===list.length){
        //加载完毕  
        nexus.links.forEach(x=>{
          let target = list.filter(node=>node.id==x.target)[0]
          let source = list.filter(node=>node.id==x.source)[0]   
          addLink({
            x:target,
            y:source,
          })
        }) 
      }
    });
  });

}
function attackEvent(){

}
function load() {
  onResize()
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
  });
  renderer.setClearColor(0x000f1c, 1.0);
  
  scene = new THREE.Scene();
  initCamea();
  init()
  // initGrid()
  initLight()
  initControls()
  // initObj()
  list.forEach((x,i) => { 
    if(x.type==1){
      //主机
      x = {
        ...x,
        ...models.host
      }
      initObj(x)
    }else if(x.type==2) {
      //服务器
      x = {
        ...x,
        ...models.server
      }
      initObj(x)
    }else if(x.type==3) {
      //交换机
      x = {
        ...x,
        ...models.switch
      }
      initObj(x)
    }else if(x.type==4) {
      //路由器
      x = {
        ...x,
        ...models.router
      }
      initObj(x)
    }else if(x.type==5) {
      //路由器
      x = {
        ...x,
        ...models.detection
      }
      initObj(x)
    }else if(x.type==6) {
      //路由器
      x = {
        ...x,
        ...models.firewall
      }
      initObj(x)
    } 
  }) 
  
  stats = initStats()
  //点击事件
  initClick() 
  // initDragControls()
  draw()
}