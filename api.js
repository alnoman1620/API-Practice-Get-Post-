// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  document.getElementById('btn').addEventListener('click',function(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(res => res.json())
   .then(data => console.log(data))
  })


// 
 const getPost = ()=>{
  document.getElementById('btn')
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(post => console.log(post) )
  }

  // 
  const getUser = ()=>{
    document.getElementById('btn2')
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data) )
    }
 function displayUsers(data){
  const ul = document.getElementById('userName');
  const ul2 = document.getElementById('userAdd');
  
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = `User Name: ${user.name} , Email: ${user.email}`;
    ul.appendChild(li)
    const li2 = document.createElement('li')
    li2.innerText = user.address.city;
    ul2.appendChild(li2)
  }
 
 }

 const getComment = () =>{
  document.getElementById('btn4')
  fetch('http://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(comments => displayComment(comments))
}

function displayComment(comments){
 const ul3 = document.getElementById('userComment')
 for(const comment of comments){
 const li3 = document.createElement('li')
 li3.innerText = comment.name;
 ul3.appendChild(li3);
 }

}

const postMethod = () => {
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
      name:'Abdullah - Al - Noman',
      roll:'1620',
      university: "IST",
      userId: 1
    }),
    headers:{
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(res => res.json())
  .then(data => console.log(data)) 
}

postMethod()