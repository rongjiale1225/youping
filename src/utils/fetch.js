export default {
  post(url,data){
    return fetch(url,{
      method: 'POST',
      body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      return result
    })
  },
  get(url){
    return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result
    })
  }
}