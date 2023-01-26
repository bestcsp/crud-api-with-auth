import React,{useState, useRef, useMemo} from 'react';
import JoditEditor from 'jodit-react';
import { Form, Button, Modal } from "react-bootstrap/";





const ADDPOST = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [meta, setmeta] = useState("");
  const editor = useRef(null);
    const placeholder = 'Start typings...'


	const config = useMemo(()=>{
    return {
			readonly: false, // all options from https://xdsoft.net/jodit/doc/,
			placeholder: 'Start typings...'
		}
  },
		[placeholder]
	);
 

  // function SignupApi(data) {
  //   PostApiCall(data, "/signup", null, "post")
  //     .then((response) => {
  //       console.log("login response", response);
  //       localStorage.setItem("user", response);
  //       props.props.set.data.setSucess(true);
  //       props.props.set.data.setMessage("You have successfully signed Signup");
  //       props.props.onHide();
  //     })
  //     .catch((err) => {
  //       console.log("error after signup call", err);
  //       props.props.set.data.setError(true);        
  //       // err.messsge = "User Already exists with email";
  //       props.props.set.data.setMessage(err);
  //       props.props.onHide();
  //     });
  // }
  async function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Enter Title </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text value={title} className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {setContent(newContent)}}
		/>
    
    {content}
          <Form.Text value={content} className="text-muted"></Form.Text>
        </Form.Group>     
        <Form.Group className="mb-3" controlId="meta">
          <Form.Label>Add Meta data</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Meta Data"
            onChange={(e) => setmeta(e.target.value)}
          />
          <Form.Text value={meta} className="text-muted"></Form.Text>
        </Form.Group>   
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
      </Form>
    </>
  );
};

// const ADDPOST = () => {
// 	const editor = useRef(null);
// 	const [content, setContent] = useState('');
//   const placeholder = 'Start typings...'

// 	// eslint-disable-next-line react-hooks/exhaustive-deps
// 	const config = useMemo(()=>{
//     return {
// 			readonly: false, // all options from https://xdsoft.net/jodit/doc/,
// 			placeholder: 'Start typings...'
// 		}
//   },
// 		[placeholder]
// 	);

// 	return (
// 		<JoditEditor
// 			ref={editor}
// 			value={content}
// 			config={config}
// 			tabIndex={1} // tabIndex of textarea
// 			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
// 			onChange={newContent => {setContent(newContent)}}
// 		/>
// 	);
// };


export default ADDPOST;