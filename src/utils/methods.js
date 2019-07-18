
export const processFromFields = formData => {
    let dataToSubmit = {};
    for (let key in formData){
        dataToSubmit[key] = formData[key].value;
    }

    return dataToSubmit;
};
