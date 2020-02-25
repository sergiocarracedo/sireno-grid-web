<template>
  <div class="web-wrapper">
    <Header />

    <DemoBasic />

    <DemoContainers />

    <DemoStartEnd />

    <DemoOrder />

    <DemoGutters />

    <DemoFillers />

    <DemoHiddenVisible />

    <DemoEmbed />

    <DemoMargins />

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import DemoMargins from "../components/DemoMargins";
import DemoFillers from "../components/DemoFillers";
import DemoBasic from "../components/DemoBasic";
import DemoOrder from "../components/DemoOrder";
import DemoStartEnd from "../components/DemoStartEnd";
import DemoGutters from "../components/DemoGutters";
import DemoContainers from "../components/DemoContainers";
import DemoHiddenVisible from "../components/DemoHiddenVisible";
import DemoEmbed from "../components/DemoEmbed";
import Header from "~/components/Header";

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
    DemoFillers,
    DemoBasic,
    Header
  }
};
</script>
