// Biblioteca de mensagens de erro estilizadas
import { toast } from 'react-toastify'

// Acessa API da aplicação e cria as requisições
export const Api = {
  baseUrl: 'https://backend-backstore-inventory.onrender.com',

  // Endpoint 'produto'
  produto: {
    endpoint: function () {
      return Api.baseUrl + '/produto'
    },
    readAll: function () {
      return this.endpoint() + '/'
    },
    create: function () {
      return this.endpoint() + '/'
    }
  },

  // Cria requisição 'GET'
  buildApiGetRequest: function (url) {
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.log('Erro ao carregar dados: ' + url, error)
      toast.error('Erro ao carregar dados.')
    })
  },
  // Cria requisição 'POST'
  buildApiPostRequest: function (url, body) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .catch(function (error) {
        console.log('Erro ao enviar dados: ' + url, error)
        toast.error('Erro ao enviar dados.')
      })
  }
}