export const useOrderConfigStore = defineStore('orderconfig', {
    state: () => (
        {
            postcode: null,
            firstName: 'Max',
            lastName: 'Mustermann'
        }
    ),
    getters: {
    },
    actions: {
       async setPostcode(postcode) {
            this.postcode = postcode;
        },
    },
})
