<template>

    <!--form to add new Provider-->
    <b-form @submit.prevent>
        <div class="form-group">
            <b-container class="mt-1">

                <!--input form to change name of provider-->
                <b-row>
                    <b-col>
                        <label for="providerName" class="sr-only">edit</label>
                        <b-input type="text" :value="provider.name" v-model="provider.name"
                                 placeholder="Edit provider" id="providerName" />
                    </b-col>
                </b-row>

                <!--buttons: cancel/edit name of provider-->
                <b-row class="mt-1">
                    <b-col>
                        <b-button class="btn-sm" variant="secondary" @click="showFormProvider">Cancel</b-button>
                        <b-button class="btn-sm" variant="success" @click="editProvider">Edit Provider</b-button>
                    </b-col>
                </b-row>

            </b-container>
        </div>
    </b-form>
</template>

<script>
    import ProviderService from '../services/ProviderService.js';
    export default {
        name: "editFormProvider",
        props: {
            _id: String
        },
        data() {
            return {
                provider: {
                    name: ''
                }
            }
        },
        methods: {
            showFormProvider() {
                this.$root.$emit('showFormProvider');
            },
            async editProvider() {
                await ProviderService.updateProvider(this._id, this.provider)
                    .then(() => {
                        this.$toasted.success('Provider is updated');
                        this.$root.$emit('updateProviders');
                        this.$root.$emit('updateClients');
                        this.showFormProvider();
                    })
                    .catch(error => {
                        this.$toasted.error(error.response.data);
                    });
            },
        }
    }
</script>