import { Condutor } from '../model/condutor'
import axios, { AxiosInstance } from 'axios'

export class CondutorClient {
  private axiosClient: AxiosInstance

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8080/api/condutor',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  public async findById(id: number): Promise<Condutor> {
    try {
      return (await this.axiosClient.get<Condutor>(`/${id}`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
  public async cadastrar(condutor: Condutor): Promise<void> {
    try {
      return await this.axiosClient.post('/', condutor)
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
  public async editarCondutor(id: number, condutor: Condutor): Promise<any> {
    try {
      return await this.axiosClient.put(`/${id}`, condutor)
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }

  public async delete(id: number): Promise<any> {
    try {
      const response = await this.axiosClient.delete(`/${id}`)
      return response
    } catch (error: any) {
      throw error.response
    }
  }

  public async listaAll(): Promise<Condutor[]> {
    try {
      return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
    } catch (error: any) {
      return Promise.reject(error.response)
    }
  }
}

export default new CondutorClient()
