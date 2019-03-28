<template>
    <b-button variant="light" @click="showModal()">New Client</b-button>
</template>

<script>
    export default {
        name: "newClient",
        methods: {
            showModal() {
                this.$root.$emit('showModalAction', null);
            }
        }
    }
</script>
