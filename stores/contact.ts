import { acceptHMRUpdate } from "pinia";

export const useContact = defineStore('contact', {
  state: () => ({
    email: 'venture.agency@mail.com',
    address: 'Something Street N',
    phoneNumbers: [
        '+39 333 12345678',
        '+39 333 12345678'
    ] as string[],
  }),

  getters: {
    getEmail: (state) => state.email,
    getAddress: (state) => state.address,
    getPhoneNumbers: (state) => state.phoneNumbers,
  },

  actions: {
  },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useContact, import.meta.hot))
  }