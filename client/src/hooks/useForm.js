import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        const { name, value } = e.target;
        
        let newValue = "";

        switch (e.target.type) {
            case "number":
                newValue = Number(value);
                break;
            default:
                newValue = value;
                break;
        }

        setValues((state) => ({
            ...state,
            [name]: newValue,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        return submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
}
