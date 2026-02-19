import { useState } from "react"
import { Link, useNavigate } from "react-router"





function AdminLoginPage() {



    const [password, setPassword] = useState(null)
    const [toggleToast, setToggleToast] = useState(false)
    console.log(password)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault()
  }



  const fetchAdmin = async (password) => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password})
      })
      const data = await res.text()
      localStorage.setItem('token', data)
      
      if (!res.ok) {
        setToggleToast(true)
        setTimeout(() => setToggleToast(false), 2000)
        setTimeout(() => navigate('/'), 2050)
         throw new Error(`HTTP error! status: ${res.status}`); 
        }
      setPassword(null)
      navigate('/admincomplaintspage')

      return localStorage 

    } catch (err) {
      console.log(err)
    }
  }






  return (
    <>
      <main>
        <nav><h2>Admin Login Page</h2></nav>
        <div className='complaint-div'>
          <div>כניסה לאדו האדפין</div>
          <form onSubmit={handleSubmit}>
            <label>סיסמה</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          </form >
          <button type="submit" className="blue" onClick={() => fetchAdmin(password)}>התחברות </button>
          {toggleToast && <p>the password is not good</p>}
        </div>
      </main>
    </>
  )
}

export default AdminLoginPage
