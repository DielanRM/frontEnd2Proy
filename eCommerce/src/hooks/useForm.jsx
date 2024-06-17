import { useState } from "react";

function useForm (defaultData, callback) {
    const [formData, setFormData] = useState(defaultData)

    const handleSubmit = (event)=>{
        event.preventDefault()
        callback(formData)
    }

    const handleInputChange = (event)=>{
        const {name, value} = event.target
        console.log(name, value)
        setFormData({...setFormData, [name]: value})
    }
    
    return{
        formData,
        handleSubmit,
        handleInputChange
    }
}

export default useForm