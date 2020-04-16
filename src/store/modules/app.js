/**
 * @description 菜单标识配置文件
 */

const state = {
  show: false,
  rightText: ''
}

const mutations = {
  SET_RIGHTTEXT: (state, text) => {
    state.rightText = text
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
