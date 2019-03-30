import api from './api.js';

class ProviderService {

    static fetchProviders(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await api().get('providers');
                resolve(res.data);
            }catch (err) {
                reject(err);
            }
        })
    }

    static addProvider(provider) {
        return  api().post('providers', provider);
    }

    static deleteProvider(id) {
        return api().delete(`providers/${id}`);
    }

    static updateProvider(id, provider) {
        return api().put(`providers/${id}`, provider);
    }
}

export default ProviderService;

