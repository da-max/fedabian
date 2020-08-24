<template>
  <footer class="uk-text-center uk-tile uk-tile-default uk-light">
    <p>
      Maxime Ben Hassen - Textes libres sauf indication(s) contraire(s).
      <span class="contact_footer">
        Email:
        <a href="mailto:maxime.benhassen@tutanota.com" class="uk-link-text"
          >maxime.benhassen@tutanota.com</a
        >
      </span>
    </p>
    <p class="text-orange-300 py-3">Version {{ pjson.version }}</p>
    <p class="my-3">
      <a
        href="https://framapiaf.org/@Damax"
        class="uk-link-reset uk-margin-left uk-margin-right link-mastodon"
        ><font-awesome-icon :icon="['fab', 'mastodon']" size="2x" />
      </a>
      <a
        href="https://twitter.com/Damaaax"
        class="uk-link-reset uk-margin-left uk-margin-right link-twitter"
        ><font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
      </a>
      <a
        href="https://github.com/Da-max"
        class="uk-link-reset uk-margin-left uk-margin-right link-github"
        ><font-awesome-icon :icon="['fab', 'github']" size="2x"
      /></a>
      <a
        href="https://gitlab.com/Damax"
        class="uk-link-reset uk-margin-left uk-margin-right link-gitlab"
        ><font-awesome-icon :icon="['fab', 'gitlab']" size="2x"
      /></a>
    </p>
  </footer>
</template>

<script>
import Pjson from '~/package.json'
export default {
  name: 'Footer',

  data() {
    return {
      pjson: Pjson
    }
  }
}
</script>
