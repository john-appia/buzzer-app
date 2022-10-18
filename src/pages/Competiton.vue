<template>
  <q-page padding class="window-height">
    <!-- content -->
    <LeadingTeam></LeadingTeam>
    <section class="teams-card q-pa-md">
      <TeamList></TeamList>
    </section>
    <section class="my-buzzer">
      <q-separator spaced inset/>
      <BuzzerButton></BuzzerButton>
    </section>

    <!-- <q-dialog v-model="leadingTeamDialog" position="top">
      <q-card>
        <q-card-section class="">
          <q-img
            src="https://cdn-icons-png.flaticon.com/512/1333/1333410.png"
            spinner-color="primary"
            spinner-size="82px"
            style="height: 100px; width: 100px"
          />
        </q-card-section>
      </q-card>
    </q-dialog> -->
  </q-page>
</template>

<script>
import TeamList from 'src/components/TeamList.vue';
import BuzzerButton from 'src/components/BuzzerButton.vue';
import LeadingTeam from 'src/components/LeadingTeam.vue';
import { ref } from 'vue';

export default {
    name: "PageCompetition",
    components: { TeamList, BuzzerButton, LeadingTeam },
    setup(){
      const leadingTeamDialog = ref(true)

      return{
        leadingTeamDialog
      }
    }
}
</script>

<style scoped lang="scss">
.teams-card{
  height: 60%;
}
.my-buzzer{
  height: 35%;
}
</style>
