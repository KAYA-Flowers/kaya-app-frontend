<template>
    <button :type="type" v-html="text" :class="'kaya-utils__button ' + this.colorClass()"></button>
</template>

<style lang="scss" scoped>
button.kaya-utils__button {
    border-radius: .75rem;
    border-width: 5px;
    border-style: solid;
    font-family: 'Alumni Sans', sans-serif;
    font-size: 1.5rem;
    padding: .25rem 1.5rem;
    &.border-blue {
        border-color: var(--kaya-blue-normal);
    }
    &.border-yellow {
        border-color: var(--kaya-yellow-normal);
    }
    &.border-green {
        border-color: var(--kaya-green-normal);
    }
    &.border-red {
        border-color: var(--kaya-red-normal);
    }
    &.bg-blue {
        background: var(--kaya-blue-normal);
    }
    &.bg-yellow {
        background: var(--kaya-yellow-normal);
    }
    &.bg-green {
        background: var(--kaya-green-normal);
    }
    &.bg-red {
        background: var(--kaya-red-normal);
    }
    &.text-dark {
        color: var(--kaya-text-color);
    }
}
</style>

<script>

export default {
    name: "KayaButton",
    props: ['type', 'text', 'color'],
    methods: {
        colorClass() {
            console.log(this.color)
            switch (this.color) {
                case 'yellow': {
                    return 'bg-yellow border-blue text-dark'
                }
                case 'red': {
                    return 'bg-red border-blue text-dark'
                }
            }
        }
    }
}
</script>
