let fnameInput = document.getElementById('fname');
let priceInput = document.getElementById('price');
let ingredients = document.getElementById('ingredients');
let cuisine = document.getElementById('cuisine');
let specilality = documnet.getElementById('specilality');

// to print data in html table in table body
let tbody = document.getElementById('View');

let isedit = false;
let isindex;

const getData = () => {
    let data = JSON.parse(localStorage.getItem('productDetails'));
    if (data) {
        return data;
    } else {
        return [];
    }
};

let adds = getData();

// create
const AddRecipes = () => {
    if (isedit) {
        let obj = {
            id: Math.floor(Math.random() * 1000),
            fname: fnameInput.value,
            price: priceInput.value,
            ingredients: ingredients.value,
            cuisine: cuisine.value,
            specilality: specilality.value,
        };

        let data = [...adds];
    } else {
        let obj = {
            id: Math.floor(Math.random() * 1000),
            fname: fnameInput.value,
            price: priceInput.value,
            ingredients: ingredients.value,
            cuisine: cuisine.value,
            specilality: specilality.value,
        };

        adds = [...adds, obj];
    }

    dataDisplay();

    localStorage.setItem('productDetails', JSON.stringify(adds));
    dataDisplay();
    fnameInput.value = '';
    priceInput.value = '';
    ingredients.value = '';
    cuisine.value = '';
    specilality.value = '';
    return false;
};


const displayRecipes = () => {
    tbody.innerHTML = '';

    adds.forEach((rec) => {
        tbody.innerHTML += `<tr>
            <td>${rec.id}</td>
            <td>${rec.fname}</td>
            <td>${rec.price}</td>
            <td>${rec.ingredients}</td>
            <td>${rec.cuisine}</td>
            <td>${rec.specilality}</td>          
            <td>
                <button type="button" class="btn btn-primary" onclick="singleRec(${rec.id})">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteData(${rec.id})">Delete</button>
            </td>
        </tr>`;
    });
};


displayRecipes();