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

        props.changeHandler({formData})
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
