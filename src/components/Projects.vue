<template>
<div>
  <b-card-group deck>

    <b-card title="SlashRoles">
    <b-card-img src="/slashroles.png" alt="SlashRoles Logo" class="w-25 rounded-circle"></b-card-img>
    <br>
    <br>
      <b-card-text>
          SlashRoles is a slash command bot that lets you setup options in the Slash Command menu to assign roles. By running <code>/create</code>, you can select a role to assign, and the title and description to show in the Slash Command menu. When someone runs that command, they'll be granted the role you selected, (if provided) and a custom message shown. You can remove an option by using <code>/delete</code>, and the data related to it will be deleted.
      </b-card-text>
    </b-card>

    <b-card title="BanSync">
    <b-card-img src="/bansync.png" alt="BanSync Logo" class="w-25 rounded-circle"></b-card-img>
    <br>
    <br>
      <b-card-text>
          Help keep out possible troublemakers from your server by knowing user's previous bans, or by linking your servers together to sync bans within them. Learn more at <a href="https://bansync.dcode.site">https://bansync.dcode.site</a>
      </b-card-text>
    </b-card>

    <b-card title="SlashNotes">
    <b-card-img src="/slashnotes.png" alt="SlashNotes Logo" class="w-25 rounded-circle"></b-card-img>
    <br>
    <br>
      <b-card-text>
          SlashNotes is a basic bot that you can use to store notes using Discord's Slash Commands UI. It was mainly a side project I did in my free time. You can <a href="https://discord.com/oauth2/authorize?client_id=799921906047647744&scope=bot%20applications.commands">invite it</a> or <a href="https://github.com/TechGeekGamer/SlashNotes">view the source code</a>.
      </b-card-text>
    </b-card>
    
  </b-card-group>
</div>
</template>
<script>
export default {
    name:"Projects"
}
</script>