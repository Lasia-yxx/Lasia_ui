import LSstatistics from "./src/num-statistics.vue"
// 为组件提供 install 安装方法，供按需引入
LSstatistics.install = function (Vue) {
  Vue.component(LSstatistics.name, LSstatistics)
}
// 导出组件
export default LSstatistics