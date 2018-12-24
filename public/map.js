(function (global, func) {
    global.THREETOPO = func();
}(this, function () {
    function isNumber(val) {
        return typeof val === 'number' && !isNaN(parseInt(val))
    }

    function isString(val) {
        //Stick to whether it is a string
        return typeof val === "string";
    }

    function isNode(val) {
        //Stick to whether it is a DOM node
        if (!isString(val)) {
            console.error("not DOM")
            return
        };
        return document.querySelectorAll(val).length !== 0;
    }

    function isArray(val) {
        return Array.isArray(val)
    }

    let width, height;
    let scene, renderer, camera, fov = 45;
    let stats, canvas;
    let raycaster;
    if (THREE.hasOwnProperty("Raycaster")) {
        raycaster = new THREE.Raycaster();
    }

    function initBase(id) {
        renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("canvas")
        });
        renderer.setClearColor(0x000f1c, 1.0);
        renderer.setSize(width, height);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(fov, width / height, 1, 10000);
        camera.position.set(0, 900, 200);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);
    }

    function initLight() {
        let ambient = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(ambient);
    }

    function initStats() {
        //监控帧数
        stats = new Stats()
        stats.setMode(0)
        document.getElementById("stats").innerHTML = ""
        document.getElementById("stats").appendChild(stats.domElement)
    }

    function initFooter() {
        //加载地板
        let foot = THREE.ImageUtils.loadTexture('./assets/foot.jpg', {}, () => {
            renderer.render(scene, camera);
        });
        foot.wrapS = foot.wrapT = THREE.RepeatWrapping;
        foot.repeat.set(width / 40, height / 40);
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height),
            new THREE.MeshLambertMaterial({
                map: foot,
                side: THREE.DoubleSide,
            }));
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);
    }

    function initControls() {
        //创建鼠标事件
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        //动态阻尼系数 就是鼠标拖拽旋转灵敏度
        controls.dampingFactor = 1;
        //是否可以缩放
        controls.enableZoom = true;
        //是否自动旋转 controls.autoRotate = true; 设置相机距离原点的最远距离
        controls.minDistance = 30;
        //设置相机距离原点的最远距离
        controls.maxDistance = 2000;
        //是否开启右键拖拽
        controls.enablePan = true;
    }

    function numPing(arr) {
        let num = 0;
        arr.forEach(x => {
            num += x;
        })
        return num / arr.length
    }

    function initMap() {
        //测试绘制 
        let n = 1500; //倍数
        var material = new THREE.LineBasicMaterial({
            color: 0xffffff
        });
        //解析所有的坐标
        let arr = [];
        let lineArr = []
        //获取所有的坐标
        mapConfig.features.forEach(fea => {
            fea.geometry.coordinates.forEach(e => {
                if (e[0] !== undefined) {
                    e[0].forEach(g => {
                        let a = [g[0] * n, 100, g[1] * n]
                        arr.push(a)
                    })
                }
            })
        })
        let xArr = arr.map(x => x[0])
        let zArr = arr.map(z => z[2])
        mapConfig.features.forEach(fea => {
            fea.geometry.coordinates.forEach(e => {
                if (e[0] !== undefined) {
                    var geometry = new THREE.Geometry();
                    e[0].forEach(g => {
                        let z = (g[1] * n - numPing(zArr)) * -1;
                        let x = g[0] * n - numPing(xArr);
                        let y = 2;
                        let a = [x, y, z]
                        geometry.vertices.push(
                            new THREE.Vector3(...a)
                        );
                    })
                    var line = new THREE.Line(geometry, material);
                    scene.add(line);
                    lineArr.push(line)
                }
            })
        })
        initMap.prototype.conversion = function (x, z, y = 5) {
            //转换x,z
            let cx = x * n - numPing(xArr)
            let cz = z * n - numPing(zArr)
            return {
                x: cx,
                z: cz * -1,
                y: y
            }
        }




    }

    function initAttack() {
        var material = new THREE.MeshBasicMaterial({
            color: 0xcfceca
        });
        mapConfig.features.forEach(x => {
            let value = initMap.prototype.conversion(...x.properties.cp)
            let h = Math.random() * 180 + 5;
            var geometry = new THREE.CylinderGeometry(2, 2, h, 10);
            var cylinder = new THREE.Mesh(geometry, material);
            cylinder.position.x = value.x
            cylinder.position.z = value.z
            cylinder.position.y = value.y + h / 2
            scene.add(cylinder);
        })
    }
    let nm = () => Math.random() * 1000

    function intiAnmt() {
        let attackArr = initMap.prototype.conversion(113.848455, 22.665555, 15)
        let attackArr1 = initMap.prototype.conversion(113.962062, 22.579619, 15)
        let trail_geometry = new THREE.Geometry();
        for (let i = 0; i < 100; i++) {
            trail_geometry.vertices.push(new THREE.Vector3(attackArr.x, attackArr.y, attackArr.z))
        }
        var trail_line = new MeshLine();
        trail_line.setGeometry(trail_geometry, function (p) {
            return p;
        });
        var resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
        var trail_material = new MeshLineMaterial({
            color: new THREE.Color("rgb(255, 2, 2)"),
            opacity: 1,
            resolution: resolution,
            sizeAttenuation: 1,
            lineWidth: 10,
            near: 1,
            far: 100000,
            depthTest: false,
            blending: THREE.AdditiveBlending,
            transparent: false,
            side: THREE.DoubleSide
        });
        var trail_mesh = new THREE.Mesh(trail_line.geometry, trail_material)
        trail_mesh.frustumCulled = false;
        scene.add(trail_mesh);
        createjs.Tween.get(attackArr).to(attackArr1, 1000).addEventListener("change", handleChange);

        function handleChange(event) {
            trail_line.advance(new THREE.Vector3(attackArr.x, attackArr.y, attackArr.z));
            // 这个tween被改变时.
        }
        // trail_line.advance(new THREE.Vector3(nm(), nm(), nm()));














        var material = new THREE.MeshBasicMaterial({
            color: 0xcfceca
        });

        let value = {x:0,y:110,z:110}
        let h = Math.random() * 180 + 5;
        var geometry = new THREE.CylinderGeometry(2, 2, h, 10);
        var cylinder = new THREE.Mesh(geometry, material);
        cylinder.position.x = value.x
        cylinder.position.z = value.z
        cylinder.position.y = value.y + h / 2
       

        var trailHeadGeometry = [];
        trailHeadGeometry.push(
            new THREE.Vector3(-10.0, 0.0, 0.0),
            new THREE.Vector3(0.0, 0.0, 0.0),
            new THREE.Vector3(10.0, 0.0, 0.0)
        );
        // create the trail renderer object
        var trail = new THREE.TrailRenderer(scene, false);

        // create material for the trail renderer
        var trailMaterial = THREE.TrailRenderer.createBaseMaterial();

        // specify length of trail
        var trailLength = 150;

        // initialize the trail
        trail.initialize(trailMaterial, trailLength, false, 0, trailHeadGeometry, cylinder);
        setInterval(x=>{
            trail.activate()
        },100)
        console.log(trail)

    }

    function renders() {
        stats.update()
        renderer.render(scene, camera);
        requestAnimationFrame(renders);
    }

    function init(params) {
        if (!isNode(params.id)) return;
        [width, height] = [params.width || window.innerWidth, params.height || window.innerHeight]
        initBase(params.id)
        initLight();
        initFooter();
        initControls();
        initStats()
        initMap()
        initAttack()
        intiAnmt()
        renders()
    }
    return init
}))