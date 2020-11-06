<script lang="ts">
  import { Carousel } from "..";

  const items = [
    { value: "1", color: "yellowgreen" },
    { value: "2", color: "blueviolet" },
    { value: "3", color: "orangered" },
  ];
</script>

<style lang="scss">
</style>

<h3>press leftArrow or rightArrow to slide</h3>
<Carousel {items} />
