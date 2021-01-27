export const state = () => ({
  items: [{ label: "◯◯" }]
});

export const mutations = {
  wetherAdd(state, text) {
    state.items.unshift({
      label: text
    });
    state.items.pop();
  }
};
