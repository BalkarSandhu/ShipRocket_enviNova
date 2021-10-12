const AWS = require('aws-sdk')

const myDynamo = new AWS.DynamoDB.DocumentClient({
    accessKeyId: "AKIAQCEPJ2OAS5VAAKXY",
    secretAccessKey: "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",
    region: "us-east-2"
})


// Get Product details from a single id
let getProduct = async ({id}) =>{
  try{
    console.log("1 gp")
    let res = await myDynamo.get({
      TableName: "Product_Details",
      Key: {
        "id": id
      }
    }).promise()
    console.log("2 gp")
    return {
      status: 200,
      data: res.Item
    }
  }catch(e){
    return {
      status: 409,
      data: null,
      callStatus: "request failed",
      errorMessage: e
    }
  }
}

// Get product details from an array of rpoduct ids
let getProductsFromIds = async ({idArr}) =>{
  try{
    console.log("1 gpfi")
    let res = await myDynamo.batchGet({
      RequestItems: {
        "Product_Details": {
          Keys: idArr.map(object=>{
            return {
              "id": object.productId
            }
          })
        }
      }
    }).promise()
    console.log("2 gpfi")
    return {
      status: 200,
      data: res.Responses
    }
  }catch(e){
    return {
      status: 409,
      data: null,
      callStatus: "request failed",
      errorMessage: e
    }
  }
}

// Get Product CategoryWise
let getProductFromCategory = async (category) => {

}




module.exports = {getProductsFromIds, getProduct}