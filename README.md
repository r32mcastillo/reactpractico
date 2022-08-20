<div align="right">

  <img src="src/assets/logos/log-2.png" alt="logo" width="50" height="auto" />
</div>


<!-- About the Project -->
## :star2: Practica en React

**Puedes ver el resultado en:** [https://r32mcastillo.github.io/reactpractico/](https://r32mcastillo.github.io/reactpractico/).


<!-- Prerequisites -->
### :bangbang: Prerrequisitos
**Ambiente de desarrollo.**
- node v16.14.2
- npm 8.5.0

<!-- Installation -->
### :gear: Instalación
**Comandos para realizar la instalación y ejecución.**
```
git clone https://github.com/r32mcastillo/reactpractico.git
cd reactpractico
npm install
npm run start
```


<!-- Run Locally -->
### :running: Ejecución
**Para poder verlo en localhost , se tiene que modificar el archivo `src\routes\App.jsx`.**
```
// Para localhost
return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
    ...
)
// Para github page
return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename='/reactpractico'>
    ...
)
```

**Comandos para realizar lanzamiento al servidor de github pages.**
```
// Se instalo 
npm install gh-pages --save-dev

//Ejecutar
npm run deploy
```

**Recursos.**
- [https://platzi.com/cursos/react-practico/](https://platzi.com/cursos/react-practico/)
- [https://api.escuelajs.co/](https://api.escuelajs.co/docs/#/products/ProductsController_getAll)
- [https://images.pexels.com](https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)


**Los temas que se estudiaron con esta practica, son:**
- React
- React Router
- React Context
- Hooks
- stateful vs. stateless
- useEffect y consumo de APIs

**Puedes ver el resultado en:** [https://r32mcastillo.github.io/reactpractico/](https://r32mcastillo.github.io/reactpractico/).
