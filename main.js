// Spara alla h2-element i en array
let accordion = document.getElementsByClassName("accordion");

// Skapa upp en variabel vi kan använda för att hålla koll på hur långt vi behöver loopa
let i;

// Loopa över arrayen med h2
for (i = 0; i < accordion.length; i++) {
  // Lägg till en eventlistener på varje h2
  accordion[i].addEventListener("click", function() {

    // Använd toggle metoden på classList för att växla "active" av och på. Notera hur "this" används här för att kalla på det objekt vi befinner oss på i loopen

    this.classList.toggle("active");

    // Spara elementets "syskon", i detta fall blir det den div som har klassen "text".
    let text = this.nextElementSibling;

    // Om objektet vi sparade ovan har CSS-regeln display: block...
    if (text.style.display === "block") {
      // Ändra den till display: none
      text.style.display = "none";
    } else {
      // Om objektet istället redan har display: none, ändra den till display: block för att visa texten som finns i elementet
      text.style.display = "block";
    }
  });
}
