<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { peek, mod } from "./utils";

  export let width: number = 250;
  export let items: { value: string; color: string }[] = [];

  let curIndex = 0;
  let rightList = [];
  let leftList = [];
  let scrollIndex = 0;
  let isResetting = false;

  $: getIndex = mod(items.length);
  $: transformX = -scrollIndex * width;
  $: nextRightList = [
    ...rightList,
    getIndex(rightList[rightList.length - 1] + 1),
  ];
  $: nextLeftList = [getIndex(leftList[0] - 1), ...leftList];

  function onNext() {
    const isNearRightEdge = scrollIndex === rightList.length - 1;
    if (isNearRightEdge) rightList = nextRightList;
    scrollIndex++;
    curIndex++;
  }

  function onPrev() {
    const isNearLeftEdge = -scrollIndex === leftList.length - 1;
    if (isNearLeftEdge) leftList = nextLeftList;
    scrollIndex--;
    curIndex--;
  }

  function resetBufferList() {
    scrollIndex = 0;
    rightList = [getIndex(curIndex), getIndex(curIndex + 1)];
    leftList = [getIndex(curIndex - 1)];
    isResetting = true;
    setTimeout(() => (isResetting = false));
  }

  const keydownHandler = (e) => {
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  };

  onMount(() => {
    resetBufferList();
    window.addEventListener("keydown", keydownHandler);
  });
  onDestroy(() => window.removeEventListener("keydown", keydownHandler));
</script>

<style lang="scss">
  .carousel {
    &-container {
      overflow: hidden;
    }
    &-wrapper {
      display: flex;
      transition: transform 300ms ease;
    }
    &-left-list {
      display: flex;
      position: absolute;
      top: 0;
    }
    &-item {
      flex-shrink: 0;
    }
  }
  .example-item {
    height: 150px;
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: white;
  }
</style>

<div>
  <p>current index: {curIndex}</p>
  <p>steel index: {scrollIndex}</p>
  <p>buffer array: {JSON.stringify(rightList)}</p>
  <p>prev buffer array: {JSON.stringify(leftList)}</p>

  <button on:click={onPrev}>prev</button>
  <button on:click={onNext}>next</button>

  <div class="carousel-container" style="width: {width}px">
    <div
      class="carousel-wrapper"
      style="transform: translateX({transformX}px); {isResetting ? 'transition: none;' : ''};"
      on:transitionend={resetBufferList}>
      <div class="carousel-left-list" style="right: {width}px">
        {#each peek(items, leftList) as item}
          <div class="carousel-item">
            <div
              class="example-item"
              style="width: {width}px; background-color: {item.color}">
              {item.value}
            </div>
          </div>
        {/each}
      </div>
      {#each peek(items, rightList) as item}
        <div class="carousel-item">
          <div
            class="example-item"
            style="width: {width}px; background-color: {item.color}">
            {item.value}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
