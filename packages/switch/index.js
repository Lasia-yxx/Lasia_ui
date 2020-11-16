import LSswitch from "./src/switch.vue"
// 为组件提供 install 安装方法，供按需引入
LSswitch.install = function (Vue) {
  Vue.component(LSswitch.name, LSswitch)
}
// 导出组件
export default LSswitch