<template>

    <b-form @submit.prevent>

        <div class="form-group">
            <label for="clientName">Name:</label>
            <b-input type="text" :value="client.name" v-model="client.name" :state="validationName" id="clientName" />
            <b-form-invalid-feedback :state="validationName">
                Name must be 1-25 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationName">
                Ok
            </b-form-valid-feedback>
        </div>

        <div class="form-group">
            <label for="clientEmail">Email:</label>
            <b-input type="email" :value="client.email" v-model="client.email" :state="validationEmail" id="clientEmail" />
            <b-form-invalid-feedback :state="validationEmail">
                Email must be 4-25 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationEmail">
                Ok
            </b-form-valid-feedback>
        </div>

        <div class="form-group">
            <label for="clientPhone">Phone:</label>
            <b-input type="text" :value="client.id" v-model="client.phone" :state="validationPhone" id="clientPhone" />
            <b-form-invalid-feedback :state="validationPhone">
                Phone must be 2-18 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationPhone">
                Ok
            </b-form-valid-feedback>
        </div>

        <add-provider-component></add-provider-component>
        <check-form-providers-component :id="id" @selectedProviders="client.providers = $event"></check-form-providers-component>

    </b-form>

</template>

<script>

    import addProviderComponent from './addProviderComponent.vue'
    import checkFormProvidersComponent from './checkFormProvidersComponent.vue'
    import ClientService from '../services/ClientService.js';

    export default {
        name: "formClientComponent",
        components: {
            checkFormProvidersComponent,
            addProviderComponent
        },
        props: {
            id: String
        },
        data() {
            return {
                client: {
                    _id: '',
                    name: '',
                    phone: '',
                    email: '',
                    providers: []
                }
            }
        },
        methods: {
            async getClient() {
                this.client = await ClientService.fetchOneClient(this.id);
            },
        },
        created() {
            if (this.id)
                this.getClient();
        },
        watch: {
            client: {
                handler: function (newClient) {
                    this.$emit('formChange', newClient);
                },
                deep: true
            },
        },
        computed: {
            validationName() {
                return this.client.name.length > 0 && this.client.name.length < 26
            },
            validationEmail() {
                return this.client.email.length > 3 && this.client.email.length < 26
            },
            validationPhone() {
                return this.client.phone.length > 1 && this.client.phone.length < 19
            },
        }
    }
</script>

<style scoped>

</style>