<template>
  <section id="demo-offset" class="container-fluid-1440">
    <h2>Order columns</h2>
    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-12 col-sm-2">
          <div class="box">
            <b>A</b>
            col-xs-12 col-sm-2
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="box">
            <b>B</b>
            col-xs-12 col-sm-4
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="box">
            <b>C</b>
            col-xs-12 col-sm-3
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="box">
            <b>D</b>
            col-xs-12 col-sm-2
          </div>
        </div>
        <div class="col-xs-12 col-sm-2">
          <div class="box">
            <b>E</b>
            col-xs-12 col-sm-2
          </div>
        </div>
      </div>

      <div class="grid-row">
        <div class="col-xs-12 col-sm-2 col-sm-order-2">
          <div class="box">
            <b>A</b>
            ... col-sm-order-2
          </div>
        </div>
        <div class="col-xs-12 col-sm-3 col-sm-order-4">
          <div class="box">
            <b>B</b>
            ... col-sm-order-4
          </div>
        </div>
        <div class="col-xs-12 col-sm-3 col-sm-order-1">
          <div class="box">
            <b>C</b>
            ... col-sm-order-1
          </div>
        </div>
        <div class="col-xs-12 col-sm-2 col-sm-order-5">
          <div class="box">
            <b>D</b>
            ... col-sm-order-5
          </div>
        </div>
        <div class="col-xs-12 col-sm-2 col-sm-order-3">
          <div class="box">
            <b>E</b>
            ... col-sm-order-3
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
  name: "DemoOrder",
  data() {
    return {
      // prettier-ignore
      orderExample: `<div class="grid-row">
  <div class="col-xs-12 col-sm-2 col-sm-order-2">
    A
  </div>
  <div class="col-xs-12 col-sm-2 col-sm-order-4">
    B
  </div>
  <div class="col-xs-12 col-sm-3 col-sm-order-1">
    C
  </div>
  <div class="col-xs-12 col-sm-4 col-sm-order-5">
    D
  </div>
  <div class="col-xs-12 col-sm-1 col-sm-order-3">
    E
  </div>
</div>
        `
    };
  }
};
</script>
