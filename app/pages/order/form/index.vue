<template>
    <div class="kaya_content__form-index kaya_bg_tiny-logo">
        <OrderFormBox>
            <template #headline>
                Wie kann ich dir helfen Champ?
            </template>
        </OrderFormBox>
    </div>
</template>

<style lang="scss" scoped>
.kaya_content__form-index {
    background: var(--kaya-blue-normal);
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
    name: "OrderFormIndex"
}
</script>
