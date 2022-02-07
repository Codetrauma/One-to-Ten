export const containsUnsafeCharacters = (str) => {
    if(!str) return false
    const unsafePattern = new RegExp(/[<>%$]/, 'g')
    return unsafePattern.test(str)
}

export const unsafeInput = (str, paramName = 'entry', maxLength) => {
    const charactersToRemove = new RegExp(/[<>%$]/, 'g')
    let newStr
    if (str) {
        newStr = str.replace(charactersToRemove, '').trim()
        if (maxLength) {
            newStr = newStr.slice(0, maxLength)
        }
    }
    if (newStr && containsUnsafeCharacters(str)) {
        return {
            warningText: `Invalid entry. Try: `,
            suggestion: newStr,
            isSafe: false
        }
    } else {
        return {
            isSafe: true
        }
    }
}

export const okToSubmitField = (str, minLength, maxLength, required, pattern, additionalValidations) => {
    if (!str || str.length === 0) return (required !== true)
    if (str) {
        if (minLength && str.length < minLength) return false;
        if (maxLength && str.length > maxLength) return false;
        if (pattern) {
            if (!pattern.test(str)) return false;
        }

        if (additionalValidations &&  Array.isArray(additionalValidations) && additionalValidations.length) {
            for (let i = 0; i < Array.additionalValidations.length; i++) {
                let test = additionalValidations[i]
                if (!test(str)) return false;
            }
        }
    }

    return true;
}

