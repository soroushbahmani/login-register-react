export const validate = (data, type) => {
    const errors = {};

    if (type === "signup") {

        if (!data.name.trim()) {
            errors.name = "Username requird"
        } else {
            delete errors.name
        }

        if (!data.phone) {
            errors.phone = "phone requird"
        } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/.test(data.phone)) {
            errors.phone = "phone address is invalid"
        } else {
            delete errors.phone
        }

        if (!data.password) {
            errors.password = "password is requird"
        } else if (data.password.length < 6) {
            errors.password = "password needs to be 6 charecter or more"
        } else {
            delete errors.password
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "confirmPassword is requird"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "password do not match"
        } else {
            delete errors.confirmPassword
        }


        if (!data.isAccepted) {
            errors.isAccepted = "Accept our regulations"
        } else {
            delete errors.isAccepted
        }

    }
    else {

        if (!data.phone) {
            errors.phone = "phone requird"
        } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/.test(data.phone)) {
            errors.phone = "phone address is invalid"
        } else {
            delete errors.phone
        }

        if (!data.password) {
            errors.password = "password is requird"
        } else if (data.password.length < 6) {
            errors.password = "password needs to be 6 charecter or more"
        } else {
            delete errors.password
        }
    }



    return errors;
}