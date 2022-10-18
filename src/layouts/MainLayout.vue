<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Buzzer App
        </q-toolbar-title>
        <!-- <span>{{ teamInfo ? teamInfo.name : '' }}</span> -->
        <q-btn flat no-caps="" v-if="teamInfo" color="white" :label="teamInfo.name">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item @click="logout()" clickable v-close-popup>
              <q-item-section>Quitter</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import { useTeamStore } from 'src/stores/team';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const teamStore = useTeamStore()

    const teamInfo = computed(() => {
      return $q.sessionStorage.getItem('team')
    })

    const logout = () => {
      teamStore.logout()
      router.go()
    }

    return {
      teamInfo,
      teamStore,

      logout
    }
  }
})
</script>
