const loadPost = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const section = document.getElementById('post')
    for(const post of data){
      const div = document.createElement('div')
      div.classList.add('div');
      div.innerHTML = `
      <h3 class='title'>Title: ${post.title}</h3>
      <p>Description: ${post.body}</p>
      `
      section.appendChild(div);
    }
}
