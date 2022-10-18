import { defineStore } from 'pinia';
import { SessionStorage } from 'quasar';

export const useTeamStore = defineStore('team', {
  state: () => ({
    teams: [
      { name: 'team1', password: '1' }, 
      { name: 'team2', password: '2' },
      { name: 'team3', password: '3' },
      { name: 'team4', password: '4' },
      { name: 'team5', password: '5' },
    ],
    team: null,
    buzzed: false
  }),
  getters: {
    isBuzzer: (state) => state.buzzed
  },
  actions: {
    getLeadingTeam(payload){
      this.teams.forEach(team =>{
        if (team.name === payload.name && team.password === payload.password) {
          this.$patch({ team: team })
          this.$patch({ buzzed: true })
        }
      })
    },
    teamLogin(payload){
      this.teams.forEach(team =>{
        if (team.name === payload.name && team.password === payload.password) {
          SessionStorage.set('team', team)
          console.log(team)
        }
      })
      let value = SessionStorage.getItem('team')
      console.log('session value', value)
      return !!value
    },
    logout(){
      SessionStorage.clear()
    }
  },
});
