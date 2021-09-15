import React, {useEffect} from "react"
import {Button, ButtonGroup, Dropdown, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import categories, {fetchAllCategories} from "../../store/categories";
import {fetchAllStoriesAndProfiles} from "../../store/stories";
import * as Yup from "yup"
import {httpConfig} from "../shared/utils/http-config";
import {FormDebugger} from "../shared/FormDebugger";
import {Formik} from "formik";
import {fetchAuth} from "../../store/auth";

export function CreateStory() {
    const categories = useSelector(state => state.categories ? state.categories : []);
    const auth = useSelector(state => state.auth ? state.auth : null);
    const initialValues = {
        storyCategoryId: "",
        storyTitle: "",
        storyLocationCity: "",
        storyLocationState: "",
        storyBody: ""
    }

console.log(auth)

    const validation = Yup.object().shape({
        storyCategoryId: Yup.string().required("Please select a category."),
        storyTitle: Yup.string().required("Please provide Story Title").max(45,"Title can not exceed 45 characters"),
        storyLocationCity: Yup.string().required("Please provide City").max(45,"City Name can not exceed 45 characters"),
        storyLocationState: Yup.string().required("Please provide State").max(45,"Use 2-character state abbreviation"),
        storyBody: Yup.string().required("Story must have content").min(100,"Story must be minimum 100 characters")
    })

    const submitStoryHandler=(values, {resetForm,setStatus})=>{
        const requestBody = {...values, storyProfileId:auth.profileId}
        httpConfig.post("/apis/story/",requestBody)
            .then(reply=>{
                let{message, type} = reply
                if(reply.status === 200){
                    resetForm()
                }
                setStatus({message, type})
            })
    }

    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllCategories());
        dispatch(fetchAuth())
    };

    useEffect(effects, [dispatch]);

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={submitStoryHandler}>
                {props => {
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
                        handleReset,
                        setFieldValue
                     } = props;


                    return(<Form onSubmit={handleSubmit}>

                        <div className={"storyInput-bg"} lg={12}>

                        <Form.Group controlId="storyCategoryId">
                            <Form.Control>
                                as="select"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >  <option value="">--Please choose a Category--</option>
                                {categories.map(category => (
                                    <option value={category.categoryId}
                                    key={category.categoryId}
                                    >
                                        {category.categoryName}
                                    </option>))}
                            </Form.Control>

                            {
                                errors.storyCategoryId && touched.storyCategoryId && (
                                    <div className="alert alert-danger">
                                        {errors.storyCategoryId}
                                    </div>
                                )

                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="storyTitle">
                            <Form.Label>Story Title:</Form.Label>
                            <Form.Control type="text" placeholder="Title" sm

                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.storyTitle && touched.storyTitle && (
                                    <div className="alert alert-danger">
                                        {errors.storyTitle}
                                    </div>
                                )

                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="storyLocationCity">
                            <Form.Label>Story City:</Form.Label>
                            <Form.Control type="text" placeholder="City" sm
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.storyLocationCity && touched.storyLocationCity && (
                                    <div className="alert alert-danger">
                                        {errors.storyLocationCity}
                                    </div>
                                )

                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="storyLocationState">
                            <Form.Label>Story State:</Form.Label>
                            <Form.Control type="text"  placeholder="State" sm
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.storyLocationState && touched.storyLocationState && (
                                    <div className="alert alert-danger">
                                        {errors.storyLocationState}
                                    </div>
                                )

                            }
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="storyBody">
                            <Form.Label>Story:</Form.Label>
                            <Form.Control style={{minHeight: '150px'}} as="textarea" placeholder="Tell us your story..." sm
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.storyBody && touched.storyBody && (
                                    <div className="alert alert-danger">
                                        {errors.storyBody}
                                    </div>
                                )

                            }
                        </Form.Group>

                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" type="submit">Submit</Button>
                            <Button variant="secondary">Edit</Button>
                            <Button variant="secondary">Delete</Button>
                        </ButtonGroup>

                        {
                            status && (<div className={status.type}>{status.message}</div>)
                        }

                        </div>
                    </Form>)
                }}

            </Formik>

        </>

    )
}

function CreateStoryContent(props){

}