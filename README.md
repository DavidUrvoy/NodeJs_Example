Projet exemple de microservices node en mono repo orienté architecture hexagonale.

Pour chaque service :
- domain: le coeur de l'appli, ne contient que la logique métier, et toute la logique métier.
- api : Application Provider Interface. Contient les modules correspondant aux points d'entrée du service (REST API, Consumer de messaging, etc.).
- spi : Service Provider Interface. Contient les modules fournissant les services techniques du microservice, via l'implémentation d'interface `Port` définies dans le domain (Base de Données, Producer de messaging, REST Client, etc.).
- boot : module contenant le point d'entrée (main) du service. Fournit la configuration, l'injection des dépendances, et permet la modularisation de l'application au runtime.

# Comment lancer l'application

- Démarrer les conteneurs des bases de données : `docker compose up -d user-database order-database`
- Installer le projet : `pnpm i`
- Démarrer un microservice : depuis la racine d'un MS (./user-service ou ./order-service) : `pnpm dev`
