<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  {#if weatherDetails}
    <div class="card-container">
      <Card style="width: 450px;">
        <PrimaryAction on:click={() => clicked++}>
          <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">{weatherDetails.name}</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">Land: {weatherDetails.sys.country} Id: {weatherDetails.sys.id}</h3>
            <List>
              {#each weatherDetails.weather as weatherEntry}
                <Item>
                  <img src="https://openweathermap.org/img/wn/{weatherEntry.icon}@2x.png" alt="Italian Trulli" width="50px">
                  <Text>expectation: {weatherEntry.main}; descr: {weatherEntry.description}</Text>
                </Item>
              {/each}
            </List>
          </Content>
        </PrimaryAction>
        <Actions>
          <!-- <ActionButtons>
            <Button on:click={() => clicked++}>
              <Label>Action</Label>
            </Button>
            <Button on:click={() => clicked++}>
              <Label>Another</Label>
            </Button>
          </ActionButtons>
          <ActionIcons>
            <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
          </ActionIcons> -->
        </Actions>
      </Card>
    </div>
    {:else}
    <p>.....loading.....</p>
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
    min-height: 500px;
    min-width: 380px;
    background-color: #ffffff;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .card-container.short {
    min-height: 400px;
  }
  * :global(.card-media-16x9) {
    background-image: url(https://via.placeholder.com/320x180.png?text=16x9);
  }
  * :global(.card-media-square) {
    background-image: url(https://via.placeholder.com/320x320.png?text=square);
  }
  .weatherImage {
    width: 50px;
    height: 50px;
    min-height: 30px;
    min-width: 30px;
  }
</style>