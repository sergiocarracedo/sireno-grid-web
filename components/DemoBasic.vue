<template>
  <section
    id="demo-simple"
    class="container-fluid-1440"
  >
    <h2>Basic usage</h2>
    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-12 col-sm-1">
          .col-xs-12 .col-sm-1
        </div>
        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
          .col-xs-12 .col-sm-6 .col-md-5 .col-lg-4
        </div>
        <div class="col-xs-12 col-sm-5 col-md-6 col-lg-7">
          .col-xs-12 .col-sm-5 .col-md-6 .col-lg-7
        </div>
      </div>
      <div class="grid-row">
        <div class="col-xs-12 col-sm-1">
          .col-xs-12 .col-sm-1
        </div>
        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
          .col-xs-12 .col-sm-10
        </div>
        <div class="col-xs-12 col-sm-5 col-md-6 col-lg-7">
          .col-xs-12 .col-sm-1
        </div>
      </div>
    </div>

    <div class="mb-5">
      <!-- prettier-ignore -->
      <pre>&lt;div class="grid-row"&gt;
  &lt;div class="col-xs-12 col-sm-1"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="col-xs-12 col-sm-6 col-md-5 col-lg-4"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="col-xs-12 col-sm-5 col-md-6 col-lg-7"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
  </section>
</template>

<script>
export default {
  name: "DemoBasic"
};
</script>
