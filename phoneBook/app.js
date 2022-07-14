const Name = document.querySelector('.Name');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const tableList = document.querySelector('.table-list');

// form.addEventListener('submit', getNames)

// if(input === ''){
// alert('You have to fill the form')
// }

loadEventListeners();

function loadEventListeners(){
    Name.addEventListener('click', getNames)
    form.addEventListener('submit', addNames)

}

function Table(SN, fullName, phoneNumber){
    this.SN = SN;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
}

function addPhoneBook(table){
const row = document.createElement('tr');

// insert cols
row.innerHTML = `
 <td>${table.SN}</td>
 <td>${table.fullName}</td>
 <td>${table.phoneNumber}</td>
 <td><a href="#" class="delete">X</a></td>`;
 tableList.appendChild(row)
}
const Delete = document.querySelector('.delete');
Delete.style.background = "red";

function addAlert(){
    let firstName = document.querySelector('.firstname');
    let lastName = document.querySelector('.lastname');
    let middleName = document.querySelector('.middlename');
    let phoneNumber = document.querySelector('.phonenumber');
    if(firstName === '' || lastName ==='' || middleName === '' || phoneNumber === ''){
     submit.addEventListener('click'(e))
     function addAlert(e){
        showAlert('please fill in all fields') 
     }  
    }
}