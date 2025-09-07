import { useState } from "react"

const wordBank = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]

export default function Dictionary() {

    const [formData ,setFormData] = useState({text : ""})
    const [searchWord ,setSearchWord] = useState(true)
    const [definition ,setDefinition] = useState("")

    function handleChange(e) {

        setFormData((prev) => ({...prev , [e.target.name]:e.target.value}))

    }

    function handleForm(e) {
        e.preventDefault()
        const result = wordBank.find((item) => {
            if(item.word.toLowerCase() === formData.text.toLowerCase() ){
                setDefinition(item.meaning)
                return true
            }
         return false
        })

        if(result) {
            setSearchWord(true)
        }
        else {
            setSearchWord(false)
        }

    }

    return (
        <div>
            <h1>Dictionary App</h1>
            <form onSubmit={handleForm}>

                <input 
                    type="text"
                    placeholder="Search for a word"
                    onChange={handleChange}
                    name="text"
                    value={formData.text}/>
                
                <button
                    type="submit">
                    Search
                </button> 
            </form>
            <h3>Definition:</h3> 
            {searchWord ?<p>{definition}</p> : <p>Word not found in the dictionary.</p>}
        </div>
    )

}