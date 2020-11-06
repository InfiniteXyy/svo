import { action } from "@storybook/addon-actions";
import Button from "@/Button";
import ButtonExamples from "@/Button/Button.example.svelte";

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
