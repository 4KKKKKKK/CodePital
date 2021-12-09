import {  } from "module";

class Patient{
    constructor(nom, maladie, argent, poche, etatSante, ){
        this.nom = nom,
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.goTo = () => {

        }
        this.takeCare = () => {
            
        }
        this.paye = () => {
            
        }
    }
}

class Lieu{
    constructor(nom, personne){
        this.nom = nom;
        this.personne = personne;
    }
}

class Traitement{
    constructor(soin, prix){
        this.soin = soin;
        this.prix = prix;
    }
}