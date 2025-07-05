module.exports.calculator=(event,context,callback)=>{
  const payload=event.queryStringParameters
  console.log(payload.action)
  if(payload.action==="add"){
      const add=Number(payload.num1)+Number(payload.num2)
      const response={
          statusCode:200,
          body:JSON.stringify({data:add})
      }
      callback(response)
  }
};