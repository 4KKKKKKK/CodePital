import {
    Lieu,
    Patients,
    Traitement
} from "./class.js";


// // ******************* Instances des class *******************

// Personnes
let marcus = new Patients("Marcus", "Mal indente", 100, [], "malade");
let optimus = new Patients("Optimus", "unsave", 10, [], "malade");
let sangoku = new Patients("Sangoku", "404", 80, [], "malade");
let darthvader = new Patients("DarthVader", "Asthme", 110, [], "malade");
let semicolon = new Patients("SemiColon", "SyntaxError", 60, [], "malade");

// Traitement
let ctrl = new Traitement("ctrl+maj+f", 60);
let save = new Traitement("saveOnFocusChange", 100);
let check = new Traitement("CheckLinkRelation", 35);
let vento = new Traitement("Ventoline", 40);
let fdouze = new Traitement("F12+Doc", 20);


// Lieu
let pharmacie = new Lieu("Pharmacie", []);
let cimetiere = new Lieu("Cimetiere", []);

pharmacie.argent = 300;
pharmacie.vendreTraitement = (malade) => {
    if (malade.argent >= malade.traitement.prix) {
        malade.etat = "Bonne santé";
        malade.paye(pharmacie);
        console.log(`${malade.nom} est sauvé !`);

    } else {
        malade.etat = "mort";
        cimetiere.personnes.push(malade);
        pharmacie.personnes.splice(pharmacie.personnes.indexOf(malade));
        console.log(`${malade.nom} n'a pas assez de poor. Il va donc clamser de sa maladie et on va le sieb lui et sa mère au cimetière (unlucky i guess) ^_^`);
    }
}
// Objets simples

let docteur = {
    nom: "Dr. Geza",
    argent: 2000,
    salleDAttente: {
        nom: "Salle d'attente",
        personnes: []
    },
    cabinet: [],
    diagnostique(malade) {
        switch (malade.maladie) {
            case "Mal indente":
                malade.traitement = ctrl;
                break;
            case "unsave":
                malade.traitement = save;
                break;
            case "404":
                malade.traitement = check;
                break;
            case "Asthme":
                malade.traitement = vento;
                break;
            case "SyntaxError":
                malade.traitement = fdouze;
                break;
        }

        console.log(`${malade.nom} est malade, il est porteur de cette maladie : ${malade.maladie}. Le traîtement est le suivant : ${malade.traitement.soin}`);

    },
    patientIn(malade) {
        this.cabinet.push(malade);
        this.salleDAttente.personnes.splice(this.salleDAttente.personnes.indexOf(malade.nom), 1);
        malade.etat = 'Etat de traitement';
        console.log(`${malade.nom} entre dans le cabinet.`)
    },
    patientOut(malade) {
        this.salleDAttente.personnes.push(malade);
        this.cabinet.splice(this.cabinet.indexOf(malade));
        console.log(`${malade.nom} sort du cabinet.`)
    }
}

docteur.salleDAttente[marcus, optimus, sangoku, darthvader, semicolon];
let patients = [marcus, optimus, sangoku, darthvader, semicolon];

export {
    docteur,
    pharmacie,
    cimetiere,
    marcus,
    optimus,
    patients
}