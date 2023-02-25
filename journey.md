# Intro

Documenting my journey & progress in creating a react-portfolio website. 

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

Within the <header> tag create:
- h1 with styles.headerText

  ```jsx
  <h1 className={styles.headerText}></h1>
  ```

- div with styles.navItems

  ```jsx
  <div className={styles.navItems}></div>
  ```

**Tip:** in Visual Studio Code, can type `div.{styles.headerText}` then Enter to create the tag

---

Let's break the lines of code down. 

## React Recap

React apps are made out of components. 

A component is a piece of the UI (User Interface) that has its own logic and appearance. 

React Components are JavaScript functions that return markup. 

The markup syntax is called JSX. 

JSX is stricter than HTML in that: 
- You have to close tags like <br /> 
- Component cannot return multiple JSX tags
	- Have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper.

JSX lets you put markup into JavaScript. 

In JSX, braces are a delimiter, signaling to JSX that what resides in between the braces is a JavaScript expression. The other delimeter is using quotes for strings, like this: `id='1'`

Everywhere inside of our JSX where we're interpolating a variable we delimit the variable with braces ( { } ). We're inserting data both as:

 - text content inside of tags
 ```js
<div className='header'>
  <a>
    <i className='caret up icon'/>
  </a>
  {this.props.votes}
</div>
```
	
- as well as for attributes on HTML elements:

```js
<img src={this.props.productImageUrl} />
```

Interweaving props with HTML elements in this way is how we create dynamic, data-driven React components.

***Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user.***

```js
return(
  <h1>
    {user.name}
  </h1>
);


You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. 

For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:

```js
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

You can put more complex expressions inside the JSX curly braces too, for example, string concatenation:

```js
const user = {
  name: 'Anya and Yoru by torino',
  imageUrl: 'https://i.imgur.com/0tyiCSD.jpeg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

In the above example, style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables.

---

Back to the example!

```js
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Your Name</h1>
      <div className={styles.navItems}></div>
    </header>
  )
}
```

The css class of the h1 and div "escape into JavaScript" from JSX attributes by using curly braces. So the `{styles.headerText}` reads the JavaScript `styles.headerText` variable value, and then passes that value as the `className` attribute (which in then turns into `class` attribute of h1) Note that since JSX is rendered as JavaScript, and `class` is a reserved word in JavaScript, therefore `className` attribute is used instead.

# 11.5 still styling our component

In `header.module.css` which is the `styles` that we imported for `Header.js`, add `display: flex` property for the header so we can have row on small screens and column on big screens (so I'll add media query later). Then add `justify-content: center;` and `align-items: center;` which centers it horizontally and vertically respectively, so our content will be in the middle. 

Target the `headerText` here for styling. 

```css
.headerText{
  font-size: 4rem;
  writing-mode: vertical-rl;
  text-align: center;
  text-orientation: upright;
  letter-spacing: -0.5ch;
  font-weight: 800;
  text-shadow: 0.03em 0.03em 0 rgb(0, 255, 213),
    0.06em 0.06em 0 rgb(154, 192, 18),
    0.09em 0.09em 0 rgb(226, 143, 87),
    0.11em 0.11em 0 rgb(161, 24, 127);
}
```
- text-shadow gives it that pop-out neon-like effect

# 12. Adding Icons for the navbar

[Free font-awesome icons](https://fontawesome.com/search?o=r&m=free)

Get some icons with the links and paste it within the `div className={styles.navItems}`. 

Then style our navItems. 

``css
.navItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  font-size: 4.5rem;
}
```

Now we want these icons to change color as we hover over. 

Let's style them:

```css
.icons {
  transition-duration: 300ms;
  cursor: pointer;
}

.icons:hover {
  color: aqua;
  transform: scale(1.1);
}
```

Now we have to apply these class names in the JSX icon elements.

To do so we need to:
- Remove the double quotes
- Wrap the className's value in backticks
- Wrap that backticked string with curly brackets (to signal to JSX that this is a JavaScript expression)
- Then interpolate another variable as a class for the HTML attribute className, in this case it is `${styles.icons}`

In visual studio code: 
1. Remove the double quotes
2. Highlight the className value string
3. Press `{` then backtick and it should wrap it
4. Apply the styles

So this line:

```js
<i className="fa-solid fa-dragon"></i>
```

turns into:

```js
<i className={`fa-solid fa-dragon ${styles.icons}`}></i>
```

Do the same for the rest of the icons. 

# 13. Finish up the Header component

Style the navigation icons. And also change how header looks on small viewports: 

```css
.icons {
  transition-duration: 300ms;
  cursor: pointer;
}

.icons:hover {
  color: aqua;
  transform: scale(1.1);
  text-shadow: 0.03em 0.03em 0 white;
}

@media (min-width: 640px) {
  .header {
    flex-direction: column;
  }

  .headerText {
    writing-mode: unset;
    text-align: unset;
    text-orientation: unset;
    font-size: 6rem;
    letter-spacing: 4px;
  }

  .navItems {
    flex-direction: row;
    font-size: 5.5rem; 
  }
}
```

# 14. Create Aboutme component

- `Aboutme.js` under components folder
- rfc command
- Swap out the `div` for `section` so styling rules apply to it
- Give it a proper id to the section, in lowercase with dashes if needed (e.g., id="about-me")
- In `App.js` render that component, and automatically import it

Note: *Why add an `id`?* I will wrap the icon in anchor tag with an `href` value of "#id-name". 

e.g., `<a href='#about-me'>` ...icon here... `</a>` will allow the User to click the icon and it will navigate to that section. 

**Important**: the `#` in the href will navigate them to that section of the page (or the page itself if just `#` alone). Without the `#` symbol, it will take them to a new page. 

> When clicked, we got redirected immediately so we should add `scroll-behavior` style rule to make the experience a bit smoother:

In `index.html`, add this within style tag: 

```css
html {
  scroll-behavior: smooth;
}
```

# 15. Create Experience component 

Repeat step 14)

# 16. Create Projects component

Repeat step 14)

Now wrap each of the icons with anchor tags and href to that section of the webpage. 

# 17. Remove the default styling of anchor tags

Give `<a>` tags className of styles.anchor. 

```js
<a href='#about-me' className={styles.anchor}>
```

Then in `header.module.css` 

```css
.anchor {
  text-decoration: inherit;
  outline: none;
  color: unset;
}
```

# 18. Style the Aboutme component

- Add className of styles.aboutMe
- Create corresponding css file
- Import the css module file in Aboutme component

I could be more efficient and have these `section` components have predefined css style rules already inherited. So back to `index.html` we add in `section`. 

A design decision here would be that the content within the section will be centered within the page. 

```css
      section {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
```

So now there will be individual styling on each module css page, no need to repeat. So now in the `aboutme.module.css` file made we can make individual styling rules. 

I'd like to have this line effect around the header of "About Me" so going to have headerText container and two divs within that contains the `<h1>` .  Like so in `Aboutme.js` 

```js
export default function Aboutme() {
  return (
    <section id='about-me' className={styles.aboutMe}>
      <div className={styles.wrapper}>
        <div className={styles.headerText}>
          <div className={styles.line}></div>
          <h1>About Me</h1>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  )
}
```

Then style it further.

```css
.headerText {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px; 
  padding: 8px 20px;
}

.wrapper{
  width: 850px;
  max-width: 100%;
  display: flex;
  align-items: center;
}

.line {
  height: 2px;
  background: #0f172a;
  flex: 1;
}
```
Later on I added a wrapper around the headerText and line so I can set a fixed width hat a certain point, seen in the wrapper style rules. So when its past a certain breakpoint, it centers that line and header in the middle. 

### Side Note

Later on went to add another font : Poppins for the titles, and leave Montserrat for the body.

I like how Poppins gives the effects that I want. So changed this line: 

`<h1 className={styles.text}>About Me</h1>`

and added this in the css:

```css
.text {
  font-family: 'Poppins', 'sans-serif';
  font-weight: 800;
  font-size: 2rem;
  -webkit-text-stroke: 1.5px #0f172a;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 640px) {
  .text {
    font-size: 4rem;
    -webkit-text-stroke: 2px #0f172a;
  }
}
```

## Adding content to the Aboutme section

```js
        <div className={styles.sectionContent}>
          <p>
              I am a ...
          </p>
        </div>
```

Then add `flex-drection: column;` style rule inside wrapper so text sits underneath. 

Next style the sectionContent. Give a padding of 20 all around. On mobile and small devices would like a grid to have a single column. 

We repeat with a minmax function that defines a size range, which we want the minimum to be 0 and maximum to be 1 fraction. 

So far: 

```css
.sectionContent {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, minMax(0, 1fr));
  text-align: justify;
}

.content {
  font-weight: 500;
  font-size: 0.75 rem;
  line-height: 1rem;
  border: 1px solid #0f172a;
  padding: 8px;
}
```

`text-align: justify;` isn't consistent so switching that to `text-align: center;`.


Later on bigger screens where the breakpoint is 640px, make the content paragraphs get out of the 1 grid column and into 3 columns. 


Then I removed `justify-content: center;` from the section and add padding top to each of the sections instead.

### Centering text in a box

Had to convert content class from `<p>` to `<div>`, so that on 640px breakpoints, I can center separate the `<p>` tags that contain the actual text and center them within their parent element. 

On mobile devices the proper grid is applied. But I want content div to display flex within it so that the child element's wrapped like this: 

```js
            <p className={styles.paragraph}>
             	 I take pride in writing clean and reusable code.
            </p>
```
can be centered within those content `<div>` containers which `display: flex`, so then on larger screens they look cleaner with the 3 grid display.

Take a look at the `aboutme.module.css`

```css
.sectionContent {
  padding: 20px;
  display: grid;
  gap: 20px; 
  grid-template-columns: repeat(1, minMax(0, 1fr));
  text-align: center;
}

.content {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid #0f172a;
  padding: 8px;
}

@media (min-width: 640px) {
  .text {
    font-size: 4rem;
    -webkit-text-stroke: 2px #0f172a;
  }

  .sectionContent {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .content {
    font-weight: 600;
    font-size: 1rem;
    display: flex;
  }

  .paragraph {
    margin: auto;
  }
}
``` 

#### Having content sit on top of each other

These lines in css for the parent element really helps:

```css
display: flex;
flex-direction: column;
```

# 19. Experience Component

- Create corresponding css file `experience.module.css` 
- Going to borrow the styling of `aboutme.module.css` from `headerText` to `text`
- Also going to use the headerText component type from `Aboutme.js`

# 20. Declutttering our Components

**Notice: Once we get to this level of code duplication, its a sign that I should create a new component**

- Create `SectionIntroduction.js`
- rfc - React Functional Component template

```js
import React from 'react'

export default function SectionIntroduction() {
  return (
    <div>SectionIntroduction</div>
  )
}
```

The following code that I'd like to reuse:

```js
    <div className={styles.headerText}>
      <div className={styles.line}></div>
      <h1 className={styles.text}>About Me</h1>
      <div className={styles.line}></div>
    </div>
```

Style rules that apply (put in `sectionintroduction.module.css`)

```css
.headerText {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px; 
  padding: 40px 20px 10px 20px;
}

.line {
  height: 2px;
  background: #0f172a;
  flex: 1;
}

.text {
  font-family: 'Poppins', 'sans-serif';
  font-weight: 800;
  font-size: 2.5rem;
  -webkit-text-stroke: 1.5px #0f172a;
  -webkit-text-fill-color: transparent;
}
```

Now swap out the reusable code for the new component in `Aboutme.js`

```js
import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
  return (
    <section id='about-me' className={styles.aboutMe}>
      <div className={styles.wrapper}>

        <SectionIntroduction>ABOUT ME</SectionIntroduction>

        <div className={styles.sectionContent}>
        // ... code continues
```

Note how we just wrap the text we want "ABOUT ME" inside `<SectionIntroduction>` and we can receive that data into SectionIntroduction as `props`, as a child item. We can render that child item within the div we'd like to replace in the code.

In `SectionIntroduction.js`
```js
import React from 'react'
import styles from './sectionintroduction.module.css'

export default function SectionIntroduction(props) {
  const { children } = props;
  return (
    <div className={styles.headerText}>
      <div className={styles.line}></div>
      <h1 className={styles.text}>{children}</h1>
      <div className={styles.line}></div>
    </div>
  )
}
```

The Aboutme section should be just like how it was previously. 

Now let's apply similar things to `Experience.js`.

```js
import React from 'react'
import styles from './experience.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id='experience'>
      <div className={styles.wrapper}>
        <SectionIntroduction>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}></div>
      </div>
    </section>
  )
}
```

Upon looking at the web page, there's someting wrong:

Can't see the header text. Try highlighting it and we see that the text color is the same as the dark background.

# 21. Add a prop called `dark` which indicates the background is dark

Let's pass this information back to `SectionIntroduction` so that we can indicate it to change the color of the header text. 

Add `dark={true}` to Experience component, like so:

```js
<SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
```

Then in `SectionIntroduction.js`, we can receive that data and apply a different style rule conditionally for classes that have colors specified.

```js
export default function SectionIntroduction(props) {
  const { children, dark } = props;
  return (
    <div className={styles.headerText}>
    <div className={(dark ? styles.lineDark: styles.line)}></div>
      <h1 className={(dark ? styles.textDark: styles.text)}>{children}</h1>
      <div className={(dark ? styles.lineDark: styles.line)}></div>
    </div>
  )
}
```

Then go to to the corresponding css file, and find any class with a a rule that has to do with colors, in this case it is `.line` and `.text`. Duplicate them and append a Dark to it.  

### Note: we can make more efficient CSS style rules

Since `.line` and `.lineDark` share most properties with the only difference being the colors.

Set set its shared properties, then specify unique properties later. 

```css
.line,
.lineDark {
  height: 2px;
  flex: 1;
}

.line {
  background: #0f172a;
}

.lineDark {
  background: white;
}

.text,
.textDark {
  font-family: 'Poppins', 'sans-serif';
  font-weight: 800;
  font-size: 2.5rem;
  -webkit-text-fill-color: transparent;
}

.text {
  -webkit-text-stroke: 1.5px #0f172a;
}

.textDark {
  -webkit-text-stroke: 1.5px white;
}

@media (min-width: 640px) {
  .text,
  .textDark {
    font-size: 4rem;
    -webkit-text-stroke-width: 2px;
  }
}
```

# 22. Experience component

Going to turn `sectionContent` into a list 

```js
export default function Experience() {
  return (
    <section id='experience'>
      <div className={styles.wrapper}>

        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>

        <div className={styles.sectionContent}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </div>
        
      </div>
    </section>
  )
}
```

```css
.sectionContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: green;
  padding: 20px;
}

@media (min-width: 640px) {
  .sectionContent {
    padding: 20px 50px;
  }
}
```

Going to make `<li>` elements a component, so they can be targeted for styling.

## Creating a `ListEntry.js` component. 

- rfc
- Which takes in `props` as a parameter
- Destructure `title`, `date`, `children` from props.
- renders a combination of all of the items

so far: 

```js
export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <ul>
      <div>
        <h1>{title}</h1><h1>{date}</h1>
      </div>
      <li></li>
    </ul>
  )
}
```

A title and date above, and all the list items below. For consistency, I should separate them into two separate items to be rendered in the page.

```js
export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <>
      <div>
        <h1>{title}</h1><h1>{date}</h1>
      </div>
      <ul>
        <li></li>
      </ul>
    </>
  )
}
```

## Example of how `ListEntry` component would work:

In Experience:

```js
export default function Experience() {
  return (
    <section id='experience'>
      <div className={styles.wrapper}>

        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>

        <div className={styles.sectionContent}>
          <ListEntry title={"Workplace"} date={"2017 - 2022"}>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ListEntry>
        </div>
        
      </div>
    </section>
  )
}
```

Back in `ListEntry` we render out any of the list item children

```js
export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <>
      <div>
        <h1>{title}</h1><h1>{date}</h1>
      </div>
      <ul>
        {children}
      </ul>
    </>
  )
}
```
