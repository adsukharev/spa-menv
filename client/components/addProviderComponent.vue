<template>
    <div class="form-group">
        <label for="providerName">Providers</label>
        <b-input type="text" v-model="provider.name" :state="validationProviders" id="providerName" />
        <b-form-invalid-feedback :state="validationProviders">
            Provider's name must be 1-25 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationProviders">
            Ok
        </b-form-valid-feedback>
        <b-button variant="secondary" @click="addProvider">Add Provider</b-button>
    </div>
</template>

<script>

    import ProviderService from '../services/ProviderService.js';

    export default {
        name: "addProviderComponent",
        data(){
            return{
                provider: {
                    name: ''
                }
            }
        },
        methods: {
            async addProvider(){
                await ProviderService.addProvider(this.provider);
                this.$root.$emit('updateProviders');
            }
        },
        computed: {
            validationProviders() {
                return this.provider.name.length > 0 && this.provider.name.length < 26
            }
        }
    }
</script>