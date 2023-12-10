function check (obj,prop)
{
  if (obj.hasOwnProperty(prop))
    {
      return true;
    }
  else {return false;}
}
    
let person = {
  gender: 'man',
  age: 20,
  job: 'developer'
  
}

console.log(check(person,'age'))