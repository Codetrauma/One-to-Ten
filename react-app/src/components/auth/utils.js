const datePattern = new RegExp(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/)
const emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const isDate = field => datePattern.test(field)
const isEmail = field => emailPattern.test(field)
const formatDate = dateString => {
    if (dateString) {
        let parsedDate = dateString.split('/').map(num => num.toString())
        if (parsedDate[0].length !== 2) parsedDate[0] = '0' + parsedDate
        if (parsedDate[1].length !== 2) parsedDate[1] = '0' + parsedDate
        return [parsedDate[2], parsedDate[0], parsedDate[1]].join('-')
    } else return null
}

const convertToDate = formattedDate => {
    if (formattedDate) return Date.parse(formattedDate)
    else return null
}

const isOver18 = (dateString) => {
  let age = Date.now() - convertToDate(dateString)
  return ((age-86400000)/31556952000) > 18
}





const validateSignUp = (email, dob, zipCode, password, repeatPassword) => {
    let newErrors = []

    if (!isEmail(email)) {
        newErrors.push('Please enter a valid email.')
    }

    if (dob && !isDate(dob)) {
        newErrors.push('Birthdate must be a valid date in mm/dd/yyyy format.')
    }

    if (dob && isDate(dob) && !(isOver18(dob))) {
        console.log(dob)
        newErrors.push('You must be over 18 to use this site.')
    }

    if (zipCode && zipCode.length !== 5) {
        newErrors.push('Please enter a valid zip code.')
    }

    if (password !== repeatPassword) {
        newErrors.push('Passwords do not match.')
    } else if (password.length < 8) {
        newErrors.push('Password must be at least 8 characters long.')
    }

    return newErrors
}

module.exports = {
    validateSignUp,
    formatDate
}
