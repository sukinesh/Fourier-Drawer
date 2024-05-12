  const currentPath = path.concat();
  const len = path.length;
  const canvas = document.querySelector('canvas');
//   const fills = ['#000', '#000'];
  let ctx = canvas.getContext('2d');
  
  i = 0;


  function draw() {
      if(i == len)
      {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        i=0;
      }
    
        ctx.beginPath();
      ctx.arc(currentPath[i].x , currentPath[i].y , 2, 0, Math.PI * 2);
      ctx.fill();
      i ++;
      requestAnimationFrame(draw);
  }
  draw();