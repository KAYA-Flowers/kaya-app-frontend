<template>
    <div>
        <AppHeader />
        <div style="
            background: #fff;
            border: 1px solid #000;
            margin: .75rem;
            position: fixed;
            left: 0;
            bottom: 0;
            padding: .5rem;
            z-index: 3;
            font-family: 'Alumni Sans', sans-serif;
        ">
            <b>DEV MODE</b>
            <ul style="padding-inline-start: 1rem;">
                <li>Language: {{this.$i18n.locale}}</li>
                <li>Postcode: {{store.postcode}}</li>
            </ul>
        </div>
        <slot />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/Layout/AppHeader.vue'
import AppFooter from '~/components/Layout/AppFooter.vue'
import {useOrderConfigStore} from "~/stores/order-config.js";

export default {
    components: {
        AppHeader,
        AppFooter
    },
    setup() {
        const store = useOrderConfigStore()
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
