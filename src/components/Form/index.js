import { useState } from "react";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({author: "Me", text: value});
    }

    return (
        <form onSubmit={handleSubmit} >
            <input value={value} type="text" onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}