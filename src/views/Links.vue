<template>
  <b-container>
    <h1>My Links</h1>

    <b-list-group style="max-width: 300px;" class="mx-auto">
      <b-list-group-item href="https://github.com/TechGeekGamer" class="d-flex align-items-center">
        <b-avatar class="mr-3" src="/github-logo.png" style="background-color: white;"></b-avatar>
        <span class="mr-auto">GitHub</span>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="https://twitter.com/techgeekgamer">
        <b-avatar variant="info" src="/twitter-logo.png" class="mr-3"></b-avatar>
        <span class="mr-auto">Twitter</span>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center" href="https://discord.com/users/461560462991949863">
        <b-avatar variant="info" src="/discord-logo.png" class="mr-3" style="background-color: white;"></b-avatar>
        <span class="mr-auto">Discord</span>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
}
</script>