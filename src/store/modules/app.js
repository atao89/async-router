export default {
    namespaced: true,
    // 状态
    state: {
        device: sessionStorage.getItem('DEVICE')
    },
    // 使用store.commit来调用
    mutations: {
        SET_DEVICE(state, device) {
            state.device = device
        },
    },
    // 使用用store.dispatch来调用
    // actions: {
    //     SET_DEVICE(context, device) {
    //         context.commit("SET_DEVICE", device);
    //     },
    // }
}