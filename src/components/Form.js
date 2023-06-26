import { useState } from "react";

export default function Form({ onAddItems }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(event) {
        event.preventDefault()
        if (!description) return
        let newItem = { description, quantity, packed: false, id: Date.now() }
        onAddItems(newItem)
        setDescription("")
        setQuantity(1)
    }


    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <option value={i + 1} key={i + 1}>{i + 1}</option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Items..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button>Add</button>
        </form>
    )
}