var box1,box2,box3
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100,100,20,25,1)
  box2=new Box(50,90,30,35,-1)
  box3=new Box(70,75,27,30,2)
}

function draw() 
{
  background(220);
box1.show()
box1.move()
box2.show()
box2.move()
box3.show()
box3.move()
}

