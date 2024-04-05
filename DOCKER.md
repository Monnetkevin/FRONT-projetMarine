# Memo DOCKER

Création du Dockerfile

```
# Utilise une image Node.js comme base
FROM node:18

# Définit le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie package.json et package-lock.json
COPY package.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Expose le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
```

Pour construire l'image, vous exécutez la commande suivante dans le répertoire contenant le Dockerfile :

`docker build -t nom_image:tag .`

ex :

`docker build -t mon_serveur:1.0 .`

> -t nom_image:tag : spécifie le nom et la version de l'image. Par exemple, nom_image peut être le nom de votre application, et tag peut être une version spécifique.

> . : indique le chemin vers le répertoire contenant le Dockerfile. Dans cet exemple, il s'agit du répertoire actuel.

## Voir les images construites

Pour afficher les images

`docker images`

Pour afficher toutes les informations des images

`docker image ls`

Pour afficher uniquement les id des images

`docker images -q`

## Lancer une image

`docker run -d -p 8080:3000 nom_image:tag`

> -d : Cette option permet de détacher le conteneur en arrière-plan. Cela signifie que le conteneur s'exécute en tant que processus distinct de votre terminal.

> -p 8080:3000 : Cette option spécifie le mapping de ports entre le port de votre machine hôte (8080 dans cet exemple) et le port exposé dans le conteneur Docker (3000 dans notre exemple). Cela permet à votre application d'être accessible depuis votre machine hôte via le port 8080.

> nom_image:tag : Ceci est le nom et la version de l'image Docker que vous souhaitez exécuter.

Pour nommer un conteneur Docker lors de sa création, vous pouvez utiliser l'option --name lors de l'exécution de la commande docker run. Voici comment vous pouvez le faire :

`docker run -d --name mon_conteneur nom_image:tag`

Une fois que vous avez exécuté cette commande, votre conteneur Docker démarrera et votre application sera accessible à l'adresse http://localhost:8080 dans votre navigateur. Assurez-vous que le port spécifié dans le Dockerfile (dans cet exemple, le port 3000) correspond au port que votre application utilise réellement.

` docker run -d -p 3000:3000 nom_image:tag`

Si vous voulez écouter directement à l'adresse localhost:3000

## Afficher containers en cours d'éxécution

`docker ps`

Si vous souhaitez également voir les conteneurs qui ne sont pas en cours d'exécution

`docker ps -a`

afficher uniquement les id des containers

`docker ps -q`

## Arreter un container

`docker stop <ID ou nom du conteneur>`

exemple pour un container qui s'appelle mon_image

`docker stop mon_image`

exemple pour un container qui as l'id 03de1c15e203

`docker stop 03de1c15e203`
