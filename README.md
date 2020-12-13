# Vuex Todos

a simple implementation of a Todos application made with Vue 3, Vuex, and 
[JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Vuex (```src/store```)
The store itself has a count state along with actions and mutations (but no getters), and in the modules folder each
file exports a complete module object. Currently there's only one module for the todos.

### Todos
Actions:
- Todos are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) when the ```Home``` view is created
(```setup()``` function in Composition API, although it should be changed to the App entrypoint) using the action ```fetchFromApi```.
- A todo is added using the action ```addTodo```, which makes a POST request and it calls the mutation with the same name.
- A todo is updated using the action ```updateTodo```, where the entire new Todo is PUT and it calls the mutation with the same name.

The rest will be added later



## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
