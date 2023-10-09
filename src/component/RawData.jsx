import React from 'react'

function RawData() {
  return (
    <div>
      
    </div>
  )
}

export default RawData







// const [hallRows, setHallRows] = useState(hallData.seating_layout);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [maxTickets, setMaxTickets] = useState(0);

//   const onSeatSelection = (seatId) => {

//     const seatDataArr = seatId.split("_");

//     const [row, position] = seatDataArr;

//     if (selectedSeats.incudes(seatId)) {

//       return;

//     }
//     const rowData = hallRows.find((layoutRow) => { return layoutRow.row === row });
//     const rowSeats = rowData.seats;
//     const seatData = rowSeats.find((seatInfo) => seatInfo.position === position);
//     if (seatData.status === "available" && seatData.isSelected === false) {
//       if (selectedSeats.length === maxTickets) {

//         // Deselect all selected seats AND add current seat as the FIRST item in selectedSeats
//         setSelectedSeats(seatId);
//         seatData.isSelected = true;
//         return;
//       }
//       if (position === rowSeats.length) {

//         // this is last row, do not select any more rows
//         setSelectedSeats(seatId);
//         seatData.isSelected = true;
//         setHallRows(hallRows);
//         setMaxTickets(maxTickets);
//         return;

//       }
//       setSelectedSeats([...selectedSeats, seatId]);
//       seatData.isSelected = true;
//     }








//     // if current seat is NOT among these types (unavailable, empty) and selectedSeats.length !== maxTickets and if current seat is not the last seat in thew current row then select the seat

//     // Find next seat

//     const nextSeat = row.seats[position];

//     onSeatSelection(nextSeat.id)

//   };

