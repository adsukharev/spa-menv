<template>
    <b-container>
        <b-row>

            <b-col>
                <b-form-group>
                    <b-form-checkbox-group plain stacked v-model="selected" :options="providers" />
                </b-form-group>
            </b-col>

            <b-col>
                <b-button>save provider</b-button>
            </b-col>

            <b-col>
                <b-button><font-awesome-icon :icon="icon" /></b-button>

            </b-col>

        </b-row>

    </b-container>
</template>

<script>

    // import { library } from '@fortawesome/fontawesome-svg-core';
    import { faCoffee } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    // library.add(faCoffee);

    import ProviderService from '../services/ProviderService.js';
    export default {
        name: "checkFormProvidersComponent",
        components: {
            FontAwesomeIcon
        },
        data() {
            return {
                selected: [],
                providers: [],
            }
        },
        methods: {
            async getProviders() {
                this.providers = await ProviderService.fetchProviders();
            },
        },
        mounted() {
            this.$root.$on('updateProviders', () => {
                this.getProviders();
            });
            this.getProviders();
        },
        watch: {
            selected: {
                handler: function (providers) {
                    this.$emit('selectedProviders', providers);
                },
                deep: true
            },
        },
        computed: {
            icon () {
                return faCoffee
            }
        },
    }
</script>

<style scoped>

</style>