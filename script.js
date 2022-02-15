
let myLibrary = []

const addBookToLibrary = (ev) =>{
    ev.preventDefault();
    let getSelectedValue = document.querySelector('input[name="readField"]:checked').value;
    let book = {
        booknumber: document.getElementById('booknumber').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        read: getSelectedValue
        
        
    }
        myLibrary.push(book);
        document.forms[0].reset();

        console.warn('added', {myLibrary} );

        localStorage.setItem('MyLibraryList', JSON.stringify(myLibrary));
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn1').addEventListener('click', addBookToLibrary);
});


let btnGet = document.querySelector('#btn2');
let myTable = document.querySelector('#table');

let headers = ['Book Number','Title', 'Author', 'Pages', 'Read?'];
btnGet.addEventListener('click', resetTable);
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

        headers.forEach(headerText => {
            let header = document.createElement('th');
            let textNode = document.createTextNode(headerText);
            header.appendChild(textNode);
            headerRow.appendChild(header);
});

table.appendChild(headerRow);

myLibrary.forEach(emp => {
    let row = document.createElement('tr');

    Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
    })

    table.appendChild(row);
});

myTable.appendChild(table)
});

function resetTable() {
    table.removeChild(table.firstChild);
}

function delRow() {
    document.getElementsByTagName("tr")[document.getElementById("rowNumber").value].remove();
}

btn3.addEventListener('click', delRow)