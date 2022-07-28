'use strict';
const AWS = require('aws-sdk');
module.exports= {
  create: async (event,context) =>{
    let bodyData = {}
    try{
      bodyData = JSON.parse(event.body);
    }
    catch(parseError){
      console.log('parse error',parseError);
      return {
        statusCode:400
      }
    }
    if(!bodyData.name || !bodyData.age){
      console.log('body data missing params',);
      return {
        statusCode:400
      }
    }
    let putParams = {
      
    }

  },
  list: async (event,context) =>{

  },
  get: async (event,context) =>{

  },
  update: async (event,context) =>{

  },
  delete: async (event,context) =>{

  },
}
