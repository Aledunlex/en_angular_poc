# POC Angular - affichage simple de données

## Contexte

Projet minimaliste développé pour prendre en main Typescript et Angular et afficher des données fournies par une [API de l'Education Nationale](https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-remplacement-premier-degre/records?limit=20).

Les données affichées correspondent aux taux moyens d'efficacité du remplacement et de la suppléance dans le premier degré par département et par académie, servies au format JSON.

## Visualisation de la page générée

Le projet est déployé avec Netlify 

👉 [Voir la démo en ligne ici](https://poc-projet-angular-en.netlify.app/)

## Fonctionnalités

- Récupération des 20 premières entrées de l'API via `HttpClient`
- Affichage des données dans une table stylisée avec `Bootstrap`
- Composants `Angular` de base (App + tableau)
- *Design* simple mais lisible

## Pile technologique

- Angular : 17.3
- Typescript : 5.4
- Bootstrap : 5.3
- Netlify (déploiement et hébergement)

# Lancement en local (généré par Angular CLI)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
