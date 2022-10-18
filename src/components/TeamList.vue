<template>
  <div class="q-gutter-sm">
    <q-badge class="q-pa-sm" :color="randomTeamColor()" v-for="(team, i) in teamStore.teams" :key="i">
      <span class="text-bold text-capitalize text-h5">{{ team.name }}</span>
    </q-badge>
  </div>
</template>

<script>
import { useTeamStore } from 'src/stores/team';

const teamColor = [
  'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue',
  'cyan', 'teal', 'green', 'light-green', 'lime', 'amber', 'orange', 
  'deep-orange', 'brown', 'grey-9', 'blue-grey'
]
export default {
  name: 'TeamList',
  setup () {
    const teamStore = useTeamStore()

    // METHODS

    const randomTeamColor = () => {
      return teamColor[Math.floor(Math.random() * teamColor.length)]
    }
    return {
      teamStore,

      randomTeamColor
    }
  }
}
</script>
