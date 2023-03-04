import axios from 'axios'

function getOrdenCompra(){
  var config = {
  method: 'get',
  url: 'https://eshop-deve.herokuapp.com/api/v2/orders',
  headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
  }
};

 var res =  axios(config)
.then(res => res.data)
.catch(function (error) { console.log(error) });
return res
}

export default{
  getOrdenCompra
}
