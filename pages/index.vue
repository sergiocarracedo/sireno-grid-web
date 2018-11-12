<template>
  <div class="web-wrapper">
    <Header />

    <DemoBasic />

    <DemoContainers />

    <DemoStartEnd />

    <DemoOrder />

    <DemoGutters />

    <DemoHiddenVisible />

    <DemoEmbed />

    <DemoMargins />

    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import DemoBasic from "../components/DemoBasic";
  import DemoOrder from "../components/DemoOrder";
  import DemoStartEnd from "../components/DemoStartEnd";
  import DemoGutters from "../components/DemoGutters";
  import DemoContainers from "../components/DemoContainers";
  import DemoHiddenVisible from "../components/DemoHiddenVisible";
  import DemoEmbed from "../components/DemoEmbed";
  import DemoMargins from "../components/DemoMargins";
  import Footer from "../components/Footer";


  export default {
    components: {
      Footer,
      DemoMargins,
      DemoEmbed,
      DemoHiddenVisible,
      DemoContainers,
      DemoGutters,
      DemoStartEnd,
      DemoOrder,
      DemoBasic,
      Header
    }
  }
</script>
