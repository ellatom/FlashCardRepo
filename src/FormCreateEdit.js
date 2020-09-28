import React from 'react';


class FormCreateEdit extends React.Component {

    state={id:"",question:"",answer:""}

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    editCard=()=>
    {
        // this.props.onEdit(this.props.editKey,this.state.question,this.state.answer);
    }

    addCard = async (event) => {
        document.querySelector(".msg").innerHTML="";

        if(this.props.editKey!=="")
            this.editCard();
        event.preventDefault();
        
        let key=
          String(Math.floor(Math.random() * 200)+100);
       
        if(this.state.question==="" || this.state.answer==="")
            document.querySelector(".msg").innerHTML="Field shouldnt be empty";

        this.props.addCard(key,this.state.question,this.state.answer);
        // document.querySelector("textarea").innerHTML="";
    }

    render() {
        console.log(`FormCreateEdit.render`);
        return (
            <div>
                <br/>
                <div>Add/Edit More Cards</div>
                <form id="myForm" className="form">
                    <label htmlFor="Question">Question:</label>
                    <br/>
                    <textarea 
                        id="question" 
                        name="question" 
                        value={this.state.question} 
                        onChange={this.handleChange} 
                        rows="3" cols="50" 
                        placeholder="Insert Question here">
                    </textarea>
                    <br/>
                    <label htmlFor="Answer">Answer:</label>
                    <br/>
                    <textarea 
                        id="answer"  
                        name="answer" 
                        value={this.state.answer} 
                        onChange={this.handleChange} 
                        rows="3" cols="50" 
                        placeholder="Insert Answer here">
                    </textarea>
                    <br/>
                    <button onClick={this.addCard}> Add</button>
                    <div className="msg"></div>
                </form>
            </div>
        )
    }
}
export default FormCreateEdit;
