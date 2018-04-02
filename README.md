# mailtool

![electron-easy-start](./electron-easy-start.png)

- [electron-easy-start](#electron-easy-start)
    - [Install](#install)
    - [Develop](#develop)
    - [Build](#build)
        - [Important](#important)
    - [What's included](#whats-included)
    - [Folder structure](#folder-structure)

## Install

``` bash
# Clone the repository
$ git clone https://github.com/RomaTur/mailtool.git

# Go into the repository
$ cd mailtool

# Install dependencies
$ npm install
```

## Develop

Just run this commands to start developing with hot reloading.

``` bash
# Start developing for browser

$ npm start

# Launch Electron View of App

$ npm run electron-dev
```

## Build

```bash
# Build web version

$ npm run build-web
```

```bash
# Build desktop version

$ npm run build-desktop
```

### Important

You need to see [config](https://www.electron.build/configuration/configuration) of elctron-builder.

Example of [config](https://gist.github.com/RomaTur/fca361c84cbd2a1675e603bd49290593) for **"build"** property in package.json.

## What's included

- Typesrcipt support for React.
- Sass compiling support.
- JS, CSS and assets automatic bundling.
- Hot reloading via react-scripts and electron-reload

> To use JSX, use react-scripts instead react-scripts-ts

## Folder structure

``` bash
├── electron-easy-start/            # Your project's name, you can rename it
    ├── build/                      # Build folder of web version
        ├── ...
    ├── dist/                       # Build folder of desktop version
        ├── ...
    ├── public/
        ├── favicon.ico
        ├── index.html              # The HTML template of your app
        ├── manifest.json           # Provides metadata
    ├── src/
        ├── Components/             # React Components
            ├── App/
                ├── App.css         # Compiles automatically
                ├── App.sass
                ├── App.tsx
        ├── ...
        ├── index.css               # Global style
        ├── index.tsx               # Main script that renders your app
    ├── electron_process.js         # Electron main process
    ├── gulpfile.js                 # Task copies electron_process.js and
                                    # package.json in build folder(web)
                                    # This made for script
                                    # that builds desktop version
    ├── package.json
    ├── tsconfig.json               # Config for compiling Typescript
    ├── tslint.json                 # Linting Typescript
```
