interface IUserLogged {
    login: boolean
}

const userLogged = {
    login: false
}

export const getStorage = (): string | null => {
    return localStorage.getItem("userLogged")
}
export const createStorage = (): void => {
    return localStorage.setItem("userLogged", JSON.stringify(userLogged))
}
export const changeStorage = (userLogged: IUserLogged): void => {
    return localStorage.setItem("userLogged", JSON.stringify(userLogged))
}