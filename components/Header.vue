<template>
  <section id="header" class="container-fluid-1440">
    <header>
      <h1>
        <img src="/logo.png" alt="&#x1F9DC;&#x200D; Sireno Grid" />
      </h1>
      <h3>
        A grid system based on the
        <a href="https://caniuse.com/#search=grid">
          grid
        </a>
        display property with
        <a href="http://caniuse.com/#search=flexbox">
          <em>flex</em>
        </a>
        fallback for unsupported browsers.
      </h3>

      <div class="vigotech-wrapper">
        <a href="https://vigotech.org" class="vigotech-claim">
          Made with
          <i class="vt-pinecone" />
          in <strong>Vigo</strong>
        </a>
      </div>
    </header>

    <div class="text-center mb-4">
      <a
        class="btn btn-wide"
        href="https://github.com/sergiocarracedo/sireno-grid"
      >
        GitHub
      </a>

      <a class="btn btn-wide" href="https://www.npmjs.com/package/sireno-grid">
        Npm
      </a>
    </div>

    <div class="mb-4">
      <!-- prettier-ignore -->
      <pre>
npm i sireno-grid --save
  // or
yarn add sireno-grid</pre>
    </div>

    <div class="mb-3">
      <p class="mb-1">
        Logo design by
        <a href="https://pedrofigueras.com" class="sponsor-wrapper-pf">
          <img src="/pedrofigueras.png" alt="Pedro Figueras" class="sponsor" />
        </a>
      </p>
      <p class="sponsor-p-browserstack">
        Browser test thanks to
        <a
          href="https://www.browserstack.com/"
          class="sponsor-wrapper-browserstack"
        >
          <img
            src="/browserstack-logo-600x315.png"
            alt="BrowserStack"
            class="sponsor"
          />
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header"
};
</script>
