import { toast } from "react-toastify"

export const Api = {
  baseUrl: 'http://localhost:5000',

  inventario: {
    endpoint: function () {
      return Api.baseUrl + '/inventario'
    },
    readAll: function () {
      return this.endpoint() + '/'
    }
  },
  
  buildApiGetRequest: function (url){
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.log('Erro ao carregar dados: ' + url, error)
      toast.error('Erro ao carregar dados.')
    })
  }
}