<template>
  <section
    id="demo-embed"
    class="container-fluid-1440"
  >
    <h2>Responsive Embed iframe</h2>


    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-12">
          <div class="responsive-embed-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/l69Uz1vYbNU"
              frameborder="0"
              allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grid-demo">
      <div class="grid-row">
        <div class="col-xs-8">
          <div class="responsive-embed-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/l69Uz1vYbNU"
              frameborder="0"
              allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div class="col-xs-4">
          <div class="responsive-embed-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/l69Uz1vYbNU"
              frameborder="0"
              allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
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
  name: "DemoEmbed",
  data() {
    return {
      // prettier-ignore
      example: `<div class="responsive-embed-wrapper">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/l69Uz1vYbNU"
        frameborder="0"
        allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>`
    };
  }
};
</script>
