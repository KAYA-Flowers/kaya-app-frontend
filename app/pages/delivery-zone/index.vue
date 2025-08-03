<template>
    <div class="kaya_content__delivery-zone kaya_bg_tiny-logo">
        <OrderFormBox>
            <template #headline>
                {{ $t('order.formular.postcodeHeadline') }}
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
}
</script>
