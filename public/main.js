import {
    docteur,
    pharmacie,
    patients
} from "./module/instances.js";

patients.forEach(element => {
    console.log(`Et voici l'histoire de ${element.nom} !!!`);
    console.log(` `);

    docteur.patientIn(element);
    docteur.diagnostique(element);
    element.takeCare(docteur);
    docteur.patientOut(element);
    element.goTo(docteur.salleDAttente, pharmacie)
    pharmacie.vendreTraitement(element);
    console.log(` `);
});