import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const newCategory = ''
    const [inputValue, setInputValue] = useState(newCategory)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setCategories(currentCategories => [inputValue, ...currentCategories])
            setInputValue('')
        } else {
            console.log('The field is invalid')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="search-style text-center" />
            <p className="text-center">{inputValue}</p>
            <h1 className="text-center">
                ADD CATEGORY
            </h1>
        </form>
    )

}

//validations
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}