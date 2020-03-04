<<<<<<< HEAD
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
=======
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
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
}