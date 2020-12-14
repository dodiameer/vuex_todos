<template>
  <div class="about">
    <p>
      This is a todos application built with Vue 3 + Vuex to try out the state
      management library and get a feel for it, and to give a beginner some idea
      of the practical uses it could have. source code can be found
      <a href="https://github.com/dodiameer/vuex_todos">on my GitHub</a> for you
      to look at.
    </p>
    <p>
      There are some thing I would change if I were to
      <span class="no-wrap">re-write</span> this someday, the main one is
      <em>not</em> naming actions and mutations the exact same thing but rather
      prefixing "Action" or "Mutation" to the name to keep it clear.
    </p>
  </div>
</template>

<style scoped>
div.about {
  width: 260px;
  margin: 0 auto;
}
p {
  margin-top: 1rem;
}
span.no-wrap {
  white-space: nowrap;
}
@media screen and (min-width: 500px) {
  div.about {
    width: 480px;
  }
}
</style>