export const authenticate = async () => {
    const usersRegistered = await JSON.parse(localStorage.getItem('users'));
    const loggedUser = await JSON.parse(localStorage.getItem('LSloggedUser'));
    if (usersRegistered && loggedUser) {
        const isLogged = usersRegistered.some((existingUser) => existingUser.email === loggedUser.email && existingUser.pass === loggedUser.pass)
        return isLogged

    }
}