document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM chargé");

  //   me renvoie le premier élément trouvé
  //   console.log(document.querySelector("button"));

  // pour une classe
  //  console.log(document.querySelector(".maclasse"));

  // pour un id
  //  console.log(document.querySelector("#maclasse"));

  // renvoie un tableau de tout les éléments trouvés
  //   console.log(document.querySelectorAll("button")[1]);

  //   console.log(document.getElementById("test").classList);

  //   document.getElementById("test").addEventListener("click", () => {
  //     console.log("je suis cliqué");
  //   });

  const boutonPremier = document.getElementById("test");

  boutonPremier.addEventListener("click", () => {
    document.querySelector("p").classList.add("red-class");
  });

  //   console.log();

  document.getElementById("test2").addEventListener("click", () => {
    document.querySelector("p").classList.remove("red-class");
  });

  document.querySelector(".bouton3").addEventListener("click", () => {
    document.querySelector("p").classList.toggle("red-class");
  });

  // PARTIE FORM
  // PARTIE FORM
  // PARTIE FORM
  // PARTIE FORM

  const formulaire = document.querySelector("form");

  formulaire.addEventListener("submit", async (event) => {
    event.preventDefault(); // j'empeche le comportement par défaut !!!!

    // console.log("hey guys");

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log(firstname, lastname, email, message);

    const response = await axios.post("http://localhost:3000/form", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    });

    console.log(response.data.status);

    if (response.data.status === 200) {
      document.getElementById("succes").classList.toggle("hiden");
    }
  });
});
