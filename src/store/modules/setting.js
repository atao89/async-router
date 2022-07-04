export default {
    namespaced: true,
    // 状态
    state: {
        isCollapse: false,
        updateList: false,
    },
    // 使用store.commit来调用
    mutations: {
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        changeUpdateList(state, data) {
            state.updateList = data
        },
    },
    // 使用用store.dispatch来调用
    actions: {
        changeUpdateList(context, data) {
            context.commit("changeUpdateList", data);
        },
    }
}