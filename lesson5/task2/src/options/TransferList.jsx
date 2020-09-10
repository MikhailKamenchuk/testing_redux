import React from "react";
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title='AvailableOption' />
      <SelectedOptions title='SelectedOption' />
    </div>
  )
}

export default TransferList