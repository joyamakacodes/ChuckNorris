const bookRecord = 'Book List';
let bookArray = [];

function saveBook(bookTitle, bookAuthor, bookIsbn,bookSN){
    let myBook = {
        SN:bookSN,
        title: bookTitle,
        author: bookAuthor,
        isbn: bookIsbn
    }
    // adding the object to the empty array
     bookArray.push(myBook)
    // saving to local storage
    console.log(bookArray)

    let stringified = JSON.stringify(bookArray)
    console.log(stringified)
    // storage
    localStorage.setItem(bookRecord, stringified);
}
function createBook(){
  let tableList =  document.querySelector('#book-list')
//   tableList = ''
     bookArray = JSON.parse(localStorage.getItem(bookRecord))
     console.log(bookArray)

    bookArray.forEach(function(book, index){
        let SN = 0
        let tableRow = document.createElement
        ('tr');
        let tdSN = document.createElement('td');
        let tdTitle = document.createElement('td');
        let tdAuthor = document.createElement('td');
        let tdIsbn = document.createElement('td');
        let tdDelete = document.createElement('td');

        
        //    tableList.insertAdjacentElement('beforeend' , bookArray)


        tdTitle.textContent = book.title;
        tdAuthor.textContent = book.author;
        tdIsbn.textContent = book.isbn;
        tdDelete.textContent = 'X';
        tdSN.textContent = SN + 1
        tdDelete.classList.add('delete')



        tableRow.appendChild(tdTitle);
        tableRow.appendChild(tdAuthor);
        tableRow.appendChild(tdIsbn);
        tableRow.appendChild(tdDelete);
        tableRow.appendChild(tdSN);

        // console.log(tableRow)
        tableList.insertAdjacentElement('beforeend' , tableRow)


        // tdSN = 1;
        // for(i=1; i>=tdSN;i++) return(i)
         tdDelete.setAttribute('data-book-id', index);
        document.querySelector('#book-list').appendChild(tableRow);
        
    })
}
function deleteBook(index){
    bookArray = JSON.parse(localStorage.getItem(bookRecord))
    bookArray.pop(parseInt(index));


localStorage.setItem( bookRecord, JSON.stringify(bookArray));

createBook()
}

//listen for submit action
document.querySelector('form').addEventListener('submit', function(e){

e.preventDefault();

let title = document.querySelector('#title').value
let author = document.querySelector('#author').value
let isbn = document.querySelector('#isbn').value

saveBook(title, author, isbn);
createBook()
})

document.querySelector('#book-list').addEventListener('click', function(e){
if(e.target.classList.contains('delete')){
    let id = e.target.getAttribute('data-book-id')

    console.log(id)

    deleteBook(id)
}

//console.log(e)
})

// createBook()

const num = [1,2,3, 4, 5, 6, 7, 8, 9];
const [num1, num2, num3, ...cnn] = num

console.log(num1,num2,num3,cnn)
console.log(rest)



