<template>
    <div class="form-group">
        <b-container fluid>
            <b-row align-v="end" >

                <!--input for provider's name-->
                <b-col class="pr-0 pl-0" cols="9">
                    <label for="providerName">Providers:</label>
                    <b-input type="text" v-model="provider.name" id="providerName" />
                </b-col>

                <!--button to add provider-->
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
                await ProviderService.addProvider(this.provider)
                    .then(() => {
                        this.$toasted.success('Provider is added');
                        this.provider.name = '';
                        this.$root.$emit('updateProviders');
                    })
                    .catch(error => {
                        this.$toasted.error(error.response.data);
                    })
            }
        },
    }
</script>