import "./style.css";

export default function Input({ label, children, ...rest }) {
    return (
        <div className="inputContainer">
            <div>
                <label>{label}</label>
                <input {...rest} />
            </div>
            {children}
        </div>
    )
}