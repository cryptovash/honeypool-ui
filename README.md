## HoneyPool - Hives Frontend

The UI allows users to interact with the HoneyPool smart contracts.

The application is note live yet.

To run the project against a local node you can use the [honeypool-core](https://github.com/cryptovash/honeypool-core).

With those contracts you can bootstrap a local Hardhat EVM instance to test and develop the application locally. For the fastest setup, it's recommended to run a `mainnet` fork - allowing the Pods to communicate with existing PrizePools.

#### Setup

Install dependencies:

```bash
$ yarn
```

Copy the `.env.example` to `.env` and fill in your own values for `.env`:

```bash
$ cp .env.example .env
```

To run the local server, run:

```
$ yarn dev
```

#### Developer Tools

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
