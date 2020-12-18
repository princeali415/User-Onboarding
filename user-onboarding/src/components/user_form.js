import React from "react";

export default function UserForm(props){
    const { values, submit, change, disabled, errors } = props

const onSubmit = evt => {
    evt.preventDefault();
    submit();
};

const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse)
}


    return (
        <form className='form container' onSubmit={onSubmit}> 
            <div className='form-group submit'>
                <h2>Add a User</h2>

                

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms_of_service}</div>
                </div>
            </div>

            <div className="form-group inputs">

                <h4>General information</h4>

                <label>
                Name
                <input
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                />
                </label>
                <label>
                Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="email"
                />
                </label>
                <label>
                Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="password"
                />
                </label>
                <label>
                    Terms of Service
                    <input
                    onChange={onChange}
                    checked={values.terms_of_service}
                    name="terms_of_service"
                    type="checkbox"
                    />
                </label>
                
            </div>    

            <button disabled={disabled}>submit</button>     

        </form>
    )
}