function iter (obj)
{
  for (let key in obj)
    {
      if (obj.hasOwnProperty(key))
        {
          console.log(`${key}:${obj[key]}`);
        }
    }
}
let person ={
  city: "msk",
  age: 16,
  gender: 'man'
}

iter(person);