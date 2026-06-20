
export const validarUser = (data)=>{
    const { id, firstName, lastName, age, email, phone, address,isActive, courses } = data
    if (id === undefined ||
        !firstName ||
        !lastName ||
        age === undefined ||
        !email ||
        !phone ||
        !address ||
        isActive === undefined ||
        !courses) {
        console.log(data);
        return true;
    }

    return false;
}


export const validarUpdateUser = (data) => {

    if ('id' in data && typeof data.id !== 'number') {
        return 'El id debe ser numérico';
    }

    if ('firstName' in data && typeof data.firstName !== 'string') {
        return 'firstName debe ser texto';
    }

    if ('lastName' in data && typeof data.lastName !== 'string') {
        return 'lastName debe ser texto';
    }

    if ('age' in data && typeof data.age !== 'number') {
        return 'age debe ser numérico';
    }

    if ('email' in data && typeof data.email !== 'string') {
        return 'email debe ser texto';
    }

    if ('phone' in data && typeof data.phone !== 'string') {
        return 'phone debe ser texto';
    }

    if ('isActive' in data && typeof data.isActive !== 'boolean') {
        return 'isActive debe ser boolean';
    }

    if ('courses' in data && !Array.isArray(data.courses)) {
        return 'courses debe ser un arreglo';
    }

    if ('address' in data) {
        if (typeof data.address !== 'object') {
            return 'address debe ser un objeto';
        }
    }

    return null; // válido
}
