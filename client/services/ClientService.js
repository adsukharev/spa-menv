import api from './api.js';

class ClientService {


    static fetchClients(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await api().get('clients');
                const data = res.data;
                resolve(
                    data.map(function (client) {
                        return (
                            {
                                id: client._id,
                                name: client.name,
                                email: client.email,
                                phone: client.phone,
                                providers: client.providers.map(function (provider) {
                                    return (provider.name);
                                }).sort().join(', ')
                            })
                    }
                )
                )
            }catch (err) {
                reject(err);
            }
        })
    }

    static fetchOneClient(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api().get(`clients/${id}`);
                const data = res.data;
                data.providers = data.providers.map(function (provider) {
                    return (provider.name);
                }).sort().join(', ');
                resolve(data)

            } catch (err) {
                reject(err);
            }
        })
    }

    static addClient(client) {
        return  api().post('clients', client);
    }

    static deleteClient(id) {
        return api().delete(`clients/${id}`);
    }


    static updateClient(id, data) {
        return api().put(`clients/${id}`, {data});
    }
}

export default ClientService;

