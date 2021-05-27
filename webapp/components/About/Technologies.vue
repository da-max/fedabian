<template>
  <section>
    <h1>Mes technologies</h1>
    <div class="technologies-container">
      <AboutTechnology
        v-for="technology in technologies"
        :key="technology.title"
        :class="['technology', technology.class]"
        :technology="technology"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import type { ITechnology } from '~/types/portfolio.model'

@Component
export default class AboutTechnologies extends Vue {
  name: string = 'Technologies.vue'
  technologies: ITechnology[] = [
    {
      icons: [
        ['fab', 'html5'],
        ' - ',
        ['fab', 'css3-alt']
      ],
      title: 'HTML / CSS',
      content: `
          <p>
            Ces deux, basiques, langages de création me permettent
            de créer des sites internet au plus prés de ce que souhaitent
            les personnes avec lesquelles je travaille.
          </p>
          <p>
            Quand le design du site n’est pas trop spécifique et que je souhaite
            gagner du temps, j’utilise
            <a href="http://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwindcss</a>
            voir <a href="http://getuikit.com" target="_blank" rel="noopener noreferrer">UIkit</a>.
          </p>
      `
    },
    {
      icons: [
        ['fab', 'js'],
        ' - ',
        ['fab', 'vuejs']
      ],
      title: 'JS / Vue',
      content: `
          <p>
            Le JavaScript est un langage que j’apprécie beaucoup. Pour autant,
            je souhaite réduire l’utilisation que j’en fais. Cependant, il me
            permet de rendre les sites internet plus réactifs et agréable pour
            l’utilisateur.
          </p>
          <p>
            Quand le site nécessite beaucoup de réactivité et d’interaction
            avec l’utilisateur, il m’arrive d’utiliser
            <a
              href="http://vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >VueJs</a>
            voir
            <a
              href="http://nuxtjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >NuxtJs</a>.
          </p>
        `
    },
    {
      icons: [
        ['fab', 'python'],
        ' - ',
        '<img class="inline" src="/icons/django.svg" alt="Icon du framework Django" width="27" />'
      ],
      title: 'Python / Django',
      content: `
          <p>
            Côté serveur, j’utilise principalement du python, c’est un langage
            que j’apprécie pour sa lisibilité. Si le projet a besoin d’une
            petite api, je peux également aussi utiliser <a
              href="http://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >NodeJs</a>, mais je préférerais utiliser
            <a
              href="https://palletsprojects.com/p/flask/"
              target="_blank"
              rel="noopener noreferrer"
            >Flask</a>.
          </p>
          <p>
            S’il s’agit d’un projet avec des concepts plus avancés et
            complets, j’utiliserais
            <a
              href="http://djangoproject.com"
              target="_blank"
              rel="noopener noreferrer"
            >Django</a>.
          </p>
        `
    },
    {
      icons: [
        ['fab', 'linux'],
        ' - ',
        ['fab', 'fedora']
      ],
      title: 'Linux / Fedora',
      class: 'large',
      content: `
        <p>
            De part sa philosophie et ses communautés, les systèmes Linux
            m’ont très vite intéressé. Bien que je ne sois pas spécialisé dans
            l’administration système, je peux mettre en production les projets
            que je porte sur des serveurs Linux.
        </p>
      `
    },
    {
      icons: [
        ['fab', 'docker'],
        ' - ',
        ['fab', 'gitlab']
      ],
      title: 'Docker / Gitlab-ci',
      class: 'large',
      content: `
        <p>
          Bien que je sois encore en train d’apprendre ces technologies, je
          cherche à les rendre prédominantes dans tous les projets qui
          nécessitent un déploiement rapide.
        </p>
      `,
      inProgress: true
    }
  ]
}

</script>

<style lang="scss">
.technologies-container {
  @apply grid grid-cols-6 gap-10 m-2;
  > * {
    @apply col-span-full;
  }

  > .technology {
    > header {
      @apply text-center text-4xl;
    }

    > section {
      @apply mt-5;
      p {
        @apply text-justify;
      }
    }
  }
}

@screen md {
  .technologies-container {
    @apply m-10;
  }
}

@screen xl {
  .technologies-container {
    & > * {
      @apply col-span-2;
    }
    & > .large {
      @apply col-span-3;
    }
  }
}
</style>
