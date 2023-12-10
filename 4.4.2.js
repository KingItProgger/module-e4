task 2.
function simplenum(num)
{
  
  if(num>1000||num < 0)
    {
      console.log('invalid number')
    }
   else if (num ===0 || num === 1){
     console.log ('simple number')
   }
  else
    {
      let dels=0;
   
  for (let i=0;i<num;i++)
    {
      if (num%i===0)
        {
          dels++;
        }
    }
      if (dels>2)
        {
          console.log('not simple number')
        }
      else {
        console.log('simple number')
      }
    }
}
simplenum(89)