import React, {useState } from 'react'
//import Seat from './Seat'
export function SheetBooking() {
   
  const[ticketType,setTicketType] = useState("Ticket Type");
  const[ticketQuantity,setTicketQuantity] = useState("Qty");
  const[myHallData,setMyHallData] = useState(hallData);

  let count = 0;
  function seatSelection(e){
    //  const [row,position] = id.split("_");
    //  const change = hallData.seating_layout[row-1].seats[position-1];
    //  change.isSelected = "true";
    //  setMyHallData(myHallData);
    //  console.log(change);
    //  console.log(myHallData);
    //  console.log(myRef.current);
    //  myRef.current.style.backgroundColor = "red";
    if(ticketType === "Ticket Type"){
      return alert("Please select ticket type")
    }
    else if(ticketQuantity === "Qty"){
      return alert("Please select quantity of your ticket");
    }
    else{
      count++;
    console.log(count+" "+ticketQuantity);
    if(count<=ticketQuantity){
      e.target.style.backgroundColor = "green";
    }    
    }
    
  }

    function  confirmTicket(){
      if(ticketType === "Ticket Type"){
        return alert("error detail, please select your ticket");
      }
      else if(ticketQuantity === "Qty"){
        return alert("error detail, please select your ticket");
      }
      else{
      alert (`Your Ticket is confirmed.
      Ticket type ${ticketType}
      Ticket quantity ${ticketQuantity}`);
      setTicketType("Ticket Type");
      setTicketQuantity("Qty");
      setMyHallData(myHallData);
      }

    }

  //console.log(myHallData);

  return (
    <div>
      {/* ticket selection */}
      <div className='ticketParent'>
        <select className='ticketType' onChange={(e)=>setTicketType(e.target.value)}>
          <option hidden>{ticketType}</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>

        <select className='ticketChoice ticketType' onChange={(e)=>setTicketQuantity(e.target.value)}>
          <option hidden>{ticketQuantity}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      {/*end of ticket selection */}

      {/* cinema hall */}
      <div className='head'>
        <div className='leftSection'>
          <div className='seats'>
            <table className='hallTable'>
              <tbody>
                {
                  myHallData.seating_layout.map((value, index1) => {
                   // let makeId = value.row;
                    return <tr key={index1}>
                      <td>
                        <div className='seatRow'>{value.label}</div>
                      </td>
                      {
                        myHallData.seating_layout[index1].seats.map((value, index2) => {

                          // return <Seat seatData={value} key={index2} onSeatClick={onSeatSelection} />

                          if (value.status === "empty") {
                            return <td key={index2}>
                              <div className='hallSeat empty'></div>
                            </td>
                          }
                          else if (value.status === "unavailable") {
                            return <td key={index2}>
                              <div className='hallSeat unavailable'></div>
                            </td>
                          }
                          else if (value.status === "available") {
                            return <td key={index2}>
                              <div className="hallSeat available" onClick={seatSelection}></div>
                            </td>
                          }
                          else {
                            return <td></td>
                          }
                        })
                      }
                    </tr>
                  })

                }
              </tbody>
            </table>
          </div>
          {/* end of cinema hall */}

          {/* proceed button */}
          <div className='button'>
            <button onClick={()=>{confirmTicket()}}>PROCEED</button>
          </div>
        </div>
        {/* end of proceed button */}


        {/* seat clarification */}
        <div className='rightSection'>
          <h3>Key to Seat Layout</h3>
          <div className='rightSubSection'>
            <div style={{ width: "20px", height: "20px", border: "2px solid rgba(0, 0, 0, 0.282)" }}></div>
            <span>Available</span>
          </div>
          <div className='rightSubSection'>
            <div style={{ width: "20px", height: "20px", border: "2px solid rgba(0, 0, 0, 0.282)", backgroundColor: "rgba(0, 0, 0, 0.282)" }}></div>
            <span>Unavailable</span>
          </div>
          <div className='rightSubSection'>
            <div style={{ width: "20px", height: "20px", border: "2px solid rgba(0, 0, 0, 0.282)", backgroundColor: "rgb(57, 190, 57)" }}></div>
            <span>Your Selection</span>
          </div>
        </div>
        {/* end of seat clarification */}

      </div>

    </div>
  )
}












const hallData = {
  name: "Cinema_Hall_1",
  total_rows: 14,
  total_columns: 25,
  seating_layout: [
    {
      row: 1,
      label: "Q",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "unavailable", isSelected: false, type: "premium" },
        { position: 5, status: "unavailable", isSelected: false, type: "premium" },
        { position: 6, status: "empty", isSelected: false, type: "premium" },
        { position: 7, status: "unavailable", isSelected: false, type: "premium" },
        { position: 8, status: "unavailable", isSelected: false, type: "premium" },
        { position: 9, status: "empty", isSelected: false, type: "premium" },
        { position: 10, status: "unavailable", isSelected: false, type: "premium" },
        { position: 11, status: "unavailable", isSelected: false, type: "premium" },
        { position: 12, status: "empty", isSelected: false, type: "premium" },
        { position: 13, status: "unavailable", isSelected: false, type: "premium" },
        { position: 14, status: "unavailable", isSelected: false, type: "premium" },
        { position: 15, status: "empty", isSelected: false, type: "premium" },
        { position: 16, status: "unavailable", isSelected: false, type: "premium" },
        { position: 17, status: "unavailable", isSelected: false, type: "premium" },
        { position: 18, status: "empty", isSelected: false, type: "premium" },
        { position: 19, status: "unavailable", isSelected: false, type: "premium" },
        { position: 20, status: "unavailable", isSelected: false, type: "premium" },
        { position: 21, status: "empty", isSelected: false, type: "premium" },
        { position: 22, status: "unavailable", isSelected: false, type: "premium" },
        { position: 23, status: "unavailable", isSelected: false, type: "premium" },
        { position: 24, status: "empty", isSelected: false, type: "premium" },
        { position: 25, status: "empty", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 2,
      label: "P",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "unavailable", isSelected: false, type: "premium" },
        { position: 5, status: "unavailable", isSelected: false, type: "premium" },
        { position: 6, status: "empty", isSelected: false, type: "premium" },
        { position: 7, status: "unavailable", isSelected: false, type: "premium" },
        { position: 8, status: "unavailable", isSelected: false, type: "premium" },
        { position: 9, status: "empty", isSelected: false, type: "premium" },
        { position: 10, status: "unavailable", isSelected: false, type: "premium" },
        { position: 11, status: "unavailable", isSelected: false, type: "premium" },
        { position: 12, status: "empty", isSelected: false, type: "premium" },
        { position: 13, status: "unavailable", isSelected: false, type: "premium" },
        { position: 14, status: "unavailable", isSelected: false, type: "premium" },
        { position: 15, status: "empty", isSelected: false, type: "premium" },
        { position: 16, status: "unavailable", isSelected: false, type: "premium" },
        { position: 17, status: "unavailable", isSelected: false, type: "premium" },
        { position: 18, status: "empty", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "unavailable", isSelected: false, type: "premium" },
        { position: 21, status: "unavailable", isSelected: false, type: "premium" },
        { position: 22, status: "empty", isSelected: false, type: "premium" },
        { position: 23, status: "unavailable", isSelected: false, type: "premium" },
        { position: 24, status: "unavailable", isSelected: false, type: "premium" },
        { position: 25, status: "empty", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 3,
      label: "N",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "unavailable", isSelected: false, type: "premium" },
        { position: 6, status: "unavailable", isSelected: false, type: "premium" },
        { position: 7, status: "unavailable", isSelected: false, type: "premium" },
        { position: 8, status: "unavailable", isSelected: false, type: "premium" },
        { position: 9, status: "unavailable", isSelected: false, type: "premium" },
        { position: 10, status: "unavailable", isSelected: false, type: "premium" },
        { position: 11, status: "unavailable", isSelected: false, type: "premium" },
        { position: 12, status: "unavailable", isSelected: false, type: "premium" },
        { position: 13, status: "unavailable", isSelected: false, type: "premium" },
        { position: 14, status: "unavailable", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 4,
      label: "M",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 5,
      label: "L",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 6,
      label: "K",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 7,
      label: "J",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 8,
      label: "H",
      seats: [
        { position: 1, status: "unavailable", isSelected: false, type: "premium" },
        { position: 2, status: "unavailable", isSelected: false, type: "premium" },
        { position: 3, status: "unavailable", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 9,
      label: "G",
      seats: [
        { position: 1, status: "unavailable", isSelected: false, type: "premium" },
        { position: 2, status: "unavailable", isSelected: false, type: "premium" },
        { position: 3, status: "unavailable", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 10,
      label: "F",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 11,
      label: "E",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 12,
      label: "C",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 13,
      label: "B",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    {
      row: 14,
      label: "A",
      seats: [
        { position: 1, status: "empty", isSelected: false, type: "premium" },
        { position: 2, status: "empty", isSelected: false, type: "premium" },
        { position: 3, status: "empty", isSelected: false, type: "premium" },
        { position: 4, status: "empty", isSelected: false, type: "premium" },
        { position: 5, status: "available", isSelected: false, type: "premium" },
        { position: 6, status: "available", isSelected: false, type: "premium" },
        { position: 7, status: "available", isSelected: false, type: "premium" },
        { position: 8, status: "available", isSelected: false, type: "premium" },
        { position: 9, status: "available", isSelected: false, type: "premium" },
        { position: 10, status: "available", isSelected: false, type: "premium" },
        { position: 11, status: "available", isSelected: false, type: "premium" },
        { position: 12, status: "available", isSelected: false, type: "premium" },
        { position: 13, status: "available", isSelected: false, type: "premium" },
        { position: 14, status: "available", isSelected: false, type: "premium" },
        { position: 15, status: "available", isSelected: false, type: "premium" },
        { position: 16, status: "available", isSelected: false, type: "premium" },
        { position: 17, status: "available", isSelected: false, type: "premium" },
        { position: 18, status: "available", isSelected: false, type: "premium" },
        { position: 19, status: "empty", isSelected: false, type: "premium" },
        { position: 20, status: "available", isSelected: false, type: "premium" },
        { position: 21, status: "available", isSelected: false, type: "premium" },
        { position: 22, status: "available", isSelected: false, type: "premium" },
        { position: 23, status: "available", isSelected: false, type: "premium" },
        { position: 24, status: "available", isSelected: false, type: "premium" },
        { position: 25, status: "available", isSelected: false, type: "premium" },
      ]
    },
    // Repeat the structure for other rows...
  ]
}
// <Seat isAvailable={ true } isEmpty={ false } />
