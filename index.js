let items =[];
const itemsDiv = document.getElementById("items")
const input=document.getElementById("itemInput")
const storageKey="items"


function renderItems(){
    itemsDiv.innerHTML = null




    for(const [idx,item] of Object.entries(items)){ //gjve index and item
      const container = document.createElement("div"); // create a div element
      container.style.marginBottom = "10px"; // set the margin bottom of the div

      const text =document.createElement("p"); // a dorm element to show the text

      text.textContent = item; // set the text of the element
      text.style.display = "inline"; // set the display of the element to inline
      text.style.marginRight = "10px"; // set the margin right of the element
      const button = document.createElement("button"); // create a button element
      button.textContent = "Delete"; // set the text of the button
      button.onclick = () => removeItem(idx)

      container.appendChild(text); // add the text element to the div
      container.appendChild(button); // add the button element to the div



      itemsDiv.appendChild(container); // add the element to the div
    }
}


function loadItems(){
  const oldItems = localStorage.getItem(storageKey)
  if(oldItems) items =JSON.parse(oldItems)
    renderItems()

}



function saveItems(){
 const stringItems = JSON.stringify(items);
 localStorage.setItem(storageKey,stringItems);
}

function addItem(){
  const value = input.value;
  if(!value){
    alert("Please enter a value");
    return;
  }
  items.push(value);
  renderItems();
  input.value = "";

  saveItems()
}

function removeItem(idx){
    items.splice(idx,1); // to remove the item from the array ,1 is how many u want to delete
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems) // to load the items when the page is loadedlet items = ["hello", "world"];

   