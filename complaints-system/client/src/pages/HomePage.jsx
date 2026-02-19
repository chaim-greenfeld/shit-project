import '../styles/app.css'
import { Link, useNavigate } from 'react-router'
// ===========
function HomePage() {
    return (
        <>
        <main>

            <nav><h2>Home Page</h2></nav>

            <div className='complaint-div'>
                <div>תיבת תלונות אנננימיות בבסיס צצבאי</div>
                <p>שלחו תלחה בצורה אונובמות ונטחוה</p>
                <Link to='/submit' className='green'>שליחח תלונה</Link>   
            </div>

            <div className='general'>
                <div>מפקדים בלבד</div>
                
                <Link to='adminloginpage' className='blue'>כניסה לאדמין</Link>
            </div>

        </main>
        </>
    )
}

export default HomePage
