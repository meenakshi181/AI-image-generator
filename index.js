window.onload=function()
{
  const Api_key="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"
const submitIcon=document.querySelector("#submit-icon")

const inputElement= document.querySelector("input")

const getImages= async ()=>
{

  const options={
    method:"POST",
    Headers:{
      "Authorization": `Bearer ${Api_key}`,
      'Content-Type':"application/json"
    },
    body: JSON.stringify(
      {
        "prompt":inputElement.value,
        "size":"1792x1024",
        "n":1
      }
    )
   

  }
  try{
    const response= await fetch("https://api.openai.com/v1/images/generations", options)
    const data= await response.json()
    console.log(data)
  }
  catch(error){
console.error(error)
  }
}


submitIcon.addEventListener('click', getImages)
}

