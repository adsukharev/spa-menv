import api from './api.js';

class ClientService {

    static fetchClients(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await api().get('clients');
                resolve(res.data)
            } catch (err) {
                reject(err);
            }
        })
    }

    static fetchOneClient(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api().get(`clients/${id}`);
                resolve(res.data)

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
        return api().put(`clients/${id}`, data);
    }
}

export default ClientService;