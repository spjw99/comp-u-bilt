import React from 'react';

const OrderForm = ({onSubmit, onChange, value}) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        className="form-control border-success mb-2"
        type="hidden"
        value={value.orderId}
        name="orderId"
      />
      {/* <input 
        className="form-control border-success mb-2"
        type="hidden"
        value={value}
        name="orderPrice"
      /> */}
      <input 
        placeholder="Name" 
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={value.custName}
        name="custName"
      />
      <input 
        placeholder="Shipping Address" 
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={value.custShipAddr}
        name="custShipAddr"
      />
      <input 
        placeholder="Phone Number" 
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={value.custPhone}
        name="custPhone"
      />
      <input 
        placeholder="Card Number" 
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={value.custCard}
        name="custCard"
      />

      <button 
        className="btn btn-block btn-outline-dark"
        onClick={onSubmit}
        >
        Buy NOW
      </button>
    </form>
  )
}

export default OrderForm;