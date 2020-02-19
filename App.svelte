<WeatherCard/>


<script>
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import WeatherCard from './components/WeatherCard.svelte';
</script>

<style>
  .top-app-bar-container, .top-app-bar-iframe {
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    border: 1px solid rgba(0,0,0,.1);
    margin: 0 18px 18px 0;
  }
  .top-app-bar-container {
    overflow: auto;    
    display: inline-block;
  }
  .flexy {
    display: flex;
    flex-wrap: wrap;
  }
  .flexor {
    display: inline-flex;
    flex-direction: column;
  }
  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style>