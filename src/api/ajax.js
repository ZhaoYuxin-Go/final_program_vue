import axios from 'axios'
// 封装axios请求
export default function ajax(url, data={}, method='GET') {
  return new Promise((resolve, reject) => {
    let result 
    if (method === 'GET') {
      result = axios.get(url,{params:data})
    }else{
      result = axios.post(url,data)
    }
    result.then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
    })
  });
}
