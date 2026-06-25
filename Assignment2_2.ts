type Book = [string, boolean];

let books: Book[] = [
    ["The Great Gatsby", true],
    ["To Kill a Mockingbird", false],
    ["1984", true],
    ["Pride and Prejudice", false],
    ["The Catcher in the Rye", false]
];

let availableCount = 0;
let borrowedCount = 0;

for (let i = 0; i < books.length; i++) {
    let title = books[i][0];      
    let isBorrowed = books[i][1];  

    if (isBorrowed === true) {
        console.log(title + " - Status: Borrowed");
        borrowedCount = borrowedCount + 1; 
    } else {
        console.log(title + " - Status: Available");
        availableCount = availableCount + 1; 
    }
}

console.log("Total Available Books: " + availableCount);
console.log("Total Borrowed Books: " + borrowedCount);