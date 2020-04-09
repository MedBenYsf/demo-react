import React from 'react'
import classnames from 'classnames'

export default function InputTextGroup(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} 
            className={classnames('form-control', {
                'is-invalide': props.error})}
                value={props.value} onChange={props.onChange} />
            <div className="invalid-feedback d-block">
                {props.error}
            </div>

        </div>
    )
}
