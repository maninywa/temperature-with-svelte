<script>
  import Textfield from '@smui/textfield';

  export let name = '';
  export let email = '';
  export let comment = '';
</script>

<Textfield bind:value={name} label="Name" />