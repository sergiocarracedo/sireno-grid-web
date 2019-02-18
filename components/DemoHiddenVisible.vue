<template>
  <section
    id="demo-offset"
    class="container-fluid-1440"
  >
    <h2>Hidden / Visible</h2>
    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-12 col-sm-2 hidden-xs hidden-sm">
          <b>A</b> col-xs-12 hidden-xs hidden-sm
        </div>
        <div class="col-xs-12 col-sm-3 visible-lg">
          <b>B</b> col-xs-12 col-sm-3 visible-lg
        </div>
        <div class="col-xs-12 col-sm-3 hidden-lg">
          <b>C</b> col-xs-12 col-sm-3 hidden-lg
        </div>
        <div class="col-xs-12 col-sm-2">
          <b>D</b> col-xs-12 col-sm-2
        </div>
        <div class="col-xs-12 col-sm-2">
          <b>E</b> col-xs-12 col-sm-2
        </div>
      </div>
    </div>
    <div class="mb-5">
      <pre>{{ example }}</pre>
    </div>
  </section>
</template>

<script>
export default {
  name: "DemoHiddenVisible",
  data() {
    return {
      // prettier-ignore
      example: `<div class="grid-row">
    <div class="col-xs-12 col-sm-2 hidden-xs hidden-sm">
      A
    </div>
    <div class="col-xs-12 col-sm-3 visible-lg">
      B
    </div>
    <div class="col-xs-12 col-sm-3 hidden-lg">
      C
    </div>
    <div class="col-xs-12 col-sm-2">
      D
    </div>
    <div class="col-xs-12 col-sm-2">
      E
    </div>
  </div>`
    };
  }
};
</script>
