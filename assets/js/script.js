
// affiche et masquer de formulaire 
const btnAjouter = document.querySelector('.btn-ajouter');
const forme = document.getElementById('addPlayerForm');
const formulaire = document.querySelector('.nonn');
const btnCancel = document.querySelector('.btn-cancel');
const buttonTerrain = document.querySelector('.ajouterJoueurTerrain');


// une fois ajouter une joueur au terrain la forme ferme
buttonTerrain.addEventListener('click',()=>{
  if(validationForme()){
    fermeForme();
  }
});


btnAjouter.addEventListener('click', () => {
   afficheForme();

});

//pour annuller le forme
btnCancel.addEventListener('click',()=>{
    fermeForme();

});

//pour ferme forme
function fermeForme(){
  formulaire.classList.remove('nonn1');
  formulaire.classList.add('nonn');
  btnCancel.classList.remove('btn-cancel1')
  btnCancel.classList.add('btn-cancel')
  btnAjouter.classList.remove('btn1')
  btnAjouter.classList.add('btn')
}

//pour affichage de forme
function afficheForme(){
  formulaire.classList.remove('nonn');
  formulaire.classList.add('nonn1');
  btnCancel.classList.remove('btn-cancel')
  btnCancel.classList.add('btn-cancel1')
  btnAjouter.classList.remove('btn')
  btnAjouter.classList.add('btn1')

}

// affiche et masquer formulaire specifique en fonction de la position choisie
document.getElementById("PositionPlayer").addEventListener("change",function(){
  const selectPosition = this.value;
  const principalStatique = document.getElementById("principalStatique")
  const gardianStatique = document.getElementById("gkStatique")
  if(selectPosition === "GK"){
    gardianStatique.style.display="block";
    principalStatique.style.display="none";
  }else {
    gardianStatique.style.display="none";
    principalStatique.style.display="block";
  }

});

// pour la verification de poste 
let formation = {
  GK: null, RB: null, LB: null, CB1: null, CB2: null,
  SA: null, LW: null, RW: null, CM: null, MR: null, ML: null
};

// reservation de joueur lorsque deja ajouter en sa position 
let reserve = [];

//fonction pour ajouter un joueur et recuperation des donner  
function AjouterJoueurTerrain() {
if(validationForme()){
  const playerName = document.getElementById('playerName').value;
  const photoPlayer = document.getElementById('photoPlayer').value;
  const positionPlayer = document.getElementById('PositionPlayer').value;
  const nationality = document.getElementById('nationalityPlayer').value;
  const nationalFlag = document.getElementById('DrapeuNational').value; 
  const club = document.getElementById('clubPlayer').value;
  const logoClub = document.getElementById('logoClub').value; 
  const rating = document.getElementById('ratingPlayer').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value;


// objet pour local storage


  const lesDonnerDeJoueur = {
    playerName,
    photoPlayer,
    positionPlayer,
    nationality,
    nationalFlag,
    club,
    logoClub,
    rating,
    stats: {
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical,
      diving,
      handling,
      kicking,
      reflexes,
      speed,
      positioning
    }
  };
  
   // Verifier et ce que la position deja existe 
   if (formation[positionPlayer] === null) {
    
    formation[positionPlayer] = lesDonnerDeJoueur;

 



  let card;
  switch (positionPlayer) {
    case "GK": card = document.getElementById('cardrush11gk'); break;
    case "RB": card = document.getElementById('cardrush10rb'); break;
    case "LB": card = document.getElementById('cardrush7lb'); break;
    case "CB1": card = document.getElementById('cardrush9cb1'); break;
    case "CB2": card = document.getElementById('cardrush8cb2'); break;
    case "SA": card = document.getElementById('cardrush2sa'); break;
    case "LW": card = document.getElementById('cardrush1lw'); break;
    case "RW": card = document.getElementById('cardrush3rw'); break;
    case "CM": card = document.getElementById('cardrush5cm'); break;
    case "MR": card = document.getElementById('cardrush6mr'); break;
    case "ML": card = document.getElementById('cardrush4ml'); break;
    default:
      alert("Position non reconnue !");
      return;
  }

  if (!card) {
    console.error("Aucune carte disponible pour cette position !");
    return;
  }

 
  card.querySelector('.nameGK, .nameRB, .nameCB1, .nameCB2, .nameLB, .nameCM, .nameMR, .nameML, .nameLW, .nameRW, .nameSA').textContent = playerName;
  card.querySelector('.RatingGK, .RatingRB, .RatingCB1, .RatingCB2, .RatingLB, .RatingCM, .RatingMR, .RatingML, .RatingLW, .RatingRW, .RatingSA').textContent = rating;
  card.querySelector('.valuePositionGK, .valuePositionRB, .valuePositionCB1, .valuePositionCB2, .valuePositionLB, .valuePositionCM, .valuePositionMR, .valuePositionML, .valuePositionLW, .valuePositionRW, .valuePositionSA').textContent = positionPlayer;



const imgDiv = card.querySelector('.img');
if (imgDiv) {
  imgDiv.innerHTML = `<img src="${photoPlayer}" alt="Photo de ${playerName}" style="width: 100%; height: auto;">`;
}


  
  const flagDiv = card.querySelector('.DrapeuNational'); 
  if (flagDiv) {
    flagDiv.innerHTML = `<img src="${nationalFlag}" alt="Drapeau de ${nationality}" style="width: 100%; height: 100%;">`;
  }
  

  const logoDiv = card.querySelector('.logoClub'); 
  if (logoDiv) {
    logoDiv.innerHTML = `<img src="${logoClub}" alt="Logo du club ${club}" style="width: 100%; height: 100%;">`;
  }
 
  const statsContainer = card.querySelector('.statiqueValueGK, .statiqueValueRB, .statiqueValueCB1, .statiqueValueCB2, .statiqueValueLB, .statiqueValueCM, .statiqueValueMR, .statiqueValueML, .statiqueValueLW, .statiqueValueRW, .statiqueValueSA');
  
  if (positionPlayer === "GK") {
    statsContainer.querySelector('.diving').textContent = diving;
    statsContainer.querySelector('.handling').textContent = handling;
    statsContainer.querySelector('.kicking').textContent = kicking;
    statsContainer.querySelector('.reflexes').textContent = reflexes;
    statsContainer.querySelector('.speed').textContent = speed;
    statsContainer.querySelector('.positioning').textContent = positioning;
  } else {
    statsContainer.querySelector('.pace').textContent = pace;
    statsContainer.querySelector('.shooting').textContent = shooting;
    statsContainer.querySelector('.passing').textContent = passing;
    statsContainer.querySelector('.dribbling').textContent = dribbling;
    statsContainer.querySelector('.defending').textContent = defending;
    statsContainer.querySelector('.physical').textContent = physical;
  }
} else {
    reserve.push(lesDonnerDeJoueur);
    alert("ajouter a liste de reserve")
  }
} else {
  alert("Remplir les champs qui vide");
} 



}

// fonction de validation de formulaire 
function validationForme(){
  
    let valid = true;

    const playerName = document.getElementById('playerName').value;
    const nameRegex = /^[a-zA-Z\s'-]{1,20}$/;
    if (!nameRegex.test(playerName) || playerName === "") {
       
        document.getElementById("nameError").classList.remove("hidden");
       valid =false;
    } else {
      document.getElementById("nameError").classList.add("hidden");
    }
    const photoPlayer = document.getElementById('photoPlayer').value;

    const UrlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    if(!UrlRegex.test(photoPlayer) || photoPlayer===""){
      document.getElementById("photoError").classList.remove("hidden");
      valid= false;
    } else{
      document.getElementById("photoError").classList.add("hidden");
    }

   const positionPlayer = document.getElementById("PositionPlayer").value;
   if(positionPlayer === ""){
    document.getElementById("positionError").classList.remove("hidden");
   valid=false;
  }else{
    document.getElementById("positionError").classList.add("hidden");
  }

  const nationalityPlayer = document.getElementById("nationalityPlayer").value;
  if(nationalityPlayer === ""){
    document.getElementById("nationalityPlayerError").classList.remove("hidden");
    valid = false ;
  }else {
    document.getElementById("nationalityPlayerError").classList.add("hidden");
  }

  const DrapeuNational = document.getElementById("DrapeuNational").value;
  if(!UrlRegex.test(DrapeuNational) || DrapeuNational === ""){
    document.getElementById("DrapeuPlayerError").classList.remove("hidden");
    valid = false ;
  }else {
    document.getElementById("DrapeuPlayerError").classList.add("hidden");
  }

  const clubPlayer = document.getElementById("clubPlayer").value;
  if(clubPlayer === ""){
    document.getElementById("ClubPlayerError").classList.remove("hidden");
    valid = false ;
  }else{
    document.getElementById("ClubPlayerError").classList.add("hidden");
  }
  


  const logoCLubPlayer = document.getElementById("logoClub").value;
if(!UrlRegex.test(logoCLubPlayer) || logoCLubPlayer === ""){
  document.getElementById("LogoPlayerError").classList.remove("hidden");
  valid = false ;
}else{
  document.getElementById("LogoPlayerError").classList.add("hidden");
}



  const ratingPlayer= document.getElementById("ratingPlayer").value;
  const NomberRegex = /^([0-9]){2}$/
  if(!NomberRegex.test(ratingPlayer)){
    document.getElementById("RatingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("RatingPlayerError").classList.add("hidden");
  }
 
   
  if(positionPlayer === "GK"){ 
  const diving = document.getElementById("diving").value;
  if(!NomberRegex.test(diving) || diving===""){
    document.getElementById("DivingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("DivingPlayerError").classList.add("hidden");
  }

  const handling = document.getElementById("handling").value;
  if(!NomberRegex.test(handling) || handling===""){
    document.getElementById("HandlingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("HandlingPlayerError").classList.add("hidden");
  }


  const kicking = document.getElementById("kicking").value;
  if(!NomberRegex.test(kicking) || kicking===""){
    document.getElementById("KickingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("KickingPlayerError").classList.add("hidden");
  }

  const reflexes = document.getElementById("reflexes").value;
  if(!NomberRegex.test(reflexes) || reflexes===""){
    document.getElementById("ReflexesPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("ReflexesPlayerError").classList.add("hidden");
  }

  const speed = document.getElementById("speed").value;
  if(!NomberRegex.test(speed) || speed===""){
    document.getElementById("SpeedPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("SpeedPlayerError").classList.add("hidden");
  }

  const positioning = document.getElementById("positioning").value;
  if(!NomberRegex.test(positioning) || positioning===""){
    document.getElementById("PositiongPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("PositiongPlayerError").classList.add("hidden");
  }
} else {
  
  const pace = document.getElementById("pace").value;
  if(!NomberRegex.test(pace) || pace==="" ){
    document.getElementById("PacePlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("PacePlayerError").classList.add("hidden");
  }

  const shooting = document.getElementById("shooting").value;
  if(!NomberRegex.test(shooting) || shooting==="" ){
    document.getElementById("ShootingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("ShootingPlayerError").classList.add("hidden");
  }


  const passing = document.getElementById("passing").value;
  if(!NomberRegex.test(passing)|| passing===""){
    document.getElementById("PassingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("PassingPlayerError").classList.add("hidden");
  }


  const dribbling = document.getElementById("dribbling").value;
  if(!NomberRegex.test(dribbling) || dribbling===""){
    document.getElementById("DribblingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("DribblingPlayerError").classList.add("hidden");
  }


  const defending = document.getElementById("defending").value;
  if(!NomberRegex.test(defending) || defending===""){
    document.getElementById("DefendingPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("DefendingPlayerError").classList.add("hidden");
  }


  const physical = document.getElementById("physical").value;
  if(!NomberRegex.test(physical) || physical===""){
    document.getElementById("PhysicalPlayerError").classList.remove("hidden");
  valid = false ;
  }else{
    document.getElementById("PhysicalPlayerError").classList.add("hidden");
  }
}



    return valid;

}


// fonction pour ajouter des joueur en changements 
function AjouterJoueurChangement(){
   
if(validationForme()){ 
  const playerName = document.getElementById('playerName').value;
  const photoPlayer = document.getElementById('photoPlayer').value;
  const positionPlayer = document.getElementById('PositionPlayer').value;
  const nationality = document.getElementById('nationalityPlayer').value;
  const nationalFlag = document.getElementById('DrapeuNational').value; 
  const club = document.getElementById('clubPlayer').value;
  const logoClub = document.getElementById('logoClub').value; 
  const rating = document.getElementById('ratingPlayer').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value;

const lesDonnerDeJoueurChangement ={

    playerName,
    photoPlayer,
    positionPlayer,
    nationality,
    nationalFlag,
    club,
    logoClub,
    rating,
    stats: {
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical,
      diving,
      handling,
      kicking,
      reflexes,
      speed,
      positioning
    }
  
};

localStorage.setItem(`player_${positionPlayer}`, JSON.stringify(lesDonnerDeJoueurChangement));


let card;
switch (positionPlayer) {
  case "GK": card = document.getElementById('cardrushChange11gk'); break;
  case "RB": card = document.getElementById('cardrushChange10rb'); break;
  case "LB": card = document.getElementById('cardrushChange7lb'); break;
  case "CB1": card = document.getElementById('cardrushChange9cb1'); break;
  case "CB2": card = document.getElementById('cardrushChange8cb2'); break;
  case "SA": card = document.getElementById('cardrushChange2sa'); break;
  case "LW": card = document.getElementById('cardrushChange1lw'); break;
  case "RW": card = document.getElementById('cardrushChange3rw'); break;
  case "CM": card = document.getElementById('cardrushChange5cm'); break;
  case "MR": card = document.getElementById('cardrushChange6mr'); break;
  case "ML": card = document.getElementById('cardrushChange4ml'); break;
  default:
    alert("Position non reconnue !");
    return;
}

if (!card) {
  console.error("Aucune carte disponible pour cette position !");
  return;
}


card.querySelector('.nameGK, .nameRB, .nameCB1, .nameCB2, .nameLB, .nameCM, .nameMR, .nameML, .nameLW, .nameRW, .nameSA').textContent = playerName;
card.querySelector('.RatingGK, .RatingRB, .RatingCB1, .RatingCB2, .RatingLB, .RatingCM, .RatingMR, .RatingML, .RatingLW, .RatingRW, .RatingSA').textContent = rating;
card.querySelector('.valuePositionGK, .valuePositionRB, .valuePositionCB1, .valuePositionCB2, .valuePositionLB, .valuePositionCM, .valuePositionMR, .valuePositionML, .valuePositionLW, .valuePositionRW, .valuePositionSA').textContent = positionPlayer;
//photo de joueur

const imgDiv = card.querySelector('.img');
if (imgDiv) {
imgDiv.innerHTML = `<img src="${photoPlayer}" alt="Photo de ${playerName}" style="width: 100%; height: auto;">`;
}

//flag nationale
const flagDiv = card.querySelector('.DrapeuNational'); 
if (flagDiv) {
  flagDiv.innerHTML = `<img src="${nationalFlag}" alt="Drapeau de ${nationality}" style="width: 100%; height: 100%;">`;
}


//logo du club
const logoDiv = card.querySelector('.logoClub'); 
if (logoDiv) {
  logoDiv.innerHTML = `<img src="${logoClub}" alt="Logo du club ${club}" style="width: 100%; height: 100%;">`;
}

const statsContainer = card.querySelector('.statiqueValueGK, .statiqueValueRB, .statiqueValueCB1, .statiqueValueCB2, .statiqueValueLB, .statiqueValueCM, .statiqueValueMR, .statiqueValueML, .statiqueValueLW, .statiqueValueRW, .statiqueValueSA');

if (positionPlayer === "GK") {
  statsContainer.querySelector('.diving').textContent = diving;
  statsContainer.querySelector('.handling').textContent = handling;
  statsContainer.querySelector('.kicking').textContent = kicking;
  statsContainer.querySelector('.reflexes').textContent = reflexes;
  statsContainer.querySelector('.speed').textContent = speed;
  statsContainer.querySelector('.positioning').textContent = positioning;
} else {
  statsContainer.querySelector('.pace').textContent = pace;
  statsContainer.querySelector('.shooting').textContent = shooting;
  statsContainer.querySelector('.passing').textContent = passing;
  statsContainer.querySelector('.dribbling').textContent = dribbling;
  statsContainer.querySelector('.defending').textContent = defending;
  statsContainer.querySelector('.physical').textContent = physical;
}
}
}

// fonction pour changer le formation 
function changerFormation() {
  const formation = document.getElementById("formation").value;
  const attaquantSection = document.querySelector(".Attaquant");
  const milieuSection = document.querySelector(".Milieu");
  const cartMrMilieu = document.getElementById('cardrush6mr');
  const cartSaAttaquant =document.getElementById('cardrush2sa');
  const cartRwAttaquant =document.getElementById('cardrush3rw');


  if (formation === "4-4-2") {
    const cardToMove = document.getElementById("cardrush1lw"); 

    if (cardToMove) {
      milieuSection.appendChild(cardToMove); 
      milieuSection.classList.add('TroisQuatre'); 
      cartMrMilieu.classList.add('TroisQuatreMR'); 
      cartSaAttaquant.classList.add('TroisQuatreSA'); 
      cartRwAttaquant.classList.add('TroisQuatreRW');
    }
  } else if (formation === "4-3-3") {
    const cardToMoveBack = document.getElementById("cardrush1lw");

    if (cardToMoveBack) {
      attaquantSection.appendChild(cardToMoveBack);
      milieuSection.classList.remove('TroisQuatre');
      cartMrMilieu.classList.remove('TroisQuatreMR');
      cartSaAttaquant.classList.remove('TroisQuatreSA');
      cartRwAttaquant.classList.remove('TroisQuatreRW');   
    }
  }
}

// function pour change les joueures du terain a changement
function changeDeJoueure() {
  const selectElement = document.getElementById('changeDeJoueure');
  const selectPosition = selectElement.value;

  const goalkeeperSection = document.querySelector(".goalkeeper");
  const defenseurSection = document.querySelector(".Defenseur");
  const milieuSection = document.querySelector(".Milieu");
  const attaquantSection = document.querySelector(".Attaquant");

 // les joueur qui dans le terain
const carteGK = document.getElementById('cardrush11gk'); 
const carteRB = document.getElementById('cardrush10rb'); 
const carteLB = document.getElementById('cardrush7lb'); 
const carteCB1 = document.getElementById('cardrush9cb1'); 
const carteCB2 = document.getElementById('cardrush8cb2'); 
const carteSA = document.getElementById('cardrush2sa'); 
const carteLW  = document.getElementById('cardrush1lw'); 
const carteRW = document.getElementById('cardrush3rw'); 
const carteCM  = document.getElementById('cardrush5cm'); 
const carteMR = document.getElementById('cardrush6mr'); 
const carteML  = document.getElementById('cardrush4ml'); 

  const changementsSection = document.querySelector(".container-Changemants"); 

  //   // les joueur qui dans le changements 
const carteChangeGK = document.getElementById('cardrushChange11gk'); 
const carteChangeRB = document.getElementById('cardrushChange10rb'); 
const carteChangeLB = document.getElementById('cardrushChange7lb'); 
const carteChangeCB1 = document.getElementById('cardrushChange9cb1'); 
const carteChangeCB2 = document.getElementById('cardrushChange8cb2'); 
const carteChangeSA = document.getElementById('cardrushChange2sa'); 
const carteChangeLW = document.getElementById('cardrushChange1lw'); 
const carteChangeRW = document.getElementById('cardrushChange3rw'); 
const carteChangeCM = document.getElementById('cardrushChange5cm'); 
const carteChangeMR = document.getElementById('cardrushChange6mr'); 
const carteChangeML = document.getElementById('cardrushChange4ml');
 
  if (selectPosition === "GK") {
    const terrainCard = carteGK;
    const changeCard = carteChangeGK;

    
    if (terrainCard.parentElement === goalkeeperSection) {
      changementsSection.appendChild(terrainCard);
      goalkeeperSection.appendChild(changeCard);
    } else {
      goalkeeperSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "RB") {
    const terrainCard = carteRB;
    const changeCard = carteChangeRB;

    if (terrainCard.parentElement === defenseurSection) {
      changementsSection.appendChild(terrainCard);
      defenseurSection.appendChild(changeCard);
    } else {
      defenseurSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "LB") {
    const terrainCard = carteLB;
    const changeCard = carteChangeLB ;

    if (terrainCard.parentElement === defenseurSection) {
      changementsSection.appendChild(terrainCard);
      defenseurSection.appendChild(changeCard);
    } else {
      defenseurSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "CB1") {
    const terrainCard = carteCB1;
    const changeCard = carteChangeCB1;

    if (terrainCard.parentElement === defenseurSection) {
      changementsSection.appendChild(terrainCard);
      defenseurSection.appendChild(changeCard);
    } else {
      defenseurSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "CB2") {
    const terrainCard = carteCB2;
    const changeCard =carteChangeCB2;

    if (terrainCard.parentElement === defenseurSection) {
      changementsSection.appendChild(terrainCard);
      defenseurSection.appendChild(changeCard);
    } else {
      defenseurSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "CM") {
    const terrainCard = carteCM;
    const changeCard =carteChangeCM;

    if (terrainCard.parentElement === milieuSection) {
      changementsSection.appendChild(terrainCard);
      milieuSection.appendChild(changeCard);
    } else {
      milieuSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "MR") {
    const terrainCard = carteMR;
    const changeCard =carteChangeMR;

    if (terrainCard.parentElement === milieuSection) {
      changementsSection.appendChild(terrainCard);
      milieuSection.appendChild(changeCard);
    } else {
      milieuSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "ML") {
    const terrainCard = carteML;
    const changeCard =carteChangeML;

    if (terrainCard.parentElement === milieuSection) {
      changementsSection.appendChild(terrainCard);
      milieuSection.appendChild(changeCard);
    } else {
      milieuSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "LW") {
    const terrainCard = carteLW;
    const changeCard = carteChangeLW;

    if (terrainCard.parentElement === attaquantSection) {
      changementsSection.appendChild(terrainCard);
      attaquantSection.appendChild(changeCard);
    } else {
      attaquantSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "RW") {
    const terrainCard = carteRW;
    const changeCard = carteChangeRW;

    if (terrainCard.parentElement === attaquantSection) {
      changementsSection.appendChild(terrainCard);
      attaquantSection.appendChild(changeCard);
    } else {
      attaquantSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  } else if (selectPosition === "SA") {
    const terrainCard = carteSA;
    const changeCard = carteChangeSA;

    if (terrainCard.parentElement === attaquantSection) {
      changementsSection.appendChild(terrainCard);
      attaquantSection.appendChild(changeCard);
    } else {
      attaquantSection.appendChild(terrainCard);
      changementsSection.appendChild(changeCard);
    }
  }
  selectElement.value = "";
}

// pour recuperer les donner de joueur ajouter 
function ModifierJoueur() {
  if(validationForme()){ 
  const position = document.getElementById('ModifierJoueur').value;

  const formulaire = document.getElementById('formulaireJoueur');
  if (!position) {
    formulaire.style.display = 'none';
    return;
  }
  const joueur = formation[position];
  if (joueur) {
    

    document.getElementById('playerModifierName').value = joueur.playerName ;
    document.getElementById('photoModifierPlayer').value = joueur.photoPlayer ;
    document.getElementById('nationalityModifierPlayer').value = joueur.nationality ;
    document.getElementById('DrapeuModifireNational').value = joueur.nationalFlag ;
    document.getElementById('clubModifierPlayer').value = joueur.club ;
    document.getElementById('logoModifierClub').value = joueur.logoClub ;
    document.getElementById('ratingModifierPlayer').value = joueur.rating ;
  } else {
    document.getElementById('playerName').value = '';
    document.getElementById('photoPlayer').value = '';
    document.getElementById('nationalityPlayer').value = '';
    document.getElementById('DrapeuNational').value = '';
    document.getElementById('clubPlayer').value = '';
    document.getElementById('logoClub').value = '';
    document.getElementById('ratingPlayer').value = '';
  }

  formulaire.style.display = 'block';
  }
}

// pour modifier les donner 
function ajouterLesModification() {
  if(validationForme()){ 
  const selectPosition = document.getElementById('ModifierJoueur');
  const position = selectPosition.value;
  if (!position) {
    alert("Veuillez choisir une position.");
    return;
  }

  const playerName = document.getElementById('playerModifierName').value;
  const photoPlayer = document.getElementById('photoModifierPlayer').value;
  const nationality = document.getElementById('nationalityModifierPlayer').value;
  const nationalFlag = document.getElementById('DrapeuModifireNational').value;
  const club = document.getElementById('clubModifierPlayer').value;
  const logoClub = document.getElementById('logoModifierClub').value;
  const rating = document.getElementById('ratingModifierPlayer').value;

  formation[position] = {
    playerName,
    photoPlayer,
    nationality,
    nationalFlag,
    club,
    logoClub,
    rating
  };

  let card;
  switch (position) {
    case "GK": card = document.getElementById('cardrush11gk'); break;
    case "RB": card = document.getElementById('cardrush10rb'); break;
    case "LB": card = document.getElementById('cardrush7lb'); break;
    case "CB1": card = document.getElementById('cardrush9cb1'); break;
    case "CB2": card = document.getElementById('cardrush8cb2'); break;
    case "SA": card = document.getElementById('cardrush2sa'); break;
    case "LW": card = document.getElementById('cardrush1lw'); break;
    case "RW": card = document.getElementById('cardrush3rw'); break;
    case "CM": card = document.getElementById('cardrush5cm'); break;
    case "MR": card = document.getElementById('cardrush6mr'); break;
    case "ML": card = document.getElementById('cardrush4ml'); break;
    default:
      return;
  }

 
  card.querySelector('.nameGK, .nameRB, .nameCB1, .nameCB2, .nameLB, .nameCM, .nameMR, .nameML, .nameLW, .nameRW, .nameSA').textContent = playerName;
  card.querySelector('.RatingGK, .RatingRB, .RatingCB1, .RatingCB2, .RatingLB, .RatingCM, .RatingMR, .RatingML, .RatingLW, .RatingRW, .RatingSA').textContent = rating;
  card.querySelector('.valuePositionGK, .valuePositionRB, .valuePositionCB1, .valuePositionCB2, .valuePositionLB, .valuePositionCM, .valuePositionMR, .valuePositionML, .valuePositionLW, .valuePositionRW, .valuePositionSA').textContent = positionPlayer;



const imgDiv = card.querySelector('.img');
if (imgDiv) {
  imgDiv.innerHTML = `<img src="${photoPlayer}" alt="Photo de ${playerName}" style="width: 100%; height: auto;">`;
}

  
  const flagDiv = card.querySelector('.DrapeuNational'); 
  if (flagDiv) {
    flagDiv.innerHTML = `<img src="${nationalFlag}" alt="Drapeau de ${nationality}" style="width: 100%; height: 100%;">`;
  }
  

  const logoDiv = card.querySelector('.logoClub'); 
  if (logoDiv) {
    logoDiv.innerHTML = `<img src="${logoClub}" alt="Logo du club ${club}" style="width: 100%; height: 100%;">`;
  }
 

  alert("Les données du joueur ont été mises à jour avec succès !");
}
    selectPosition.value=""
}

// pour supprimer 
function SupprimerJoueur() {
 
  const selectElement = document.getElementById("SupprimerJoueur");
  const position = selectElement.value; 

  
  if (!position) {
    alert("Veuillez sélectionner une position.");
    return;
  }

 
  formation[position] = null;


  let card;
  switch (position) {
    case "GK": card = document.getElementById('cardrush11gk'); break;
    case "RB": card = document.getElementById('cardrush10rb'); break;
    case "LB": card = document.getElementById('cardrush7lb'); break;
    case "CB1": card = document.getElementById('cardrush9cb1'); break;
    case "CB2": card = document.getElementById('cardrush8cb2'); break;
    case "SA": card = document.getElementById('cardrush2sa'); break;
    case "LW": card = document.getElementById('cardrush1lw'); break;
    case "RW": card = document.getElementById('cardrush3rw'); break;
    case "CM": card = document.getElementById('cardrush5cm'); break;
    case "MR": card = document.getElementById('cardrush6mr'); break;
    case "ML": card = document.getElementById('cardrush4ml'); break;
    default:
      alert("Position non reconnue !");
      return;
  }


  if (card) {
    
    card.querySelector('.nameGK, .nameRB, .nameCB1, .nameCB2, .nameLB, .nameCM, .nameMR, .nameML, .nameLW, .nameRW, .nameSA').textContent = '';
    card.querySelector('.RatingGK, .RatingRB, .RatingCB1, .RatingCB2, .RatingLB, .RatingCM, .RatingMR, .RatingML, .RatingLW, .RatingRW, .RatingSA').textContent = '';
    card.querySelector('.valuePositionGK, .valuePositionRB, .valuePositionCB1, .valuePositionCB2, .valuePositionLB, .valuePositionCM, .valuePositionMR, .valuePositionML, .valuePositionLW, .valuePositionRW, .valuePositionSA').textContent = '';
    card.querySelector('.img').innerHTML = ''; 
    card.querySelector('.DrapeuNational').innerHTML = ''; 
    card.querySelector('.logoClub').innerHTML = ''; 
    card.querySelector('.statiqueValueGK, .statiqueValueRB, .statiqueValueCB1, .statiqueValueCB2, .statiqueValueLB, .statiqueValueCM, .statiqueValueMR, .statiqueValueML, .statiqueValueLW, .statiqueValueRW, .statiqueValueSA').textContent = ''; 
  }

 
}


forme.reset();
