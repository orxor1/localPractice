  const images = [
    {id : 69, name : 'YoniPos'},
    {id : 103, name : 'kaki'}
]
  
  //exports.getImages= function(){ same
  exports.getImages= () => {
    return images
} 

exports.getImage =(id) =>{
  return images.filter(function(item){
    return item.id==id
  })
}