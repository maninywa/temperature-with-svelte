<script>
  import Grid from "svelte-grid";
  import gridHelp from "svelte-grid/build/helper/index.mjs"; 
  import WeatherCard from './components/WeatherCard.svelte';

  const id = () =>
  "_" +
  Math.random()
    .toString(36)
    .substr(2, 9);
  
  let items_arr = [
    gridHelp.item({ x: 0, y: 0, w: 1, h: 2, id: id(), static: true }),
    gridHelp.item({ x: 1, y: 0, w: 1, h: 2, id: id(), static: true }),
    gridHelp.item({ x: 2, y: 0, w: 1, h: 2, id: id(), static: true }),
    gridHelp.item({ x: 3, y: 0, w: 1, h: 2, id: id(), static: true })
    ];
</script>

<Grid {items_arr} bind:items={items_arr} cols={4} let:item rowHeight={100} gap={10}>
  <WeatherCard style="background: {item.static ? '#cce' : '#ccc'};"/>
</Grid>




<style>
  :global(.svlt-grid-shadow) {
    background: pink;
  }
  :global(.svlt-grid-container) {
    background: white;
  }
</style>
