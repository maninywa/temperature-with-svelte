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
    gridHelp.item({ x: 0, y: 0, w: 1, h: 1, id: id() }),
    gridHelp.item({ x: 2, y: 0, w: 1, h: 1, id: id() }),
    gridHelp.item({ x: 0, y: 2, w: 1, h: 1, id: id() }),
    gridHelp.item({ x: 2, y: 2, w: 1, h: 1, id: id() })
    ];
</script>

<Grid {items_arr} bind:items={items_arr} cols={8} let:item rowHeight={200} gap={10}>
  <WeatherCard style="background: {item.static ? '#cce' : '#ccc'};border:1px solid black;"/>
</Grid>




<style>
  :global(.svlt-grid-shadow) {
    background: pink;
  }
  :global(.svlt-grid-container) {
    background: white;
  }
  .link {
    display: flex;
    padding-bottom: 20px;
  }
  .link a {
    margin-left: 10px;
  }
</style>
