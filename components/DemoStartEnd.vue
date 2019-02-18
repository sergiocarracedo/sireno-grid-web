<template>
  <section
    id="demo-startend"
    class="container-fluid-1440"
  >
    <h2>End column position</h2>
    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-6 col-xs-end-6 col-sm-4 col-sm-end-6">
          col-xs-6 col-xs-end-6 col-sm-4 col-sm-end-6
        </div>
      </div>
      <div class="grid-row">
        <div class="col-xs-6 col-xs-end-10">
          col-xs-6 col-xs-end-10
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
  name: "DemoStartEnd",
  data() {
    return {
      // prettier-ignore
      orderExample: `<div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-6 col-xs-end-6 col-sm-4 col-sm-end-8">
          col-xs-6 col-xs-end-6 col-sm-4 col-sm-end-8
        </div>
      </div>
      <div class="grid-row">
        <div class="col-xs-6 col-xs-end-10">
          col-xs-6 col-xs-end-10
        </div>
      </div>
    </div>
  </div>`
    };
  }
};
</script>
