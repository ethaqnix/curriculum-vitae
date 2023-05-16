# customer-ppa-front-match

## Dev documentation

### Install app

You have to use pnpm version 7.18.2

```
pnpm install
```

### Run app

```
pnpm dev
```

### Link local repos

Permit to run with the shared-front-core aside without releasing it

```
pnpm link ../shared-front-core

pnpm unlink
```

Permit to run with the shared-design-system aside without releasing it

```
pnpm link ../shared-design-system

pnpm unlink
```

### Local env variable override

If you wish to use local runtime env variables, create a `config/.env.local` file with, sample content :

```
cat <<EOF > config/.env.local
MAPBOX_TOKEN=
APM_URL=
GOOGLE_TAG_MANAGER_KEY=
FLAGSMITH_ENV_ID=
NODE_ENV=
ENV=
EOF
```

> Warning: ENV variable is `local` because `dev` is for the AWS `development` environment.

## développements en cours

-   [En cours] remplissage de contenu
-   [En cours] création des centre d'intérêts et des réseaux
-   gestion du responsive
-   ajouter un bouton download pour télécharger le CV en pdf
-   faire un cv pdf :'(
-   chercher un taff
