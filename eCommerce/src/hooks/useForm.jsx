import { useState } from "react";

function useForm (callback, defaultData) {
    const [formData, setFormData] = useState(defaultData)

    const handleSubmit = (event)=>{
        event.preventDefault()
        callback(formData)
        setFormData(defaultData)
    }

    const handleInputChange = (event)=>{
        const {name, value} = event.target
        console.log(name, value)
        setFormData({...formData, [name]: value})
    }
    
    return{
        formData,
        handleSubmit,
        handleInputChange
    }
}

export default useForm