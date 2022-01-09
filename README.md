# Portfolio

<<<<<<< HEAD
Portfolio website created using React. 

# Steps to host on Github pages
```
npm i gh-pages
```
=======
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
>>>>>>> 8d5a1e8dd77c0871bf4ac823892bbc83e745efa7
