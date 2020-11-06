import { action } from "@storybook/addon-actions";
import { Carousel } from "svo";
import CarouselExample from "svo/Carousel/Carousel.example.svelte";

export default {
  title: "Component/Carousel",
  component: Carousel,
};

export const Default = () => ({
  Component: CarouselExample,
  props: {},
});
