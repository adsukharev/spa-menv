<template>
    <div align="center">

        <b-button @click="showModal(id)" variant="link" >Edit Client</b-button>

    </div>
</template>

<script>
    export default {
        name: "editClientComponent",
        props: {
            id: {}
        },
        methods: {
            showModal(id){
                this.$root.$emit('showModalAction', id);
            }
        }
    }
</script>