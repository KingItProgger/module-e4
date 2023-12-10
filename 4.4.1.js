task 1.

function arriter(arr)
{
  let nuls=0,ch=0,nech=0,other=0;

  for (let i=0; i<arr.length;i++)
    {
      if (typeof(arr[i])=='number')
        {
          if (arr[i]===0)
            {
              nuls++;
            }
          else if (arr[i]%2===0)
            {
              ch++;
            }
          else
            {
              nech++;
            }
        }
      else {
        other++;
      }
    }
  
  console.log(nuls,ch,nech,other)
}

let mass = [0,0,2,4,6,1,1,1,1,0,'k'];

arriter(mass);