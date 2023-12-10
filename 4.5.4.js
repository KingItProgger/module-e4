function ParentDevice(power)
{
  this.power=power
  this.inSocket=false
  this.turnOnPower = function()
  {
    this.inSocket=true
  }
  this.turnOffPower = function()
  {
    this.inSocket=false
  }
}

function computer(power,graphicProcessor,processor)
{
   this.power=power
  this.graphicProcessor=graphicProcessor,
  this.processor=processor
}

computer.prototype=new ParentDevice()

function lamp (power,blindness)
{
   this.power=power
  this.blindness=blindness
}

lamp.prototype=new ParentDevice()

comp = new computer(700,'rtx3060','ryzen9')
comp.turnOnPower()

lam=new lamp(200,500)

console.log (comp)
console.log(lam)