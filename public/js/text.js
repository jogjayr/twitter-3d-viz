      var camera, scene, renderer;
      var geometry, material, mesh,words;

      var txt = "This is a sample feed,140 characters or less. Yes sir. Wonderful. Absolutely 140 characters and stuff. Great1 absolutely fantastic!";
      init();
      animate();

      function init() {

          camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
          camera.position.z = 1000;

          scene = new THREE.Scene();

          geometry = new THREE.BoxGeometry(200, 200, 200);
          material = new THREE.MeshBasicMaterial({
              color: 0xff0000,
              wireframe: true
          });
          var shape = new THREE.TextGeometry(txt, {font: 'helvetiker' });
          
        var wrapper = new THREE.MeshNormalMaterial({color: 0x00ffff});
         words = new THREE.Mesh(shape, wrapper);
        scene.add(words);
         //addText("hello world");
          
          //mesh = new THREE.Mesh(geometry, material);
         
        //  scene.add(mesh);
         
          
          
          renderer = new THREE.WebGLRenderer();
          renderer.setSize(window.innerWidth, window.innerHeight);

          document.body.appendChild(renderer.domElement);

      }

      function addText(text){
       var shape = new THREE.TextGeometry(text, {font: 'helvetiker' });
        
         var wrapper = new THREE.MeshNormalMaterial({color: 0x00ffff});
         var word2 = new THREE.Mesh(shape, wrapper);
        scene.add(word2);

      }

      function animate() {

          requestAnimationFrame(animate);

         // mesh.rotation.x += 0.01;
          //mesh.rotation.y += 0.02;
          words.position.x -= 5;

          renderer.render(scene, camera);

      }