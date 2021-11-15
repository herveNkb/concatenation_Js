//Calculateur d' Indice de Masse Corporelle (I.M.C).

//Demande des renseignements à l'utilisateur
let poids = prompt(`Quel est votre poids (en kg), espèce de bouboule ?`);
let taille = prompt(`Maintenant, quelle est ta taille (en cm) , nabot ?`);

function calculateurImc(poids, taille) {
  //Calculer (convertir) la taille en mètres
  let tailleEnMetres = taille / 100;
  //permet de calculer la taille au carré
  let tailleCalculee = Math.pow(tailleEnMetres, 2);
  //Calcul de l' IMC
  let resultat = poids / tailleCalculee;

  return resultat;
}

//Affichage du résultat de l'IMC
alert(calculateurImc(poids, taille));
