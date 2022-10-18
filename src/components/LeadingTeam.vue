<template>
  <section>
    <q-dialog v-model="teamStore.isBuzzer" position="top" persistent>
      <q-card style="min-width: 150px">
        <q-card-section class="">
          <q-img
            src="https://cdn-icons-png.flaticon.com/512/1333/1333410.png"
            spinner-color="primary"
            spinner-size="82px"
            style="height: 100%; width: 100%"
          />
          <div class="q-mt-md">
            <q-badge class="q-pa-sm" color="amber">
              <span class="text-bold text-capitalize text-h5">{{ teamStore.team?.name }}</span>
            </q-badge>
            <span class="text-h4 text-bold"> a la main</span>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import { useTeamStore } from 'src/stores/team';
import { ref } from 'vue';

export default {
  name: 'LeadingTeam',
  setup () {
    const teamStore = useTeamStore()
    const leadingTeamDialog = ref(true)

    return {
      teamStore,
      leadingTeamDialog
    }
  }
}
</script>
