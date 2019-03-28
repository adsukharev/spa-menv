<template>
    <div id="app">
        <b-container class="mt-5">
            <header-component></header-component>
            <table-component></table-component>
            <modal-client-component></modal-client-component>
        </b-container>
    </div>
</template>

<script>

    import tableComponent from './components/tableComponent.vue';
    import headerComponent from './components/headerComponent.vue';
    import modalClientComponent from './components/modalClientComponent.vue';

    export default {
        name: "app",
        components: {
            tableComponent,
            headerComponent,
            modalClientComponent
        }
    }
</script>

<style scoped>

</style>