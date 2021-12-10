let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        addLead(tabs[0].url)
    })
})

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

function addLead(lead) {
    myLeads.push(lead);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
}

inputBtn.addEventListener("click", function() {
    addLead(inputEl.value);
    inputEl.value = "";
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

