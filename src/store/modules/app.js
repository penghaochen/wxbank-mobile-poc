/**
 * @description 菜单标识配置文件
 */

const state = {
  show: false, // 遮罩标识
  rightText: ''// 标题右侧文字
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
