type TODO = {
    _id: any,
    title: string
}
type USER = {
    _id: any,
    username: string,
    password: string,
    todo: TODO[]
}