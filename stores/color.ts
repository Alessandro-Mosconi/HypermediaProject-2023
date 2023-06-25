import { acceptHMRUpdate } from "pinia";

export const useContact = defineStore('color', {
    state: () => ({
        lilac: '#BB86FC',
        lightBlue: '#7DD2F4',
        orange: '#F65933',
    }),



    getters: {
        /*
        getEmail: (state) => state.email,
        getAddress: (state) => state.address,
        getPhoneNumbers: (state) => state.phoneNumbers,*/
    },

    actions: {

    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useContact, import.meta.hot))
}