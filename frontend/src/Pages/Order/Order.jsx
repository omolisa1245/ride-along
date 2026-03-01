import React, {useState} from 'react'
import './Order.css'
import axios from 'axios'

const Order = () => {




  const [token, setToken] = useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    pickUp: "",
    dropOff: "",
    category: "regular",
    pickUpDate: ""
  })

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("pickUp", data.pickUp)
    formData.append("dropOff", data.dropOff)
    formData.append("category", data.category)
    formData.append("pickUpdate", data.pickUpDate)

    const response = await axios.post("http://localhost:3000/api/booking/request", data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setData({
        name: "",
        email: "",
        pickUp: "",
        dropOff: "",
        category: "",
        pickUpDate: ""
      })
    }
    else {
      alert(response.data.message)
    }


  }

  return (
    <div className='order-container'>
      <div className="order-image-background">
        <div className="order-holder-overlay">
          <div className="form-holder">
            <div className="form-container">
              <form onSubmit={onSubmitHandler} className='order-form'>
                <input name='name' onChange={formHandler} value={data.name} type="text" className='form-order' placeholder='Your Name' />
                <input name='email' onChange={formHandler} value={data.email} type="text" className='form-order' placeholder='Your Email' />
                <input name='pickUp' onChange={formHandler} value={data.pickUp} type="text" className='form-order' placeholder='Your pick up' />
                <input name='dropOff' onChange={formHandler} value={data.dropOff} type="text" className='form-order' placeholder='Your drop off' />
                <div className="order-form-below">
                  <select onChange={formHandler} id="myDropdown" name="mySelection" className='form-select'>
                    <option value="option1_value">Regular</option>
                    <option value="option2_value">Standard</option>
                    <option value="option3_value" >Executive</option>
                    <option value="option3_value" >VIP</option>
                    <option value="option3_value" >Bus</option>
                    <option value="option3_value" >Truck</option>
                  </select>
                  <div className="order-date">
                    <label htmlFor="date">Pick up Date:</label>
                    <input onChange={formHandler} value={data.pickUpDate} type="date" name="pickUpDate" className='order-date-input' />
                  </div>
                </div>

                <button type='submit'>Book Now</button>
              </form>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Order