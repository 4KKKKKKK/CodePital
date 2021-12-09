import {docteur,pharmacie,patients} from "./module/instances.js";

patients.forEach(e => {
    console.log(`Story of ${e.nom}`);
    console.log(` `);
    
    docteur.patientIn(e);
    docteur.diagnostique(e);
    e.takeCare(docteur);
    docteur.patientOut(e);
    e.goTo(docteur.salleDAttente,pharmacie)
    pharmacie.vendreTraitement(e);
    console.log(` `);
});