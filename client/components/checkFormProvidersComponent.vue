<template>


    <b-container class="border w-75 ml-0">

        <b-row v-for="provider in providers" :key="provider._id" align-h="start">

            <!--checkbox-->
            <b-col md="8">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="selected" :value="provider" :id="provider._id">
                    <label class="form-check-label" :for="provider._id">
                        {{provider.name}}
                    </label>
                </div>

                <!--component 'editForm' if we push button 'edit provider'-->
                  <div v-if="provider._id === editIdProvider">
                      <edit-form-provider :_id="editIdProvider"></edit-form-provider>
                  </div>
            </b-col>

            <!--button edit Provider-->
            <b-col md="2">
                <b-button variant="white" @click="editIdProvider=provider._id"><font-awesome-icon :icon="icon_edit"/></b-button>
            </b-col>

            <!--button delete Provider-->
            <b-col md="2">
                <b-button variant="white" @click="deleteProvider(provider._id)"><font-awesome-icon :icon="icon_trash"/></b-button>
            </b-col>

        </b-row>

    </b-container>

</template>

<script>

    import { faEdit } from '@fortawesome/free-solid-svg-icons';
    import { faTrash } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    import editFormProvider from './editFormProvider.vue';
    import ProviderService from '../services/ProviderService.js';
    import ClientService from '../services/ClientService.js';

    export default {
        name: "checkFormProvidersComponent",
        components: {
            FontAwesomeIcon,
            editFormProvider,
            ClientService
        },
        props: {
            id: String
        },
        data() {
            return {
                selected: [],
                providers: [],
                editIdProvider: ''
            }
        },
        methods: {
            async getProviders() {
                this.providers = await ProviderService.fetchProviders();
            },
            async deleteProvider(id) {
                await ProviderService.deleteProvider(id);
                this.getProviders();
                this.$root.$emit('updateClients');
            },
            async getProvider_of_Client(){
                let client = await ClientService.fetchOneClient(this.id);
                this.selected = client.providers;
                console.log(this.selected);

            }

        },
        created() {
            if (this.id)
                this.getProvider_of_Client();
            this.getProviders();
        },

        mounted() {
            this.$root.$on('updateProviders', () => {
                this.getProviders();
            });
            this.$root.$on('showFormProvider', () => {
                this.editIdProvider= '';
            });


        },
        watch: {
            selected: {
                handler: function (providers) {
                    let id_selected = providers.map(provider => {
                        return provider._id;
                    });
                    this.$emit('selectedProviders', id_selected);
                },
                deep: true
            },
        },
        computed: {
            icon_edit () {
                return faEdit
            },
            icon_trash () {
                return faTrash
            },

        },
    }
</script>

<style scoped>

</style>