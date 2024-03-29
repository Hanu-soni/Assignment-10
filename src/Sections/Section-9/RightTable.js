import React from 'react'

const RightTable = () => {

    const data = [
        ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3", "Row 1 Col 4"],
        ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3", "Row 2 Col 4"],
        ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3", "Row 3 Col 4"],
        ["Row 4 Col 1", "Row 4 Col 2", "Row 4 Col 3", "Row 4 Col 4"],
        ["Row 5 Col 1", "Row 5 Col 2", "Row 5 Col 3", "Row 5 Col 4"],
        ["Row 6 Col 1", "Row 6 Col 2", "Row 6 Col 3", "Row 6 Col 4"],
        ["Row 7 Col 1", "Row 7 Col 2", "Row 7 Col 3", "Row 7 Col 4"]
    ];
  return (
    <div>
        <table class="table table-bordered">
        <tbody>
                {data.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowData.map((cellData, cellIndex) => (
                            <td key={cellIndex}>{cellData}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
  
        </table>
    </div>
  )
}

export default RightTable