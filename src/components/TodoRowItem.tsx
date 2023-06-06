import React from "react"
export const  TodoRowItem:React.FC<{
    rowNumber:number,
    rowDescription:string,
rowAssigned:string,
deleteTodo:Function
}>=(props) =>{

    //const rowNumber=3;
   // const rowDescription='feed dog';
   // const rowAssigned='eric';
    return (
        <tr onClick={()=> props.deleteTodo(props.rowNumber)}>
            <th scope='col'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>

    )
    
    }