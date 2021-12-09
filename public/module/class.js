//Déclaration des class que l'on va utilisé
class Patient {
    constructor(nom, maladie, argent, poche, etatSante, ) {
        this.nom = nom,
            this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.goTo = (start, end) => {
            end.personne.push(this);
            start.personne.splice(start.personne.indexOf(this));
            console.log(`${this.nom} va de ${start.nom} vers ${end.nom}`);
        }
        this.takeCare = (docteur) => {
            this.argent -= 50;
            docteur.argent += 50;
            console.log(`${this.nom} paye 50$ au ${docteur.nom}`);
        }
        this.paye = (personnePayee) => {
            this.argent -= this.traitement.prix;
            personnePayee.argent += this.traitement.prix;
        }
    }
}

class Lieu {
    constructor(nom, personne) {
        this.nom = nom;
        this.personne = personne;
    }
}

class Traitement {
    constructor(soin, prix) {
        this.soin = soin;
        this.prix = prix;
    }
}

export {
    Patient,
    Lieu,
    Traitement
};