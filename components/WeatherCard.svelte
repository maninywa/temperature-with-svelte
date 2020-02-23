<section>
  {#if weatherDetails}
    <div class="card-container">
      <Card style="width: 50%;">
        <PrimaryAction>
          <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">{weatherDetails.name}</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">{weatherDetails.sys.country} ({weatherDetails.sys.id})</h3>
            {weatherDetails.weather[0].main}, {weatherDetails.weather[0].description}
            <img src="https://openweathermap.org/img/wn/{weatherDetails.weather[0].icon}@2x.png" alt="Italian Trulli" width="50px">
          </Content>
        </PrimaryAction>
        <!-- <Actions> -->
          <!-- <ActionButtons>
            <Button >
              <Label>Action</Label>
            </Button>
            <Button >
              <Label>Another</Label>
            </Button>
          </ActionButtons>
          <ActionIcons>
            <IconButton  toggle aria-label="Add to favorites" title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons"  title="Share">share</IconButton>
            <IconButton class="material-icons"  title="More options">more_vert</IconButton>
          </ActionIcons> -->
        <!-- </Actions> -->
      </Card>
    </div>
    {:else}
    <p>.....loading weather cards.....</p>
  {/if}
</section>

<script>
  import { onMount } from "svelte";
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  import Button, {Label} from '@smui/button';
  import IconButton, {Icon} from '@smui/icon-button';
  import List, {Item, Text, Graphic} from '@smui/list';

  let weatherDetails;
  
  onMount(async()=>{
    const zip = '86150', 
    appid = '2b015c78c42b316407812b7344742790',
     response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},de&appid=${appid}&lang=de`);

      const currentWheater = await response.json();
      weatherDetails = currentWheater;
      console.log(weatherDetails);
  });

</script>

<style>
  .card-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    min-width: 300px;
    background-color: white;
    /* margin-right: 20px;
    margin-bottom: 20px; */
  }
</style>