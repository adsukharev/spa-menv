import api from './api.js';

class ProviderService {

    static fetchProviders(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await api().get('providers');
                const data = res.data.map(function (provider) {
                    return provider.name;
                });
                resolve(data);
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


    static updateClient(id, data) {
        return api().put(`providers/${id}`, {data});
    }
}

export default ProviderService;

