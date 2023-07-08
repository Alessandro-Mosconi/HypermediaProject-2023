import { acceptHMRUpdate } from "pinia";

export const useContact = defineStore('contact', {
  state: () => ({
    email: 'venture.agency@mail.com',
    address: 'Piazza Leonardo da Vinci 32, Milano MI',
    addressX: 45.47818414651936,
    addressY: 9.227223321896215,
    phoneNumbers: [
        '+39 333 12345678',
        '+39 333 12345678'
    ] as string[],
  }),



  actions: {
  },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useContact, import.meta.hot))
  }