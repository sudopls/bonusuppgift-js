// Spara alla h2 i en array
const headings = document.getElementsByClassName('accordion');

// Loopa över listan med h2
for (i=0; i<headings.length; i++) {
  // För varje h2, lägg till en eventlistener
  headings[i].addEventListener('click', function () {
    // Vid ett click event, toggla klassen text
    this.nextElementSibling.classList.toggle('text');
  })
}