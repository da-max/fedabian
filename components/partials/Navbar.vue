<template>
  <div class="uk-light">
    <nav class="uk-navbar-container uk-visible@m" uk-navbar>
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <ul class="uk-navbar-nav">
            <li class="uk-parent">
              <nuxt-link to="/a-propos">Présentation</nuxt-link>
            </li>
            <!-- This link has curent-page for so that it is taken into account in the css file (generate by purgecss) -->
            <li class="uk-parent">
              <nuxt-link to="/mes-projets">Mes projets</nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link id="navbar-logo" to="/" class="uk-navbar-item uk-logo"
          >Da-max</nuxt-link
        >
        <div class="uk-navbar-center-right">
          <ul class="uk-navbar-nav">
            <li class="uk-parent">
              <nuxt-link to="/me-contacter">Me contacter</nuxt-link>
            </li>
            <li class="uk-parent">
              <nuxt-link to="/mathematiques">Mathématiqes</nuxt-link>
            </li>
            <li v-if="$store.state.auth.loggedIn">
              <a href="#" class="uk-navbar-toggle">Espace administration</a>
              <div class="uk-navbar-dropdown" uk-dropdown>
                <ul class="uk-nav-sub uk-nav-default">
                  <li>
                    <nuxt-link to="/admin/portfolio/ajouter-un-projet">
                      Ajouter un projet</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="$store.state.auth.loggedIn" class="uk-navbar-right">
        <span class="uk-navbar-item">
          {{ $store.state.auth.user.username }}
        </span>
      </div>
    </nav>

    <nav class="uk-navbar-container uk-hidden@m" uk-navbar>
      <div class="uk-nvabar-left">
        <nuxt-link
          id="navbar-logo"
          to="/"
          class="uk-navbar-item uk-logo uk-margin-left"
          >Da-max</nuxt-link
        >
      </div>
      <div class="uk-navbar-right uk-margin-right">
        <a
          class="uk-navbar-toggle"
          uk-navbar-toggle-icon
          uk-toggle
          href="#nav-offcanvas"
        ></a>
      </div>
    </nav>

    <div id="nav-offcanvas" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul class="uk-nav uk-nav-center uk-margin-auto-vertical">
          <li>
            <nuxt-link to="/a-propos">Présentation</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mes-projets">Mes projets</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/me-contacter">Me contacter</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mathematiques">Mathématiqes</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
