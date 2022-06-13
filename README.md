# react

Projects Utilizing React.js

## Overview

It was developed at facebook and is the most popular library for developing user interfaces, next up and angular and vue.

React apps are built using components, which are independent and isolated. These can then be combined to build complex user interfaces.

Each app has a root component which contains child components.

When building a react user interface, it can be helpful to build a hierarchy of the components which can be built in isolation.

A component is implemented as a javascript class that has some state and a render method that describes what the user interface should look like.

React keeps a light-weight representation of the DOM in memory, called a virtual DOM, which is not computationally expensive. To update, react will see what's new in the virtual DOM and add that to the real DOM. This removes the need to query or manipulate the DOM manually. React handles updating the DOM for you. This is where the name comes from, react reacts to the state changes and makes updates.

A virtual DOM is a virtual object, nad is much faster to update than the real DOM. So react only updates where changes in the display are made, and not the full website view. This way the real DOM is kept in sync with the virtual DOM. The main advantage of this is you don't have to work with the Javascript DOM API.

The react setup presents only a single HTML file with different paths.

React and angular are similar in that they are component based, but angular is a framework, whereas react is a view library. Because its a library it has a small amount of standard API functions.

# Setup

Requires you to install node to use the node package manager (npm) to install packages.

use VSCode as an editor, and add simple react snippets to your editor, and also the prettier code formatter.

Can also update settings to format on save, and could use a different theme in VSCode.

## Using Create-react-app

When you first create a react app, a development server, a webpack, and babel are installed, as well as other tools. This means the react-app is created with zero-configuration needed.

You can create the react app in a new subfolder, and then run the command `npm start` in the new folder to start the development server. This is run on port 3000.

You can also manually set up all the things needed in webpack and babel, but these can be cumbersome to do.

## React Components

There are two types of react components:

- class-based components
- functional components

For a class based component, you need to import react, and then use a regular javascript class that extends the component, then use the render method to discribe what the UI should look like.

Class-based components were replaced by the simpler functional components recently in react development.

Functional components also pull from React. Then you can create a type of function, any of the following three work:

- normal function
- arrow function
- named function

The function returns something the app should display, and it returns in JSX; it describes what the user interface should look like.

JSX is like a templating engine.

## Folder structure

Package.json has all the packages and dependencies needed for react app.

The node modules have the code for those dependencies.

The src folder is where the most editing will occur.

The index.js file is where the ReactDOM is rendered. The entire react application is populated in the index.js file and then displayed in the index.html file.

The App.js file is the first function-based component, which is writting in JSX. JSX allows you to render javascript code directly in html.

## Dynamic Updating

The changes in the .js files which define the components are automatically updated to the webpage on saving the files when the development server is running.

When you want to render alternative html containers, you have to wrap them in what are called react fragments with <> and </> tags.

You can completely change the user interface within components based on the state changes in react, rendering alternate text, displays, buttons, etc.

You can also include compoenents within other components, and reference it more easily. This makes it easy to iterate through all the objects you might want to represent with a particular component. Like with a list of people, or a list of movies.

You can use props when defining an arrow component as keyword arguments. For example:

```javascript

const Person - (props)  => {
    <h1> Name: {props.name} </h1>
}
```

## State in React

A state represents a piece of information about the components current situation, and is managed by the component.

To use states you want to import it:

```javascript
import { useState } from "react";
```

The useState is called a react hook. There are 3 basic hooks as well as other hooks. See the react Docs for more information on how to use hooks.

useEffect is the another common hook. This allows you to do event-based changes in the state variables. UseEffects have a dependency array as a second parameter. When this is empty, the code inside of the useEffect function will only happen at the initial load of the function. If you include a variable in the dependency array, the effect will be called every time the variable in the array is called.

These state variables can be used to change values displayed on the webpage. As the state variables change with the JSX code, the page can be updated wihout needed a page reload.

One thing to keep in mind is that state variables can only be changed using their own setter functions.
