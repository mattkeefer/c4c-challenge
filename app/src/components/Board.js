import Post from "./Post";
import { Button, Form, Input, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { useState } from "react";

export default function Board(props) {

    const [message, setMessage] = useState("");
    const [toast, setToast] = useState(false);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await fetch('/posts', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });

        if (res.status !== 201) {
            setToast(true);
        } else {
            setToast(false);
            setMessage('');
        }
    }

    return (
        <div className="board">
            {toast && 
            <div className="alert">
                <Toast>
                    <ToastHeader>Invalid Message!</ToastHeader>
                    <ToastBody>Please ensure message length is between 1 and 128 characters</ToastBody>
                </Toast>
            </div>}
            <h1>Community Board</h1>
            <hr /> <br />
            <Form className="form" onSubmit={handleSubmit}>
                <span>
                    <Input type="text" id="message" placeholder="Type a message here..." onChange={handleChange} value={message} />
                    <Button id="button">Send</Button>
                </span>
            </Form>
            <br /> <br />
            {props.posts.map(post =>
                <div key={post.postId}>
                    <Post key={post.postId} message={post.message} timestamp={post.timestamp} />
                    <br/>
                </div>
            )}
        </div>
    );
}