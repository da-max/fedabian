<template>
  <div class="theme-switcher">
    <input
      id="color-mode"
      v-model="$colorMode.value === 'dark'"
      type="checkbox"
      aria-label="Changer le thème"
      name="color-mode"
      @input="toggleTheme"
    >
    <label for="color-mode">
      <FontAwesomeIcon class="icon icon-sun" :icon="['fas', 'sun']" />
      <FontAwesomeIcon class="icon icon-moon" :icon="['fas', 'moon']" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ThemeSwitcher extends Vue {
  name: string = 'ThemeSwitcher'

  toggleTheme (event: Event): void {
    event.target.checked ? this.$set(this.$colorMode, 'preference', 'dark') : this.$set(this.$colorMode, 'preference', 'light')
  }
}
</script>

<style lang="scss" scoped>
  .theme-switcher {
    @apply inline-block;
    input {
      @apply hidden;
      & + label {
        @apply p-1 px-2 border border-secondary rounded-full bg-inverse-secondary;
        .icon {
          @apply cursor-pointer transition duration-300;
        }
      }

      &:checked + label {

        @apply bg-secondary border-inverse-secondary;

      }

      &:checked + label .icon-sun {
        @apply opacity-0;
      }

      &:not(:checked) + label .icon-moon {
        @apply opacity-0;
      }
    }
  }
</style>
