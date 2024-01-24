import { useState } from "react"

function Input({ setData }) {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
      const url = `${process.env.REACT_APP_BACKEND_URL}/breach?email=${email}`
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="email address" />
            <input type='submit' />
        </form>
    )
}

export default Input