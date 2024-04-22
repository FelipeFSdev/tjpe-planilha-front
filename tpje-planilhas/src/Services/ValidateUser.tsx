import { api } from "../api"

export const validateUser = async (id: string, password: string): Promise<boolean> => {
    const data: any = await api

    if (id !== data.id || password !== data.password) {
        return false
    }
    return true
}