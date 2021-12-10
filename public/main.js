import {
    docteur,
    chat,
    pharmacie,
    patients
} from "./module/instances.js";

//Déclaration de la boucle forEach pour les patients qui rentrent dans le cabinet
patients.forEach(e => {
    console.log(`Salam les filles je vous présente la chronique : Hbiba ${e.nom} va chez le médecin : `);
    console.log(" ");

    //le patient entre dans le cabinet
    docteur.patientIn(e);

    // chat.miauler(e);

    //le patient est diagnostiqué
    docteur.diagnostique(e);

    //le patient paye
    e.takeCare(docteur);

    //Affiche le contenu de la poche
    console.log(e.poche);
    
    //Le patient sort par la salle d'attente pour allez vers la pharmacie
    docteur.patientOut(e);

    //eL patient sort du cabinet pour aller vers la pharma
    e.goTo(docteur.salleDAttente, pharmacie)
    // console.log(`${e.nom} a donné la prescription qui se trouvait dans sa poche`);
    console.log(e.poche);
        
    //si le patient a assez d'argent pour payer il sera sauvé
    pharmacie.vendreTraitement(e);

    
    console.log(" ");
    console.log(" ");
});