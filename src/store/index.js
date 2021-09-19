import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardPoints: Array.from({length:7}, (element, index_row) => (
        Array.from({length:4}, (element, index) => (
            { background: "bg-gray-400", pointer:index, active: index_row  == 0 ? true : false, row: index_row, cracked:false }
        ))
    )),
    showModal:false,
    activePoint:null,
    colors:[
        {
            slug:"Grey",
            background: 'bg-gray-900',
        },
        {
            slug:"Red",
            background: 'bg-red-500',
        },
        {
            slug:"Yellow",
            background: 'bg-yellow-200',
        },
        {
            slug:"Orange",
            background: 'bg-yellow-600',
        },
        {
            slug:"Brown",
            background: 'bg-yellow-900',
        },
        {
            slug:"Aqua",
            background: 'bg-green-200',
        },
        {
            slug:"Green",
            background: 'bg-green-500',
        },
        {
            slug:"Camo",
            background: 'bg-green-900',
        },
        {
            slug:"Light Blue",
            background: 'bg-blue-300',
        },
        {
            slug:"Blue",
            background: 'bg-blue-600',
        },
        {
            slug:"Purple",
            background: 'bg-purple-600',
        },
        {
            slug:"Pink",
            background: 'bg-pink-400',
        },
        
    ],
    code:null,
    currentRow:null,
    attemps:0,
    pointer:null,
    codeCracked:false,
    youLose:false,
  },
  getters:{
        colors: state => {
          return state.colors
        },
        showModal: state => {
            return state.showModal
        },
        code: state => {
            return state.code
        },
        pointer: state => {
            return state.pointer
        },
        boardPoints: state => {
            return state.boardPoints
        },
        currentRow:state => {
            return state.currentRow
        },
        activeRow:state => {
            return state.activeRow
        },
        codeCracked:state => {
            return state.codeCracked
        },
        youLose:state => {
            return state.youLose
        }
  },
  mutations: {
      showModal(state, data){
        state.showModal = data.item
        state.activePoint =  data.pointer
      },
      needAHand(state, data){
        state.needAHand = data
        // state.activePoint =  data.pointer
      },
      youLose(state, data){
        this.commit('startPlaying')
        state.youLose = data
      },
      codeCracked(state, data){
        this.commit('startPlaying')
        state.codeCracked = data
      },
      startPlaying(state){
        state.currentRow = 0;
        state.attemps = 0;
        state.activePoint = 0;      
        state.boardPoints = Array.from({ length:7 }, (element, index_row) => (
            Array.from({length:4}, (element, index) => (
                { background: "bg-gray-400", pointer:index, active: index_row  == 0 ? true : false, row: index_row, cracked: false}
            ))
        ))
        state.code = Array.from({ length: 4 }, (element, index) => ({...state.colors[Math.floor(Math.random() * state.colors.length)], pointer:index, hidden: true})   );
      },

      checkIfCracked(state){
        let cracked = state.code.filter( (code_point) => {
            return state.boardPoints[state.currentRow].some( (board_point) => {
                if(code_point.pointer === board_point.pointer && code_point.background === board_point.background){
                    board_point.cracked = true
                }
                return code_point.pointer === board_point.pointer && code_point.background === board_point.background
            })
        })
        if(cracked.length == 4){
            state.codeCracked = true    
        } else {
            if(state.currentRow == 6){
                state.attemps = 0;
                state.youLose = true
            } else {
                state.attemps = 0;
                state.currentRow = state.currentRow + 1;
                state.boardPoints[state.currentRow].map(el => el.active = true);
            }
        }
      },
      selectColor(state, data){
          state.boardPoints[state.currentRow][state.activePoint].background = data.item.background
          state.boardPoints[state.currentRow][state.activePoint].active = false
          state.attemps = state.attemps + 1;
          state.showModal = false;
          if(state.attemps == 4){
              this.commit('checkIfCracked')
          }
      }
  },
  modules: {
  }
})