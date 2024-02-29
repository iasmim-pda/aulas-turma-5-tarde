class Pet {
  constructor(owner, name, breed, age) {
      this.owner = owner;
      this.name = name;
      this.breed = breed;
      this.age = age;
  }
}

document.getElementById('pet-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const owner = document.getElementById('owner').value;
  const name = document.getElementById('name').value;
  const breed = document.getElementById('breed').value;
  const age = document.getElementById('age').value;
  const pet = new Pet(owner, name, breed, age);
  document.getElementById('output').textContent = JSON.stringify(pet, null, 2);
});