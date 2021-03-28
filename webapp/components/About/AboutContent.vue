<template>
  <section>
    <header class="skew main-section">
      <div class="container">
        <p>
          Au départ simple autodidacte, je découvre et apprend la programmation
          par curiosité.
        </p>
        <p class="mt-8">
          C’est au cours de la découverte du web et du logiciel libre, que par
          ailleurs j’utilisais déjà beaucoup, que je commence à comprendre les
          dangers pour la liberté et la vie privée que peuvent représenter les
          entreprises qui proposent des services que j’utilisais au quotidien.
        </p>
      </div>
    </header>
    <AboutTechnologies />
  </section>
</template>

<style lang="scss">
h1 {
  @apply mb-10;
}

p {
  @apply text-xl text-center;
}

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
