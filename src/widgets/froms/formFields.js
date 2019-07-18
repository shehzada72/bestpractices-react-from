import React from 'react';

const FormFields = props => {

    const renderFields = () => {
        const formArray = [];

        for (let elementName in props.formData){
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            });
        }

        return formArray.map((item, index) => {
            return (
                <div key={index} className={'form_element'}>
                    {renderTemplates(item)}
                </div>
            )
        });
    };

    const changeHandler = e => {
        let {formData} = props;
        const {name, value} = e.target;
        formData[name].value =  value;

        let validData = validate(formData[name]);

        formData[name].valid = validData[0];
        formData[name].validationMessage = validData[1];

        props.changeHandler({formData})
    };

    const validate = element => {
        let error = [true, ''];

        if (element.validation.required){
            const valid = element.value.trim() !== '';
            const message = `${!valid ? "This field is required" : ""}`;

            error = !valid ? [valid, message] : error;
        }

        if (element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen;
            const message = `${!valid ? "Must be greater than" + element.validation.minLen : ""}`;

            error = !valid ? [valid, message] : error;
        }

        return error;
    };

    const showValidation = element => {
        let errorMessage = null;

        if (element.validation && !element.valid) {
            errorMessage = (
                <div className={'label_error'}>
                    {element.validationMessage}
                </div>
            )
        }

        return errorMessage;
    };

    const renderTemplates = data => {
        let formTemplate = '';
        let values = data.settings;

        switch (values.element) {
            case('input'):
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <input
                            {...values.config}
                            value={values.value}
                            onChange={changeHandler}
                        />
                        {showValidation(values)}
                    </div>
                );

                break;
            case('textarea'):
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <textarea
                            {...values.config}
                            value={values.value}
                            onChange={changeHandler}
                        />
                        {showValidation(values)}
                    </div>
                );

                break;
            case('select'):
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <select
                            value={values.value}
                            name={values.config.name}
                            onChange={changeHandler}
                        >
                            {values.config.options.map((item, index) => (
                                <option key={index} value={item.val}>{item.text}</option>
                            ))}
                        </select>
                        {showValidation(values)}
                    </div>
                );

                break;
            default:
                formTemplate = '';
        }

        return formTemplate;
    };

    const showLabel = (show, labelText) => {
        return show ?
            <label>{labelText}</label>
            : null;
    };

    return (
        <div>
            {renderFields()}
        </div>
    )
};

export default FormFields;
