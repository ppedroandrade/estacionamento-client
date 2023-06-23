import { Marca } from '../model/marca'
import axios, { AxiosInstance } from 'axios'

export class MarcaClient {
  private axiosClient: AxiosInstance

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8080/api/condutor',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  public async findById(id: number): Promise<Marca> {
    try {
      return (await this.axiosClient.get<Marca>(`/${id}`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
  public async cadastrar(marca: Marca): Promise<void> {
    try {
      return await this.axiosClient.post('/', marca)
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
  public async editar(marca: Marca): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${marca.id}`, marca)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
  public async delete(id: number): Promise<string> {
    try {
      return (await this.axiosClient.delete<string>(`/${id}`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
}
