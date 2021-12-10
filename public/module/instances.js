import {
    Lieu,
    Patients,
    Traitement
} from "./class.js";


// // ******************* Instances des class *******************

// Personnes
let marcus = new Patients("Marcus", "Mal indente", 100, [], "patientdzeb");
let optimus = new Patients("Optimus", "unsave", 10, [], "patientdzeb");
let sangoku = new Patients("Sangoku", "404", 80, [], "patientdzeb");
let darthvader = new Patients("DarthVader", "Asthme", 110, [], "patientdzeb");
let semicolon = new Patients("SemiColon", "SyntaxError", 60, [], "patientdzeb");

// Traitement
let ctrl = new Traitement("ctrl+maj+f", 60);
let save = new Traitement("saveOnFocusChange", 100);
let check = new Traitement("CheckLinkRelation", 35);
let vento = new Traitement("Ventoline", 40);
let fdouze = new Traitement("F12+Doc", 20);


// Lieu
let pharmacie = new Lieu("pharmacie", []);
let cimetiere = new Lieu("cimetiere", []);

pharmacie.vendreTraitement = (patientdzeb) => {
    if (patientdzeb.argent >= patientdzeb.traitement.prix) {
        patientdzeb.etat = "Bonne santé";
        patientdzeb.paye(pharmacie);
        console.log(`${patientdzeb.nom} a khalass le médicaments, il pourra rentré chez lui et prendre ses marmots dans ses bras.`);
        console.log(`Sa poche est pleine`);
        patientdzeb.poche.pop()
    } else {
        patientdzeb.etat = "mort";
        cimetiere.personnes.push(patientdzeb);
        pharmacie.personnes.splice(pharmacie.personnes.indexOf(patientdzeb));
        console.log(`${patientdzeb.nom} n'a pas assez de poor. Il va donc clamser de sa maladie et on va le sieb lui et sa mère au cimetière (unlucky i guess) ^_^`);
    }
}
// Objets simples

let docteur = {
    nom: "Dr. Geza",
    argent: 2000,
    salleDAttente: {
        nom: "salle d'attente",
        personnes: []
    },
    cabinet: [],
    diagnostique(patientdzeb) {
        switch (patientdzeb.maladie) {
            case "Mal indente":
                patientdzeb.traitement = ctrl;
                patientdzeb.poche.push(ctrl)
                break;
            case "unsave":
                patientdzeb.traitement = save;
                patientdzeb.poche.push(save);
                break;
            case "404":
                patientdzeb.traitement = check;
                patientdzeb.poche.push(check)
                break;
            case "Asthme":
                patientdzeb.traitement = vento;
                patientdzeb.poche.push(vento)
                break;
            case "SyntaxError":
                patientdzeb.traitement = fdouze;
                patientdzeb.poche.push(fdouze)
                break;
        }

        console.log(`${patientdzeb.nom} est patientdzeb, il est porteur de cette maladie : ${patientdzeb.maladie}.`);
    },
    patientIn(patientdzeb) {
        this.cabinet.push(patientdzeb);
        this.salleDAttente.personnes.splice(this.salleDAttente.personnes.indexOf(patientdzeb.nom), 1);
        patientdzeb.etat = "État de traitement";
        console.log(`${patientdzeb.nom} entre dans le cabinet par la salle d'attente.`)
    },
    patientOut(patientdzeb) {
        this.salleDAttente.personnes.push(patientdzeb);
        this.cabinet.splice(this.cabinet.indexOf(patientdzeb));
        
    }
}

let chat = {
    nom : "Jazin",
    race : "Sphynx",
    cri : "Fais bellek : Waf Waf !",
    miauler() {
        setInterval(() => {
            alert(this.cri);
            }, 2000);
    }
}
docteur.salleDAttente[marcus, optimus, sangoku, darthvader, semicolon];
let patients = [marcus, optimus, sangoku, darthvader, semicolon];

export {
    docteur,
    chat,
    pharmacie,
    cimetiere,
    marcus,
    optimus,
    patients
}