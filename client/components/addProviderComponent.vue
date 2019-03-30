<template>
    <div class="form-group">
        <b-container fluid>
            <b-row align-v="end" >

                <b-col class="pr-0 pl-0" cols="9">
                    <label for="providerName">Providers:</label>
                    <b-input type="text" v-model="provider.name" :state="validationProviders" id="providerName" />
                    <b-form-invalid-feedback :state="validationProviders">
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validationProviders">
                    </b-form-valid-feedback>
                </b-col>

                <b-col class="pr-0 pl-1" cols="3">
                    <b-button class="btn-sm mb-1" variant="secondary" @click="addProvider">Add Provider</b-button>
                </b-col>

            </b-row>
        </b-container>
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