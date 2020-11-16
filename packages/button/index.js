import LSbutton from "./src/button.vue"
// 为组件提供 install 安装方法，供按需引入
LSbutton.install = function (Vue) {
  Vue.component(LSbutton.name, LSbutton)
}
// 导出组件
export default LSbutton