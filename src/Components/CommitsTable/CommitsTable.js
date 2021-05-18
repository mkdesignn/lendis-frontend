import React from 'react';
import classes from './CommitsTable.module.css'
import {Table} from 'react-bootstrap'


const CommitsTable = (props) => {

    const rows = props.data?.map((row, key) =>{
            return( <tr key={key}>
                    <td>{row.hash_id}</td>
                    <td>{row.comment}</td>
                </tr>)
    });

    return (
        <div className={classes.container}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th># ID</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    )
}

export default CommitsTable;