import React from 'react'

function Seat({seatData,onSeatClick}) {
    const seatClass = `hallSeat ${ seatData.status }`;
    const handleSeatClick = ()=>{
        const id = `${seatData.row}_${seatData.position}_${seatData.type}`;
        onSeatClick(id);
    }
  return (
    <td  onClick={handleSeatClick}>
    <div className={seatClass}>
      
    </div>
    </td>
  )
}

export default Seat
