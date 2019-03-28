<template>

    <b-row class="pt-2 pb-2 bg-info" align-h="between" >
        <b-col class="text-white" md="4"><h4>Clients</h4></b-col>
        <b-col md="4">
            <div align="right">
                <new-client></new-client>
            </div>
        </b-col>
    </b-row>
</template>

<script>

    import newClient from './newClient.vue';

    export default {
        name: "newClientComponent",
        components: {
            newClient
        },
    }
</script>
