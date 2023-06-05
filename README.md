# Evercam static

Evercam static websites source code.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Setting up domains for local development:

1- Add the following to `/etc/hosts` :
```
127.0.0.1    local.io
127.0.0.1    local.sg
127.0.0.1    local.uk
127.0.0.1    local.com.au
127.0.0.1    local.com
127.0.0.1    local.pl
127.0.0.1    evercam.local.io
127.0.0.1    evercam.local.sg
127.0.0.1    evercam.local.uk
127.0.0.1    evercam.local.com.au
127.0.0.1    evercam.local.com
127.0.0.1    evercam.local.pl
```

2- Add the domains to your `.env`
```
DOMAIN_UK=evercam.local.uk
DOMAIN_SG=evercam.local.sg
DOMAIN_IE=evercam.local.io
DOMAIN_AU=evercam.local.com.au
DOMAIN_US=evercam.local.com
DOMAIN_PL=evercam.local.pl
``` 

## Development Server

Start the development server and access it on  http://evercam.local.io/

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
