<template>
  <section
    id="demo-gutters"
    class="container-fluid-1440"
  >
    <h2>Gutters / grid-gap</h2>
    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-6 col-sm-4 no-gutter-right-sm">
          <div class="box">
            col-xs-6 col-sm-4 no-gutter-right-sm
          </div>
        </div>

        <div class="col-xs-6 col-sm-4 no-gutters-sm">
          <div class="box">
            col-xs-6 col-sm-4 no-gutters-sm
          </div>
        </div>

        <div class="col-xs-6 col-sm-4">
          <div class="box">
            col-xs-6 col-sm-4
          </div>
        </div>
      </div>
      <div class="grid-row">
        <div class="col-xs-12 no-gutters">
          <div class="box">
            col-xs-12 no-gutters
          </div>
        </div>
      </div>

      <div class="grid-row">
        <div class="col-xs-12 col-sm-4 no-gutters gutter-left-sm">
          <div class="box">
            col-xs-12 no-gutters gutter-left-sm
          </div>
        </div>

        <div class="col-xs-12 col-sm-4 no-gutters-sm gutters-lg">
          <div class="box">
            col-xs-12 col-sm-4 no-gutter-right-sm gutters-lg
          </div>
        </div>

        <div class="col-xs-12 col-sm-4 no-gutter-left-sm">
          <div class="box">
            col-xs-12 col-sm-4 no-gutter-right-sm
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <pre>{{ orderExample }}</pre>
    </div>
  </section>
</template>

<script>
export default {
  name: "DemoGutters",
  data() {
    return {
      // prettier-ignore
      orderExample: `<div class="grid-row">
  <div class="col-xs-6 col-sm-4 no-gutter-right-sm">
    ...
  </div>

  <div class="col-xs-6 col-sm-4 no-gutters-sm">
    ...
  </div>

  <div class="col-xs-6 col-sm-4">
    ...
  </div>
</div>

<div class="grid-row">
  <div class="col-xs-12 no-gutters">
    ...
  </div>
</div>

<div class="grid-row">
  <div class="col-xs-12 col-sm-4 no-gutters gutter-left-sm">
  ...
  </div>

  <div class="col-xs-12 col-sm-4 no-gutters-sm gutters-lg">
    ...
  </div>

  <div class="col-xs-12 col-sm-4 no-gutter-left-sm">
    ...
  </div>
</div>`
    };
  }
};
</script>
