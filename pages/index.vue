<template>
  <div class="web-wrapper">
    <Header />

    <DemoBasic />

    <DemoStartEnd />

    <DemoOrder />

    <DemoGutters />

  </div>
</template>

<script>
  import Header from '~/components/Header'
  import DemoBasic from "../components/DemoBasic";
  import DemoOrder from "../components/DemoOrder";
  import DemoStartEnd from "../components/DemoStartEnd";
  import DemoGutters from "../components/DemoGutters";


  export default {
    components: {
      DemoGutters,
      DemoStartEnd,
      DemoOrder,
      DemoBasic,
      Header
    }
  }
</script>
