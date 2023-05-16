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

API_MISTER_TEMP=https://mistertemp-api.sandbox.mistertemp.io/v1
API_MISTER_PROFESSION=https://misterprofession-v2.sandbox.mistertemp.io
API_MISTER_AGENCIES=https://misteragencies.sandbox.mistertemp.io/v1
API_USER_MANAGEMENT=https://auth.sandbox.mistertemp.io
API_SALESFORCE_AD_DOWNLINK=https://customer-ad-sf-downlink.sandbox.mistertemp.io
API_SALESFORCE_CONTACT_DOWNLINK=https://customer-contact-sf-downlink.sandbox.mistertemp.io
API_SALESFORCE_LEAD_DOWNLINK=https://customer-lead-sf-downlink.sandbox.mistertemp.io

FRONT_ADMIN=https://misteradmin.sandbox.mistertemp.com
FRONT_CUSTOMER=https://customer.sandbox.mistertemp.com
FRONT_CANDIDATE=https://mistertemp-frontend.sandbox.mistertemp.com/sign-in
FRONT_MATCH=https://match.sandbox.mistertemp-group.com
FRONT_OFFER=https://misterjob-jobboard.sandbox.mistertemp.com
FRONT_JOB_DASHBOARD=https://misterjob-dashboard.sandbox.mistertemp-group.com
FRONT_AUTH=https://auth.sandbox.mistertemp-group.com
FRONT_SALESFORCE_URL=https://alphyr--dev.lightning.force.com/lightning/r
FRONT_SALESFORCE_PORTAL_URL=https://dev-alphyr.cs129.force.com/agences/s

NODE_ENV=
ENV=
EOF
```

> Warning: ENV variable is `local` because `dev` is for the AWS `development` environment.
