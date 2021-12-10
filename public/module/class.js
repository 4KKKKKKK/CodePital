class Patients {
    constructor(nom, maladie, argent, poche, etat) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = [];
        this.etat = etat;
        this.goTo = (depart, destination) => {
            destination.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this));
            console.log(`${this.nom} sort du cabinet par la ${depart.nom} vers ${destination.nom}`);
        }
        this.takeCare = (docteur) => {
            this.argent -= 50;
            docteur.argent += 50;
            console.log(`${this.nom} paye 50bal au ${docteur.nom} pour avoir son traitement.`);
            console.log(`${this.nom} met le traitement dans sa poche`);
        }
        this.paye = (personnePayee) => {
            this.argent -= this.traitement.prix;
            personnePayee.argent += this.traitement.prix;
        }
    }
}

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Traitement {
    constructor(soin, prix) {
        this.soin = soin;
        this.prix = prix;
    }
}

export {
    Patients,
    Lieu,
    Traitement
};