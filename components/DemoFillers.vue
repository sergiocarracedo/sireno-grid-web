<template>
  <section
    id="demo-fillers"
  >
    <div class="container-fluid-1440 mb-5">
      <div class="grid-row">
        <div class="col-xs-12 text-center">
          <h2>Col Fillers</h2>

          <p class="mb-1">
            <i>Col Fillers</i> are similar to containers but they have 2 grid cols outside content. This allow to you, set different colors in each outside column.
          </p>

          <p class="mb-1">
            There are 3 predefined content sizes:
          </p>
          <ul class="mb-2">
            <li>.grid-filler-1240</li>
            <li>.grid-filler-1140</li>
            <li>.grid-filler-1440</li>
          </ul>

          <p class="mb-1">
            You can create own:
          </p>
        </div>
      </div>
      <div class="grid-row">
        <div class="col-xs-12">
          <pre>
            {{ ownExample }}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-demo mb-5">
      <div class="grid-filler grid-filler-1140">
        <div class="grid-col-filler grid-left-filler" />
        <div class="grid-filler-container">
          <div class="grid-row">
            <div class="col-xs-6">
              <div class="box">
                col-xs-6
              </div>
            </div>

            <div class="col-xs-6">
              <div class="box">
                col-xs-6
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-xs-6 col-sm-4">
              <div class="box">
                col-xs-6 col-sm-4
              </div>
            </div>

            <div class="col-xs-6 col-sm-4">
              <div class="box">
                col-xs-6 col-sm-4
              </div>
            </div>

            <div class="col-xs-12 col-sm-4">
              <div class="box">
                col-xs-12 col-sm-4
              </div>
            </div>
          </div>
        </div>
        <div class="grid-col-filler grid-right-filler" />
      </div>
    </div>

    <div class="container-fluid-1440">
      <div class="grid-row">
        <div class="col-xs-12">
          <div class="mb-5">
            <pre>{{ orderExample }}</pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DemoFillers",
  data() {
    return {
      // prettier-ignore
      orderExample: `<div class="grid-filler grid-filler-1140">
  <div class="grid-col-filler grid-left-filler"></div>
  <div class="grid-filler-container">
    <div class="grid-row">
      <div class="col-xs-6">
        ...
      </div>

      <div class="col-xs-6">
        ...
      </div>
    </div>
    ...
   </div>
  <div class="grid-col-filler grid-right-filler"></div>
</div>`,
      ownExample: `
.grid-filler-1500 {
    @supports (display: grid) {
      grid-template-columns: auto minmax(0, 1500px) auto;
    }
    .grid-filler-container {
      max-width: 1500px;
    }
  }

/* OR use mixin */

@include make-grid-filler-size(1500);`
    };
  }
};
</script>
