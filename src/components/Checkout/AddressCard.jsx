// AddressCard.js
import React from "react";
import { useSelector } from 'react-redux';

function AddressCard() {
  const address = useSelector(state => state.addressData);

  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">{address.firstName} {address.lastName}</p>
        <p>{address.streetAddress}, {address.city}, {address.state}, {address.zipCode}</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
