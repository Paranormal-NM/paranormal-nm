import {Button, Form} from "react-bootstrap";
import React from "react";
import {FormDebugger} from '../shared/FormDebugger'
export const SignupFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

return ( <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="profileUsername">
        <Form.Control type="username" placeholder="Username (may be real name or a handle)" sm
                      value={values.profileUsername}
                      onChange={handleChange}
                      onBlur={handleBlur}
        />
        {
            errors.profileUsername && touched.profileUsername && (
                <div className="alert alert-danger">
                    {errors.profileUsername}
                </div>
            )

        }
    </Form.Group>

    <Form.Group className="mb-3" controlId="profileAddressCity">
        <Form.Control type="address" placeholder="City/State" sm
                      value={values.profileAddressCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
        />
        {
            errors.profileAddressCity && touched.profileAddressCity && (
                <div className="alert alert-danger">
                    {errors.profileAddressCity}
                </div>
            )

        }

    </Form.Group>

    <Form.Group className="mb-3" controlId="profileAddressState">
        <Form.Control type="address" placeholder="City/State" sm
                      value={values.profileAddressState}
                      onChange={handleChange}
                      onBlur={handleBlur}
        />

        {
            errors.profileAddressState && touched.profileAddressState && (
                <div className="alert alert-danger">
                    {errors.profileAddressState}
                </div>
            )

        }
    </Form.Group>

    <Form.Group className="mb-3" controlId="profileEmail">
        <Form.Control type="email" placeholder="Email Address" sm
                      value={values.profileEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}

        />

        {
            errors.profileEmail&& touched.profileEmail && (
                <div className="alert alert-danger">
                    {errors.profileEmail}
                </div>
            )

        }
    </Form.Group>

    <Form.Group className="mb-3" controlId="profilePassword">
        <Form.Control type="password" placeholder="Password" sm
                      value={values.profilePassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
        />

        {
            errors.profilePassword && touched.profilePassword && (
                <div className="alert alert-danger">
                    {errors.profilePassword}
                </div>
            )

        }

    </Form.Group>

    <Form.Group className="mb-3" controlId="profilePasswordConfirm">
        <Form.Control type="password" placeholder="Re-enter Password" sm
                      value={values.profilePasswordConfirm}
                      onChange={handleChange}
                      onBlur={handleBlur}
        />
        {
            errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
                <div className="alert alert-danger">
                    {errors.profilePasswordConfirm}
                </div>
            )

        }
    </Form.Group>
    <Button variant="btn btn-primary" type="submit">
        Submit
    </Button>
    {/*<FormDebugger {...props} />*/}
    {
        status && (<div className={status.type}>{status.message}</div>)
    }



</Form> )
}