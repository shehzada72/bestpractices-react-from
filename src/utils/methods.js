
export const processFromFields = formData => {
    let dataToSubmit = {};
    for (let key in formData){
        dataToSubmit[key] = formData[key].value;
    }

    return dataToSubmit;
};


export const checkFormIsValid = formData => {
    let formIsValid = true;
    for(let key in formData) {
        formIsValid = formData[key].valid && formIsValid;
    }

    return formIsValid;
};
