const getComment = () => {
    fetch('http://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
getComment()

function displayComment(data){
    const section = document.getElementById('comment')
    for(const comment of data){
        const div = document.createElement('div')
        div.classList.add('div')
        div.innerHTML = `
        <h2 class="text">${comment.name}</h2>
        <p class="text">${comment.email}</p>
        <p class="text">${comment.body}</p>
        `
        section.appendChild(div)
    }
}