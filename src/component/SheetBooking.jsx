import React from 'react'

export function SheetBooking() {
  console.log(hallData);
  return (
    <div>
      <div className='ticketParent'>
          <select className='ticketType'>
            <option>Ticket Type</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>

          <select className='ticketChoice ticketType'>
            <option>Qty</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
            <option value="six">6</option>
            <option value="seven">7</option>
            <option value="eight">8</option>
            <option value="nine">9</option>
            <option value="ten">10</option>
          </select>

        </div>
      <div className='head'>
        <div className='leftSection'>
        

        <div className='seats'>
          <table className='hallTable'>
            <tbody>
              {
                hallData.seating_layout.map((value, index1) => {

                  return <tr key={index1}>
                    <td>
                      <div className='seatRow'>{value.label}</div>
                    </td>
                    {
                      hallData.seating_layout[index1].seats.map((value, index2) => {
                        return <td key={index2}>
                          <div className='hallSeat'></div>
                        </td>
                      })
                    }
                  </tr>
                })

              }
            </tbody>
          </table>
        </div>
        <div className='button'>
          <button>PROCEED</button>
        </div>
        </div>

        <div className='rightSection'>
          <h3>Key to Seat Layout</h3>
          <div className='rightSubSection'>
            <div style={{width:"20px", height:"20px", border:"2px solid rgba(0, 0, 0, 0.282)"}}></div>
            <span>Available</span>
          </div>
          <div className='rightSubSection'>
            <div style={{width:"20px", height:"20px", border:"2px solid rgba(0, 0, 0, 0.282)", backgroundColor:"rgba(0, 0, 0, 0.282)"}}></div>
            <span>Unavailable</span>
          </div>
          <div className='rightSubSection'>
            <div style={{width:"20px", height:"20px", border:"2px solid rgba(0, 0, 0, 0.282)", backgroundColor:"rgb(57, 190, 57)"}}></div>
            <span>Your Selection</span>
          </div>
        </div>

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
      row: 5,
      label: "L",
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
      row: 6,
      label: "K",
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
      row: 7,
      label: "J",
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
      row: 11,
      label: "E",
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
      row: 12,
      label: "C",
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
      row: 13,
      label: "B",
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
      row: 14,
      label: "A",
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
    // Repeat the structure for other rows...
  ]
}
// <Seat isAvailable={ true } isEmpty={ false } />
