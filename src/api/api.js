import { toast } from 'react-toastify'

export const Api = {
  baseUrl: 'http://localhost:5000',

  inventario: {
    endpoint: function () {
      return Api.baseUrl + '/inventario'
    },
    readAll: function () {
      return this.endpoint() + '/'
    },
    create: function () {
      return this.endpoint() + '/'
    }
  },

  buildApiGetRequest: function (url) {
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.log('Erro ao carregar dados: ' + url, error)
      toast.error('Erro ao carregar dados.')
    })
  },
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