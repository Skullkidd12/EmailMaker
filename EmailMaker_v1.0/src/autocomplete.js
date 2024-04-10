


const inputEl = document.querySelectorAll("#autocomplete") 

inputEl.addEventListener("input", onInputChange);

getComponentData();

let componentNames = [];

async function getComponentData() {
   const componentRes = await fetch("https://api.jsonbin.io/v3/b/660f7eece41b4d34e4df77e8")
   const data = await componentRes.json();

   componentNames = data.record.data.map((i) => {
      return i.component
   });
   console.log(componentNames)
};


function onInputChange() {
   removeAutocompleteDropdown()
   const value = inputEl.value.toLowerCase();

   if(value.length === 0)return;
   const filteredNames = [];
   componentNames.forEach((indexNomes) => {
      if (indexNomes.substr(0, value.length).toLowerCase() === value){
         filteredNames.push(indexNomes)
      }
   });

   createAutocompleteDropdown(filteredNames);

}

function createAutocompleteDropdown(lista) {
   const listEl = document.createElement("ul");
   listEl.className = "autocomplete-list";
   listEl.id = "autocomplete-list"
   lista.forEach((i)=>{
      const listItem = document.createElement("li");
      const componentButton = document.createElement("button");
      componentButton.innerHTML = i;
      listItem.appendChild(componentButton);
      listEl.appendChild(listItem);
   })


   document.querySelector("#autocomplete-wrapper").appendChild(listEl)
}

function removeAutocompleteDropdown(){
   const listEl = document.querySelector("#autocomplete-list");
   if(listEl) listEl.remove();
}
