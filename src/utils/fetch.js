export default {
  post(url){
    return fetch(url,{
      method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
      return result
    })
  }
}