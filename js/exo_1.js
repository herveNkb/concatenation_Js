//Création d'une alerte en se servant des renseignements demandé à l'utilisateur.

function abracadabra() {
  let firstName = prompt(`Quel est ton prénom ?`);
  let lastName = prompt(`Cette fois, quel est ton nom de famille ?`);
  let age = prompt(`Combien d'années as-tu à ton compteur ?`);

  alert(
    `"Sapristi ! On ne m'avait pas prévenu que c'était vous, `
      + firstName
      + ` ! Euh... Je veux dire... Monsieur le grand magicien `
      + lastName 
      + ` ! Cela fait déjà ` 
      + age 
      + ` ans que vous faites rayonner notre contrée!".`
  );
}

abracadabra();
