import { useState } from 'react'
import { useNavigate } from 'react-router'



function SubmitComplaintPage() {
    const [domain, setDomain] = useState("אוכל")
    const [text, setText] = useState(null)
    const [toggleToast, setToggleToast] = useState(false)
    const navigate = useNavigate();
    console.log(domain)
    console.log(text)

    const fetchComp = async (text, domain) => {
        const data = {category: text, message: domain}
        try {
            const res = await fetch('http://localhost:5000/api/complaints', {
                method: 'POST',
                headers:{
                     'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

        if(!res.ok){ throw new Error( `HTTP error! status: ${res.status}`);}
        setText('')
        setDomain("אוכל")
        setToggleToast(true)
        setTimeout(() => setToggleToast(false), 2000)
        setTimeout(() => navigate('/'), 2100)


        
        }catch (err){
            console.log(err)
        }
    }

     function handleSubmit(e) {
        e.preventDefault();
        fetchComp(text, domain);
    }


    return (
        <main>
            <nav><h2>Submit Complaint Page</h2></nav>
            <div>
                <div>שליחת תלונת אנונימית</div>
                <form onSubmit={handleSubmit}>
                    <div>

                        <label htmlFor="">תחום התלונה</label>
                        <select name="" id="" value={domain} onChange={e => setDomain(e.target.value)}>
                            <option value="אוכל">אוכל</option>
                            <option value="ציוד">ציוד</option>
                            <option value="פקודות">פקודות</option>
                            <option value="אחר">אחר</option>
                        </select>
                    </div><br />
                    <div>
                    <label htmlFor="">תוכן החלונה:</label>
                    <textarea name="" id=""value={text} onChange={e => setText(e.target.value)}></textarea>
                        
                    </div><br />

                    <button type='submit' className='green' >שליחת תלונה</button>
                </form>
                {toggleToast && <p>Your Complait Accepeted</p>}

            </div>
        </main>
    )
}

export default SubmitComplaintPage
