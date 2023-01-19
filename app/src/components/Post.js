export default function Post(props) {

    const timestamp = props.timestamp;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleTimeString();

    return (
        <div className="post">
            <div className="message">{props.message}</div>
            <div className="timestamp"> {formattedDate}</div>
        </div>
    );
}