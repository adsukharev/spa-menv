<template>

    <b-form @submit.prevent>

        <!--input Name-->
        <div class="form-group">
            <label for="clientName">Name:</label>
            <b-input type="text" :value="client.name" v-model="client.name" :state="validationName" id="clientName" />
            <b-form-invalid-feedback :state="validationName">
                must be 1-25 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationName">
                Ok
            </b-form-valid-feedback>
        </div>

        <!--input Email-->
        <div class="form-group">
            <label for="clientEmail">Email:</label>
            <b-input type="email" :value="client.email" v-model="client.email" :state="validationEmail" id="clientEmail" />
            <b-form-invalid-feedback :state="validationEmail">
                must match the email form of 4-25 characters long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationEmail">
                Ok
            </b-form-valid-feedback>
        </div>

        <!--input Phone-->
        <div class="form-group">
            <label for="clientPhone">Phone:</label>
            <b-input type="text" :value="client.id" v-model="client.phone" :state="validationPhone" id="clientPhone" />
            <b-form-invalid-feedback :state="validationPhone">
                must be 2-18 numbers long.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationPhone">
                Ok
            </b-form-valid-feedback>
        </div>

        <!--input Add Provdier-->
        <add-provider-component></add-provider-component>

        <!--check form to choose providers for your client-->
        <check-form-providers-component :exist="exist_providers" @selectedProviders="client.providers = $event"></check-form-providers-component>

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
                },
                exist_providers: []
            }
        },
        methods: {
            async getClient() {
                this.client = await ClientService.fetchOneClient(this.id);
                this.exist_providers = this.client.providers;
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
                const emailRe = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
                return this.client.email.length > 3 && this.client.email.length < 26 && emailRe.test(this.client.email)
            },
            validationPhone() {
                const phoneRe = /^[0-9 -]{2,18}$/;
                return this.client.phone.length > 1 && this.client.phone.length < 19 && phoneRe.test(this.client.phone)
            },
        }
    }
</script>