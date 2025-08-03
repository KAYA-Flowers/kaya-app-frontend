<template>
    <div>

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getDeliveryCookieSet } from '~/helpers/DeliveryZoneCookieHelper'
import LoadingScreen from '~/components/Layout/LoadingScreen.vue'
export default {
    name: 'App',
    components: {
        LoadingScreen
    },
    data() {
        return {
            isLoading: ref(true)
        }
    },
    setup() {
        const router = useRouter();
        console.log(router)
        return {
            router
        }
    },
    beforeMount() {
        this.isLoading = true
    },
    async mounted() {
        await this.router.push({path: '/delivery-zone'})
      /*
      setTimeout(() => {
          this.isLoading = false
      }, 500)
      if (!(await getDeliveryCookieSet())) {
          await this.router.push({path: '/delivery-zone'})
      }
       */
    }
}
</script>
