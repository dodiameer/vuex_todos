# Vuex Todos

a simple implementation of a Todos application made with Vue 3, Vuex, and 
[JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Vuex (```src/store```)
The store itself has a count state along with actions and mutations (but no getters), and in the modules folder each
file exports a complete module object. Currently there's only one module for the todos. Note the counter isn't used but there's
a component that you can add to see it working (Try adding it multiple times, the same count is displayed in every instance)

### Todos
Actions:
- Todos are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) when the ```App``` is created
(```setup()``` function in Composition API) using the action ```fetchFromApi```.
- A todo is added using the action ```addTodo```, which makes a POST request and it calls the mutation with the same name.
- A todo is updated using the action ```updateTodo```, where the entire new Todo is PUT and it calls the mutation with the same name.
- A todo is deleted using the action ```deleteTodo```, which makes a DELETE request and calls the mutation with the same name.



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
