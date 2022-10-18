<template>
  <section class="text-center">
    <q-btn 
      size="4em" 
      @click="buzzer()" 
      :disable="teamStore.isBuzzer" 
      push 
      round 
      :color="teamStore.isBuzzer ? 'negative' : 'positive'" 
      icon="room_service" />
  </section>
</template>

<script>
import { useTeamStore } from 'src/stores/team';
import { useQuasar } from 'quasar';

export default {
  name: 'BuzzerButton',
  setup () {
    const teamStore = useTeamStore()
    const $q = useQuasar()

    // METHODS

    const buzzer = () => {
      let team = $q.sessionStorage.getItem('team')
      teamStore.getLeadingTeam(team)
    }

    return {
      teamStore,

      buzzer
    }
  }
}
</script>
