document.addEventListener('DOMContentLoaded', () =>{
//want to catch the element of the form and put it in a const
const formInfo = document.querySelector('#form');
//we want to add to the element an event and associate to it a function
formInfo.addEventListener('submit', handleAnimalInfo);

//we need to assign to the submit of the delete button a function
const deleteAll = document.querySelector('#delete-all');
deleteAll.addEventListener('click', reset);


})



const handleAnimalInfo = function (event) {
  //we want to prevent the post of the submit
  event.preventDefault();
  // when we click submit we want to create a list of the inputed data
  // we create a higher level function that will take the data
  // from the form as argument
  const animalListItem = createAnimalListItem(event.target);
  // we say to the machine to put in Animal list the content of position of animal list
  const animalList = document.querySelector('#animal-list');
  //we say to append to animal list(<ul>) all the content of the createAnimalListItem()
  animalList.appendChild(animalListItem);
  //and at each time we press the submit to empty the input
  event.target.reset();
}
//we need to create the callback function that runs in the handleItemIndo
const createAnimalListItem = (form) =>{

//being in the Dom tree in <ul> we need to create <li>
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');
//we need to populate the list with the data from the form and append it to the parent<U>
  const name = document.createElement('p');
  name.textContent = `Name : ${form.name.value}`;
  animalListItem.appendChild(name);

  const specie = document.createElement('p');
  specie.textContent = `Specie : ${form.specie.value}`;
  animalListItem.appendChild(specie);

  const continent = document.createElement('p');
  continent.textContent = `Continent : ${findContinent()}`;
  animalListItem.appendChild(continent);

  const divideLine = document.createElement('hr');
  animalListItem.appendChild(divideLine);

  return animalListItem;

};
//we create a function that will find out which of the radio
//button is selected and give us back the result
const findContinent = () =>{
  const continentsNode = document.getElementsByName("Continent");
  // console.log(continents)
  const continents = Array.from(continentsNode);
  const foundCountinent =  continents.filter(continent => continent.checked);
  return foundCountinent[0].value;
  }

const reset = (event) => {
  const animalList = document.querySelector('#animal-list')
  animalList.innerHTML = '';
};
