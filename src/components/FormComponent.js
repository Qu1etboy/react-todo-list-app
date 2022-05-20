import './FormComponent.css'

function FormComponent(props) {
    const userSubmit = () => {
        var task = document.getElementById("input").value;
        if (task !== "") {
            props.handleInput(document.getElementById("input").value);
            document.getElementById("input").value = "";
        }
        else {
            alert("Please add something you want to do first");
        }
    }

    const userEnter = (e) => {
        var task = document.getElementById("input").value;
        if (e.key === 'Enter') {
            if (task !== "") {
                props.handleInput(document.getElementById("input").value);
                document.getElementById("input").value = "";
            }
            else {
                alert("Please add something you want to do first");
            }
        }
    }
    return (
        <div className="form-container">
            <input 
            id="input" 
            className="input-box" 
            type="text" 
            placeholder="What to do today?" 
            autoComplete='off'
            onKeyDown={userEnter}
            >
            </input>
            <button className="btn-submit" type="submit" onClick={userSubmit}>Add task</button>
        </div>
    );
}

export default FormComponent;