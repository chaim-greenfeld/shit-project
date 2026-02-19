import { useEffect, useState } from "react";




function AdminComplaintsPage() {
  const token = localStorage.getItem('token');
  const [complaints, setComplaints] = useState([])

  const fetchAll = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/complaints', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await res.json()
      setComplaints(data);

    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    fetchAll()
  }, [token])

  return (
    <table>
      <th>
        <td>category</td>
        <td>message</td>
        <td>createdAt</td>
      </th>
      <tr>

        {complaints.map(e => (
          <tr>
            <td>{e.category} </td>
            <td>  {e.message}</td>
            <td>{e.createdAt}</td>
            
            
            
          </tr>
        ))}
      </tr>
    </table>
  )
}

export default AdminComplaintsPage
