
vue init webpack-simple 项目名字

npm install vuex

-------------------

学习知识点：
Vuex 推荐 在action中 commit('mutation动作',payload) 的方式触发修改,
 不过也可以使用不规范的方式 如在直接 dispatch('mutation动作',payload) 也可以实现，不过这种写法 就不可以在Vue-devtools 工具里 捕获 vuex 数据变换，一般建议使用 上面的方法；

简单了解 state / getters / mutations / actions 等 对应的关系以及用法
 