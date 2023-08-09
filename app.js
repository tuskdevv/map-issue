const cards = [
  {
    img: 'https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    title: 'A blog post title',
  },
  {
    img: 'https://images.unsplash.com/photo-1563503136947-cc262fa1e423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'second blog post title',
  },
  {
    img: 'https://images.unsplash.com/photo-1518540329668-417feba873ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'third blog post title',
  },
  {
    img: 'https://images.unsplash.com/photo-1572727004231-72c211d8fb94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    title: 'last blog post title',
  },
];
const home = document.querySelector('.blog-cards');
const displayItems = cards
  .map(item => {
    const { img, title } = item;
    return `
  
          <article class="card">
          <img src="${img}" alt="" class="card-image">
          <div class="card-info">
          <h3 class="card-title">${title}</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi vel fugit, accusantium quaerat quae omnis nesciunt rem voluptas quod! Omnis!</p>
          </div>
        </article>
  
  
  `;
  })
  .join('');
home.innerHTML = displayItems;
const cardz = document.querySelectorAll('.card');
for (let i = 0; i < cardz.length; i++) {
  cardz[i].addEventListener('click', () => {
    console.log(cardz[i]);
    const lol = cards[i].title;
    if (lol === 'A blog post title') {
      home.innerHTML = `<h1>Welcome to Our first Post</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi optio ullam repudiandae laboriosam quod iure sequi molestiae! Mollitia eius fuga veritatis ut odit beatae aspernatur asperiores cumque nisi rem?</p>
 <button class="btn">Click Me</button>`;
      const btn = document.querySelector('.btn');
      btn.addEventListener('click', () => {
        home.innerHTML = displayItems;
      });
    }
  });
}
