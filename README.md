# Portfolio

Portfolio website created using React. It is hosted using github pages, click [here](https://haricazorla.github.io/my-portfolio/) to check it.

# To run locally
```
npm start run
```

# Steps to host on Github pages

<Li> Add github pages dependency

```
npm i gh-pages
```
<Li>Add two keys 'predeploy' and 'deploy' to 'scripts' section in the package.json file

 "scripts": {
  
    "start": "react-scripts start",
  
    "predeploy": "npm run build", 
  
    "deploy": "gh-pages -d build", 
  
    "build": "react-scripts build",
  
    "test": "react-scripts test",
  
    "eject": "react-scripts eject"
  
  }
  
<Li> Add a key called 'homepage' to package.json file
  
```
  "homepage": "https://haricazorla.github.io/my-portfolio/",
```
