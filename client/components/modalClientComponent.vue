<template>

    <div v-if="showModal">

            <b-modal v-model="showModal">
                <div slot="modal-header">
                    <h5 v-if="!id" class="text-info">New Client</h5>
                    <h5 v-else class="text-info">Edit Client</h5>
                </div>

                <!--main form for client-->
                <form-client-component :id="id" @formChange="client = $event"></form-client-component>
                <div slot="modal-footer" class="w-100">
                    <b-container fluid>

                        <!--footer in modal with buttons: delete, save, edit-->
                        <b-row>
                            <b-col>
                                <b-button v-if="id" variant="danger" @click="deleteClient(id)">Delete Client</b-button>
                            </b-col>
                            <b-col offset-md="2">
                                <b-button variant="secondary" @click="showModal=false">Cancel</b-button>
                            </b-col>
                            <b-col>
                                <b-button v-if="!id" variant="success" @click="addClient">Save Client</b-button>
                                <b-button v-else variant="success" @click="editClient(id)">Edit Client</b-button>
                            </b-col>
                        </b-row>
                    </b-container>

                </div>

            </b-modal>
    </div>

</template>

<script>

    import ClientService from '../services/ClientService.js';
    import formClientComponent from './formClientComponent.vue';
    import formProviders from "./checkFormProvidersComponent.vue";
    import BModal from 'bootstrap-vue/es/components/modal/modal'

    export default {
        name: "modalClientComponent",
        components: {
            formClientComponent,
            formProviders,
            BModal
        },
        data() {
            return {
                client: {
                    name: '',
                    email: '',
                    phone: '',
                    providers: []
                },
                showModal: false,
                id: '',
            }
        },
        methods: {
            hideModal() {
                this.showModal = false;
            },
            async addClient() {
                await ClientService.addClient(this.client);
                this.$root.$emit('updateClients');
                this.hideModal();
            },
            async editClient(id) {
                await ClientService.updateClient(id, this.client);
                this.$root.$emit('updateClients');
                this.hideModal();
            },
            async deleteClient(id) {
                await ClientService.deleteClient(id);
                this.$root.$emit('updateClients');
                this.hideModal();
            }
        },
        mounted() {
            this.$root.$on('showModalAction', (id) => {
                this.id = id;
                this.showModal = true;
            });
        }
    }
</script>