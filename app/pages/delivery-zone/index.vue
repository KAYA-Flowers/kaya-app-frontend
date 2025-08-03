<template>
    <div class="kaya_content__delivery-zone kaya_bg_tiny-logo">
        <OrderFormBox @forward="handleInput()" :error="inputError">
            <template #headline>
                {{ $t('order.formular.postcodeHeadline') }}
            </template>
            <template #description>
                {{ $t('order.formular.postcodeDescription') }}
            </template>
            <template #input>
                <input
                    type="text"
                    class="kaya-util__input"
                    name="postcode"
                    v-model="postcode"
                    @input="handlePostcodeInput()"
                />
            </template>
        </OrderFormBox>
    </div>
</template>

<style lang="scss">
.kaya_content__delivery-zone {
    background: var(--kaya-yellow-normal);
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
import { useOrderConfigStore } from '@/stores/order-config.js'

export default {
    name: "DeliveryZoneIndex",
    data() {
        return {
            postcode: null,
            inputError: ref(false)
        }
    },
    setup() {
        const store = useOrderConfigStore()
        return {
            store
        }
    },
    mounted() {
        if (this.store.postcode) {
            this.postcode = this.store.postcode
        }
    },
    methods: {
        handlePostcodeInput() {
            this.postcode = /^\d/.test(this.postcode)
                ? this.postcode.replace(/[^\d]/g, "")
                    .slice(0, 5)
                : this.postcode.replace(/\W/g, "")
                    .replace(/(\d)(?:\d+)|([A-Z])(?:[A-Z]+)/gi, "$1$2")
                    .slice(0, 6)
                    .replace(/^(...)(.)/, "$1 $2");
        },
        handleInput() {
            if (!this.postcode || this.postcode.length < 4) {
                this.inputError = true;
            } else {
                this.inputError = false;
                this.store.setPostcode(this.postcode)
                this.$router.push({path: '/order/form'})
            }
        }
    }
}
</script>
