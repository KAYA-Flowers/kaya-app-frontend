<template>
    <div class="kaya_content__delivery-zone kaya_bg_tiny-logo">
        <OrderFormBox>
            <template #headline>
                {{ $t('order.formular.postcodeHeadline') }}
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
export default {
    name: "DeliveryZone",
    data() {
        return {
            postcode: null
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
        }
    }
}
</script>
