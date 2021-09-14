import React, {useEffect} from "react"
import {Button, ButtonGroup, Dropdown, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import categories, {fetchAllCategories} from "../../store/categories";
import {fetchAllStoriesAndProfiles} from "../../store/stories";
import * as Yup from "yup"
import {httpConfig} from "../shared/utils/http-config";
import {FormDebugger} from "../shared/FormDebugger";
import {Formik} from "formik";

export function CreateStory() {
    const categories = useSelector(state => state.categories ? state.categories : []);
    const auth = useSelector(state => state.auth ? state.auth : null);
    const initialValues = {
        storyProfileId: auth?.profileId,
        storyCategoryId: "",
        storyTitle: "",
        storyCity: "",
        storyState: "",
        storyBody: ""
    }

    const validation = Yup.object().shape({
        storyCategoryId: Yup.string().required("Please select a category."),
        storyTitle: Yup.string().required("Please provide Story Title").max(45,"Title can not exceed 45 characters"),
        storyCity: Yup.string().required("Please provide City").max(45,"City Name can not exceed 45 characters"),
        storyState: Yup.string().required("Please provide State").max(45,"Use 2-character state abbreviation"),
        storyBody: Yup.string().required("Story must have content").min(100,"Story must be minimum 100 characters")
    })

    const submitStoryHandler=(values, {resetForm,setStatus})=>{
        httpConfig.post("/apis/story/",values)
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

                        <Form.Group controlId="storyCategoryId">
                            <Form.Control
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

                        <Form.Group className="mb-3" controlId="profileUsername">
                            <Form.Label htmlFor={"storyTitle"}>Story Title:</Form.Label>
                            <Form.Control type="text" id="storyTitle" placeholder="Title" sm
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

                        <Form.Group className="mb-3" controlId="profileUsername">
                            <Form.Label htmlFor={"storyCity"}>Story City:</Form.Label>
                            <Form.Control type="text" id="storyCity" placeholder="City" sm
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.storyCity && touched.storyCity && (
                                    <div className="alert alert-danger">
                                        {errors.storyCity}
                                    </div>
                                )

                            }
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor={"storyState"}>Story State:</Form.Label>
                            <Form.Control type="text" id="storyState" placeholder="State" sm
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.storyState && touched.storyState && (
                                    <div className="alert alert-danger">
                                        {errors.storyState}
                                    </div>
                                )

                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="profileUsername">
                            <Form.Label htmlFor={"storyBody"}>Story:</Form.Label>
                            <Form.Control style={{minHeight: '150px'}} as="textarea" id="storyBody" placeholder="Enter story here..." sm
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

                        <FormDebugger {...props} />
                        {
                            status && (<div className={status.type}>{status.message}</div>)
                        }

                    </Form>)
                }}

            </Formik>
        </>

    )
}

function CreateStoryContent(props){

}