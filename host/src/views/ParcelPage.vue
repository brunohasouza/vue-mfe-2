<template>
  <Parcel
    v-on:parcelMounted="parcelMounted()"
    v-on:parcelUpdated="parcelUpdated()"
    :config="parcelConfig"
    :mountParcel="mountParcel"
    :parcelProps="getParcelProps()"
  />
</template>

<script>
  import Parcel from 'single-spa-vue/parcel'

  export default {
    components: {
      Parcel
    },

    data() {
      return {
        // eslint-disable-next-line
        parcelConfig: System.import('@vue-mf/parcel'),
        mountParcel: window.singleSpa.mountRootParcel
      }
    },

    methods: {
      // These are the props passed into the parcel
      getParcelProps() {
        return {
          text: `Hello world`
        }
      },
      // Parcels mount asynchronously, so this will be called once the parcel finishes mounting
      parcelMounted() {
        console.log("parcel mounted");
      },
      parcelUpdated() {
        console.log("parcel updated");
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>