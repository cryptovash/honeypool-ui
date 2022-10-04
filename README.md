# HoneyPool V4 UI

The user interface for interacting with V4 of the HoneyPool prize-savings protocol.

## 💾 &nbsp; Installation

Install dependencies:

```
yarn
```

Make sure you have `direnv` installed and copy `.envrc.example` to `.envrc`:

```
cp .envrc.example .envrc
```

Fill in your own values for `.envrc`, then run:

```
direnv allow
```

Download the localizations:

```
yarn locize:download --project-id 4436efaa-7b18-4332-a5e2-57437e041619
```

Then, replace the config.js file in node_modules/@pooltogether/react-components with the config.js in the root folder.


To run the local server, run:

```
yarn dev
```

## Developer

### Tools

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Locize](https://locize.io/login)

### Localization

- Be sure to download latest copy locally. This is done automatically on build.
- To add strings they must be manually added to Locize. t(key, defaultValue) isn't fully set up for `next-i18next`

### HoneyPool Repos

Some configs are shared across multiple repos. Be sure to update across all if you make changes.

#### Repos
- v4-ui
- governance-ui
- tools-ui

#### Shared
- /public/fonts
- /styles/index.css
- eslintrc.json
- .gitignore
- .nvmrc
- .prettierrc
- .prettierignore
- some .envrc
- tsconfig.json
- next-i18next.config.js
