export const useOrderConfigStore = defineStore('orderconfig', {
    state: () => (
        {
            postcode: null,
            steps: {
                method: null,
                recipe: null,
            }
        }
    ),
    getters: {
    },
    actions: {
        async setPostcode(postcode) {
            this.postcode = postcode;
        },
        async setMethod(mId) {
            this.steps.method = mId;
        },
        async setStepTwo(id) {
            this.steps.recipe = id;
        },
    },
})
