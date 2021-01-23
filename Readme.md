# 😍 [TailwindCSS 2.x](https://tailwindcss.com/) with [Snowpack](https://www.snowpack.dev/) Setup

# 😞 Important Note

The setup was slow when I used the [tailwind directives](https://tailwindcss.com/docs/functions-and-directives) like [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) inside the `CSS files`

---

List of packages installed

| Package Name                 | Version |
| ---------------------------- | ------- |
| @snowpack/plugin-postcss     | ^1.1.0  |
| @tailwindcss/postcss7-compat | ^2.0.2  |
| autoprefixer                 | ^10.2.3 |
| postcss                      | ^8.2.4  |
| postcss-cli                  | ^8.3.1  |
| snowpack                     | ^3.0.11 |
| tailwindcss                  | ^2.0.2  |

---

😊 Clone this repo

- Install Packages

```
  npm install
```

- To run the dev server

```
npm run start
```

- To run the prod build

```
npm run build
```

---

## 🤔🤔 Just in case you want to setup everything from `scratch`.

Steps to Follow

- open the folder(your project folder) and run

  ```
  npm init -y
  ```

  to create `package.json` with default settings.

- Install [Snowpack](https://www.snowpack.dev/) using
  ```
  npm i snowpack -D
  ```
- add these scripts to your `package.json`

  ```
  "scripts": {
    "start": "snowpack dev",
    "build": "snowpack build"
  },
  ```

  `start` - to run the local development server.
  `build` - to create a production build

- Let's install [TailwindCSS 2.x](https://tailwindcss.com/)

  ```
  npm install tailwindcss@latest postcss@latest autoprefixer@latest -D
  ```

- next we need to create `tailwind.config.js` and `postcss.config.js`. To generate these files run

  ```
  npx tailwindcss init -p
  ```

- add `tailwindcss` and `autoprefixer` to the postcss plugins inside `postcss.config.js`

  ```
  module.exports = {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  };
  ```

- next we need to instruct snowpack to run [postcss](https://github.com/postcss/postcss). Install [snowpack postcss plugin](https://www.npmjs.com/package/@snowpack/plugin-postcss)

  ```
  npm install @snowpack/plugin-postcss postcss postcss-cli -D
  ```

- next we need to create `snowpack.config.js` in the root of the project directory and add the following code
  ```
  module.exports = {
      plugins: ["@snowpack/plugin-postcss"],
  };
  ```

## 🥳😍 Finally we are ready to create `html` `css` and `js` files.

- create these files inside the root of the project directory
  - `index.html`
  - `index.css`
  - `index.js`

## add tailwind css rules inside the `index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Add `index.css` to `index.html` using
  ```
   <link rel="stylesheet" href="index.css" />
  ```

# ✋ FOR PRODUCTION BUILD

- Add `purge` rule to `tailwind.config.js`

```
module.exports = {
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

and run

```
npm run build
```

which creates a build folder.
