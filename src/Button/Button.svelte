<script lang="ts">
  export let onClick = () => {};
</script>

<style lang="scss">
  button {
    border: 0;
    padding: 8px 16px;
    background-color: blueviolet;
    opacity: 0.8;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    &:focus {
      outline: none;
    }
  }
</style>

<button on:click={onClick}><slot /></button>
