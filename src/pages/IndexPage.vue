<template>
  <q-page class="relative-position">
    <section class="main absolute-center text-center">
      <article class="">
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        >
      </article>
      <article class="main__btn q-mt-lg">
        <q-btn color="primary" size="lg" rounded label="commencer" @click="onLoginDialog()" />
      </article>
    </section>

    <q-dialog v-model="isTeamLogin" persistent>
      <q-card class="q-pa-sm">
        <q-card-section class="items-center q-gutter-y-sm">
          <q-input outlined v-model="teamName" label="Nom de l'équipe" />
          <q-input outlined v-model="teamPwd" label="Mot de passe" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Retour" color="primary" v-close-popup />
          <q-btn :disable="!checkLogin" @click="onLogin()" label="Commencer" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useTeamStore } from 'src/stores/team';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  setup(){
    const router = useRouter()
    const $q = useQuasar()
    const isTeamLogin = ref(false)
    const teamStore = useTeamStore()
    const teamName = ref('')
    const teamPwd = ref('')

    // COMPUTED

    const checkLogin = computed(() => {
      return teamName.value != '' && teamPwd.value != ''
    })

    // METHODS
    const onLoginDialog = () => {
      isTeamLogin.value = true
    }
    const onLogin = () => {
      let team = { name: teamName.value, password: teamPwd.value }
      const result = teamStore.teamLogin(team)
      console.log(result)
      if (result) {
        console.log('OK')
        router.go()
      } else {
        $q.notify({
          message: 'Informations incorrect',
          position: 'top',
          type: 'negative'
        })
      }
    }

    return {
      isTeamLogin,
      teamName,
      teamPwd,
      checkLogin,

      onLoginDialog,
      onLogin
    }
  }
})
</script>

<style scoped lang="scss">
.main{
  
}
</style>
