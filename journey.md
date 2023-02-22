# Intro

Documenting my steps and journey in creating my react-portfolio website. 

# 1. Open up your terminal and go to the directory where you want your project to be located.

I use Windows Terminal with Powershell 7, so to do so I run this

```powershell
Set-Location -Path .\react-portfolio\
```

or 

```powershell
cd .\react-portfolio
```

# 2. Bootstrap the project with [Create React App](https://github.com/facebook/create-react-app)

To do so run this command in the terminal:

```powershell
npx create-react-app react-portfolio
```

It may prompt user like this:

```powershell
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y)
```

Then just type y and continue.

# 3. Go to the directory and open up the app folder created with a code editor

I use visual studio code. Terminal commands to do so:

```powershell
cd react-portfolio

code .
```

# 4. Get an empty React project. 

Delete some files and code that won't be needed for our application

Go to the `src` folder and delete these files:

- App.css
- App.test.js
- index.css
- logo.svg
- reportWebVitals.js
- setupTests.js

Nearly all the files in `src` except for `App.js` and `index.js`. 

Then clear out the content related to the deleted files within `App.js` and `index.js`.

> `index.js` 

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

> `index.js` cleaned up

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

>`App.js`

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

> `App.js` cleaned up

```js
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
```

Now we have a clean and empty React project.

---

# 5. Run our App

- Put some content within `App.js`
- Add your name inside the `<div className="App">`

```js
function App() {
  return (
    <div className="App">
      Ken
    </div>
  );
}

export default App;
```

- Now open up the terminal, go to the directory `react-portfolio` where `package.json` is located and type the command: 
- Note: on Visual Studio Code, to open up the Terminal there is a pane `Terminal` in the top left, or use keyboard shortcut **Ctrl + Shift + `**

```powershell
npm run start
```

***Important*** run the above command inside the `react-portfolio` directory where the app is located, this folder includes `node_modules`, `public` and `src` directories. More importantly where `package.json` is located.

It then starts the script, starts the development server, and compiles. Now you can see live changes to your application in the browser with the port given to you in the Terminal.

Open up the browser and make a request (put in address bar) to: `http://localhost:3000/`

Or what was given in the `Local: http://localhost:####`

We can see the text displayed on our page now.

# 6. Import a Font to your project

Go to [Google Fonts](https://fonts.google.com) and look up a font you want, add all the non-italicized fonts to your catalogue. 

Copy the `<link>` tag, and go back to Visual Studio Code and go to `public` directory and open up the `index.html` file.

Before the closing `</head>` tag, and right above `<title>React App</title>` paste the font link. 

### Apply the font to the entire document

Right under `<title>React App</title>`, create a `<style>` tag, select everything, and apply the font family

```html
    <title>React App</title>
    <style>
      * {
        font-family: 'Montserrat', sans-serif;
      }
    </style>
```

Let's remove default styling for our document:

```html
<!-- public/index.html -->
    <title>React App</title>
    <style>
      * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    </style>
```

## Also import icons

Search up `font awesome icons cdn`. Go to [font-awesome](https://cdnjs.com/libraries/font-awesome) and click the `</>` icon to **Copy Link Tag**

In this case, at the time of writing it is version 6.3.0

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

And paste the link tag right under the font link we imported earlier. 

Should look like this: 

```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>React App</title>
    <style>
      * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
```

Now we can use any font-awesome icons (under the **Free** filter) @ [font-awesome free icons](https://fontawesome.com/search?o=r&m=free).

Search and type out any icons you'd want, e.g., "dragon". Copy the HTML link and paste it where you want it in `App.js`. 

***Important***: Uses JSX which converts to HTML later, so we must replace `class` in the HTML to `className` 

So now in `App.js` we have:

```jsx
function App() {
  return (
    <div className="App">
      Ken <i className="fa-solid fa-dragon"></i>
    </div>
  );
}
```

Now go ahead and `npm run` to see the app on the browser.

# 7. Planning the site

## Alternating colored sections

Each part of the site will have a section.

- Each section has a minimum height of 100% of the view height. 
- sections also are going to swap between a dark and light background

Back in `index.html` add this to within the `<style>` tag.

```html
    <style>
      * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      section {
        min-height: 100vh;
      }

      section:nth-child(2n) {
        background: #0f172a;
        color: white;
      }
    </style>
```

And now add the sections in `App.js`

```js
function App() {
  return (
    <div className="App">
      Ken <i class="fa-solid fa-dragon"></i>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
```

And we should see this differentiation between different sections of the document. 

# 8. Make folder called `components` with a file called `Header.js` under the `src` folder

In the `Header.js` file, just type `rfc` in Visual Studio Code (`rfc` command creates the default functional component code). Download in Visual Studio Code extensions: **ES7+ React/Redux/React-Native snippets** or from [GitHub](https://github.com/ults-io/vscode-react-javascript-snippets). 

Or type out the default functional component code: 

```js
import React from 'react'

export default function Header() {
  return (
    <header>Header</header>
  )
}
```
Render the Header component in the document. In `App.js`, type out `<Header ` then press Enter for the **manual import**, which adds the line `import Header from "./components/Header";` at the top. Then finish off the Header tag like this: `<Header/>`

```js
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      Ken <i class="fa-solid fa-dragon"></i>
      <Header />
      <section></section>
      /* more sections ... */
    </div>
  );
}

export default App;
```

### Now I want the Header to have a darker background. 

- So I have to match the alternating sections by altering this line: `section:nth-child(2n)` to `section:nth-child(2n+1)`.

- Then create under components folder a `header.module.css` file, which will contain styles specific only to `Header.js`.

- Import styles to Header component:

```js
import styles from './header.module.css'
```

- Apply styles to Header component:

```jsx
<header className={styles.header}>
  Header
</header>
```

- Then add styles (similar to what I did for sections) to `header.module.css`

```css
.header {
  background: #0f172a;
  color: white;
  min-height: 100vh;
}
```

Now go to the App and remove the sample line 

`Ken <i class="fa-solid fa-dragon"></i>`

and apply root stylings to the main App (which means to add `className='App'` to the div)

```js
function App() {
  return (
    <div className="App">
      <Header />
      <section></section>
```

So then we can add stylings to the class `App` in `index.html` like so: 

```css
.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```

# 9. Wrap App in <main> tag so we can style the parent element

`flex: 1` is shorthand for:

```css
flex-shrink: 1; flex-grow: 1; flex-basis: 0;
```

Give it a flex of 1 so it can always occupy the majority of the space. In other words, it will have the remaining full space given to it. Yet it grows and shrinks by a factor of 1, with no initial main size of a flex item.   

We want this for our `main` tag

```css
main {
  flex: 1;
}
```

# 10. Create Footer component

1. Create `Footer.js` under components
2. RFC - React Functional Component code
3. Import into our document

> Trick: When typing out `<Footer />` inside `App`, just backspace on 'r' and press Enter in Visual Studio Code and it should auto import (if auto import is enabled). 

What `App.js` looks like so far:

```js
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- Now we can remove the sections and begin styling our first component

# 11. Style the first component