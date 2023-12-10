class Device {
  constructor(power)
  {
    this.power=power;
     this.inSocket=false;
  }
  turnInSocket()
  {
    this.inSocket=true;
  }
  turnOffSocket()
  {
    this.inSocket=false;
  }
  
}

class Computer extends Device
{
  constructor(power,processor,graphicProcessor,inSocket)
  {
    super(power,inSocket);
    this.processor=processor;
    this.graphicProcessor=graphicProcessor;
    
  }
  getInfo()
  {
    console.log(`power: ${this.power},processor: ${this.processor},graphicProcessor: ${this.graphicProcessor}, inSocket: ${this.inSocket}`);
  }
}

class Lamp extends Device
{
  constructor(power,blindness,inSocket)
  {
    super(power,inSocket);
    this.blindness=blindness;
 
  }
  getInfo()
  {
    console.log(`power: ${this.power},blindness: ${this.blindness} inSocket: ${this.inSocket}`);
    
  }
}

const computer = new Computer(800,'intel i9','rtx 4090')
computer.turnInSocket();
const lamp = new Lamp (100,250)

computer.getInfo();
lamp.getInfo();