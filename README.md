# Web

This project was generated using [@nxpm/stack](https://github.com/nxpm/stack) which is based on [Nx](https://nx.dev).

<p align="center"><img src="https://avatars.githubusercontent.com/u/65322676?v=4" width="450"></p>

# Setup

Start the database server (add `-d` to run it in the background):

```shell
docker-compose up
```

Copy the `.env.example` file to `.env`:

```shell
cp .env.example .env
```

Create the database schema:

```shell
yarn setup
```

# Development server

Start Api

```shell
yarn dev:api
```

Start Web

```shell
yarn dev:web
```

# Generate GraphQL SDK

The queries for the GraphQL SDK are stored in `libs/web/core/data-access/src/graphql`.

After updating the queries you can re-generate the SDK:

```shell
yarn sdk:web
```

Or run it in watch mode

```shell
yarn sdk:web:watch
```

# Building the project

You can build both apps into a production build:

```shell
yarn build
```

After that, you can run the production app:

```shell
yarn start
```

Build Api

```shell
yarn build:api
```

Build Web

```shell
yarn build:web
```

# Components

```markdown
Api: api
Web: web
Web: web
```
