
type UserId = string


interface IUserStore {
    name?: string | null;
    username?: string | null;
    image?: string | null;
    email?: string | null;
    role?: string | null;
    description?: string | null;
    currentCompany?: string | null;
}
