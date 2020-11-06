import { action } from "@storybook/addon-actions";
import { Button } from "svo";
import ButtonExamples from "svo/Button/Button.example.svelte";

export default {
  title: "Basic/Button",
  component: Button,
};

export const Default = () => ({
  Component: ButtonExamples,
  props: {
    spec: "Default",
  },
});
