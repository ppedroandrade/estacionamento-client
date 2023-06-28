import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Veiculo } from '../model/veiculo'

class VeiculoClient {
  private axiosClient: AxiosInstance

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8080/api/veiculo',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public async findById(id: number): Promise<Veiculo> {
    try {
      return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }

  public async findAll(): Promise<Veiculo[]> {
    try {
      return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }

  public async cadastrar(veiculo: Veiculo): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(``, veiculo)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }

  public async editar(id: number, marca: Veiculo): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/${id}`, marca)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }

  public async excluir(id: number): Promise<string> {
    try {
      const response: AxiosResponse<string> = await this.axiosClient.delete(`/${id}`)
      return response.data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
}

export default new VeiculoClient()
