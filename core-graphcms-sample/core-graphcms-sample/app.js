const url = 'https://api-euwest.graphcms.com/v1/ck01dgnoy08jb01d0esp23bd0/master';
const ALL_BOOKS_QUERY = `
      {
        books (where:{}){
          id
          name
    	  description
    	  price
        }
      }
      `;
axios.post(url, {query: ALL_BOOKS_QUERY})
    .then(response => {
        let books = response.data.data.books;
        booksView = document.getElementById('books');
        for (let b of books) {
            booksView.innerHTML += `<div class="book"><a href="book.html?id=${b.name}">${b.name}</a> | <span>Price: ${b.price}</span></div>`;
        }
    })
    .catch(error => {
        console.log(error);
    })
