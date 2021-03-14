class Wlog  extends BaseClass {
    constructor(x, y, width, height){
      var options = {
        isStatic:true
      }
      super(x,y,width,height);
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      
      this.image = loadImage("wlog.png");
    }
  
  };

  
  