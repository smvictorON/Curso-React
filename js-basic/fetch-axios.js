const getPosts = async() => {
  //fetch
  // let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const postsJson = await posts.json()

  //axios
  const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
  carregaElementos(data)
}

const carregaElementos = (postsJson) => {
  const table = document.createElement('table')

  for(let post of postsJson){
    const tr = document.createElement('tr')

    const td = document.createElement('td')
    td.innerHTML = post.title
    tr.appendChild(td)

    table.appendChild(tr)
  }

  const res = document.getElementById('resultado')
  res.appendChild(table)
}
getPosts()
