import { acceptHMRUpdate } from "pinia";

export const useColor = defineStore('color', {
    state: () => ({
        lilac: '#BB86FC',
        lightBlue: '#7DD2F4',
        orange: '#F65933',
        areaColors : [
            { code: 'SPACE_MINING', color: '#F65933'},
            { code: 'SPACE_TOURISM', color: '#7DD2F4'},
            { code: 'SATELLITES', color: '#BB86FC'},
            { code: '', color: '#FFFFFF30'},
        ]
    }),

    getters: {
        getColorByAreaCode(state) {
          return (areaCode: string) => state.areaColors.find((r: any) => r.code === areaCode)?.color;
        },
      },

    actions: {

    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useColor, import.meta.hot))
}