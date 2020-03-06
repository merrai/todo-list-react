import React, { Component } from 'react'

export default class extends Component {
    render() {
        const {title,handleDelete,handleEdit}=this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                    <h6>{title}</h6>
                    <span className='mx-2 text-success'><i className='fa fa-pencil' onClick={handleEdit}></i></span>
                    <span className='mx-2 text-danger'><i className='fa fa-trash' onClick={handleDelete}></i></span>
            </li>

        )
    }
}
