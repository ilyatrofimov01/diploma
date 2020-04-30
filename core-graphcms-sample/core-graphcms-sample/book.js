const url = 'https://api-euwest.graphcms.com/v1/ck01dgnoy08jb01d0esp23bd0/master';
function getQueryVariable(variable)
{
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
    }
    return(false);
}

let bookName = getQueryVariable('id');
const ONE_BOOK_QUERY = `
      {
        books (where:{name:"${bookName}"}){
          id
          name
    	  description
    	  price
        }
      }
      `;

axios.post(url, {query: ONE_BOOK_QUERY})
    .then(response => {
        let book = response.data.data.books[0];
        console.log(response.data);
        console.log(book);
        bookView = document.getElementById('book');
        bookView.innerHTML += `<div class="book">${book.name}</a> | <span>Price: ${book.price}</span><p>${book.description}</p></div>`;
    })
    .catch(error => {
        console.log(error);
    })
