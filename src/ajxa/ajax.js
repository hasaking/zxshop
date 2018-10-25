import axios from 'axios'
//返回值promise对象 异步返回promise.data
export default function (url, data={}, type='GET') {
   return new Promise( function(resolve , reject){
    if (type === 'GET') {     
      Object.keys(data).forEach( key => {
      	 let dataStr = ''
//将键值 ，名拼接到字符串
         dataStr += key + '=' + data[key] + '&'
      })
//截取字符串拼接成新字符串
      if (dataStr !== '') {
      	dataStr = dataStr.substring(0 , dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

     promise = axios.get(url)
   }else {
     promise = axios.post(url , data)
   }
   return promise

  promise.then(response => {
  	resolve(response.data)
  })
  .catch(error => {
    reject(error)
  })

 }) 
}
   