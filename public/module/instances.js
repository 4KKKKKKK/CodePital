import {
    Lieu,
    Patient,
    Traitement
} from "./class";


// ******************* Instances des class *******************

//personne
let marcus = new Patient("Marcus", "mal identé", 100, [], "malade");
let optimus = new Patient("Optimus", "unsave", 200, [], "malade");
let sangoku = new Patient("Sangoku", "404", 80, [], "malade");
let darthvader = new Patient("DartVader", "asthmatique", 110, [], "malade");
let semicolon = new Patient("SemiColon", "syntax", 60, [], "malade");

//Traitement
let ctrl = new Traitement("Ctrl+Maj+F", 60);
let save = new Traitement("saveOnFocusChange", 100);
let check = new Traitement("CheckLinkRelation", 35);
let vento = new Traitement("Ventoline", 40);
let fdouze = new Traitement("F12+Doc", 20);

//Lieu
let pharmacie = new Lieu("Pharmacie", []);
let cimetiere = new Lieu("Cimetiere", []);

pharmacie.argent = 300;
pharmacie.vendreTraitement = (malade) => {
    if (malade.argent >= malade.traitement.prix) {
        malade.etat = "Bonne santé";
        malade.paye(pharmacie);
        console.log(`${malade.nom} est sauvé !`);

    } else {
        malade.etat = "dead man";
        cimetiere.personne.push(malade);
        pharmacie.personne.splice(pharmacie.personne.indexOf(malade));
        console.log(`${malade.nom} n'avait pas assez d'argent du coup il est mort et emmener au ciùtière`);
    }
}

//Doc (objet)
let docteur = {
    nom: "Dr. Geza",
    portefeuille: 20000,
    salleDAttente: [],
    cabinet: [],
    diagnostique(malade) {
        switch (malade.maladie) {
            case "mal indenté":
                malade.traitement = ctrl
                break;
            case "unsave":
                malade.traitement = save
                break;
            case "404":
                malade.traitement = check
                break;
            case "asthmatique":
                malade.traitement = vento
                break;
            case "syntax":
                malade.traitement = fdouze
                break;
        }
        console.log(`${malade.nom} est malade il a ${malade.maladie}`);
    },
    patientIn(malade) {
        this.cabinet.push(malade);
        this.salleDAttente.personne.splice(this.salleDAttente.personne.indexOf(malade.nom), 1);
        malade.etat = 'Etat de traitement';
        console.log(`${malade.nom} entre dans le cabinet.`)
    },
    patienOut(malade) {
        this.salleDAttente.personne.push(malade);
        this.cabinet.splice(this.cabinet.indexOf(malade));
        console.log(`${malade.nom} sort du cabinet.`)
    }
}

docteur.salleDAttente[marcus, optimus, sangoku, darthvader, semicolon];
let patients = [marcus, optimus, sangoku, darthvader, semicolon];

export {docteur, pharmacie, cimetiere, marcus, optimus, patients}