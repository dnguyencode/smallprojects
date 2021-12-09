let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(leads) {
    let listItems = "";
    for (i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href='https://${leads[i]}' target='blank'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEL.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    inputEl.value = "";
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

