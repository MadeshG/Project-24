class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
