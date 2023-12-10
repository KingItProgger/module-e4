function sum(cb,num1,num2){
  

  cb(num2);
  return function ()
  {
    console.log(num1+num2);
  }
  
}


function callback(num2){
  return num2;
}

const resFunc = sum(callback,4,2);
resFunc();
