const gestPhotos = () => {
    fetch('http://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayImage(data))
}
gestPhotos()
function displayImage(photos){
    const section = document.getElementById('image')
    for(const photo of photos){
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>Image</h1>
        <img  src="${photo.url}"></img>
        `
        section.appendChild(div)
    }
}