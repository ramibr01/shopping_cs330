var stores = ['Grocery', 'Hardware', 'Convenience', 'Bakery']
var sections = ['Produce', 'Meats', 'Canned Goods', 'Dairy', 'Liquor', 'Tools']

function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price']
    let vals = []
    for (let cid of rowcolids) {
        vals.push(document.getElementById(cid).value)
    }
    makeRow(vals, document.getElementById('shoppinglist'))
}

function makeRow(valueList, parent) {
    let row = document.createElement("tr")
    row.classList.add(document.getElementById("priority").value)
    let cb = document.createElement("input")
    cb.type = "checkbox"
    cb.classList.add("form-control")
    row.appendChild(cb)

    for (let val of valueList) {
        let td = document.createElement("td")
        td.innerHTML = val
        row.appendChild(td)
    }
    parent.appendChild(row)
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})
