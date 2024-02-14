const booksapi = `https://striveschool-api.herokuapp.com/books`;
const params = new URLSearchParams (location.search);
console.log(params);
const id = params.get("q");
console.log(id);
let booksArray = [];

getBookData();

/* function getBookData() {
    fetch(booksapi)
    .then((response) => response.json())
    .then((json) => {
        booksArray.push(...json);
        selectedBook = booksArray.filter(book => {
            return book.asin.includes(id);
        });
        console.log(selectedBook);
        populatePage(selectedBook[0]);
});
}; */

function getBookData() {
    fetch(`${booksapi}/${id}`)
    .then((response) => response.json())
    .then((json) => {
        let selectedBook = json;
        console.log(selectedBook);
        populatePage(selectedBook);
});
};

function populatePage({title, img, price, category}) {
    let bookImg = document.getElementById("book-cover");
    bookImg.src = img;

    let bookTitle = document.getElementById("book-title");
    bookTitle.innerText = title;

    let bookGenre = document.getElementById("book-genre");
    bookGenre.innerText = category;

    let bookPrice = document.getElementById("book-price");
    bookPrice.innerText = price;
};

