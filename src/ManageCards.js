import React from 'react';
import api from './api';
import CardsList from './CardsList';
import FormCreateEdit from './FormCreateEdit';

class ManageCards extends React.Component {

  state = { cards: [], loading: false,editKey:"" };

  componentDidMount() {
    this.setState({ loading: true });
    this.getCardsDack();
  }
  //API CRUD:GET
  getCardsDack = async () => {
    let cards =
      await api.getCards();

    this.setState({
      cards: cards,
      loading: false
    });
  }
  //API CRUD:DELETE
  setDelete = async (event, key) => {
    debugger;
    this.setState(
      { loading: true },

      async () => {
        await api.deleteCard(key);
        this.setState({
          loading: false
        });
        await this.getCardsDack();
      });
  }
  /////API CRUD:EDIT CARD
  setEdit = async (event,key) => {
    this.setState({editKey:key});
  }
  updateCard=async(key, question, answer)=>
  {
     let card = {
      "id": key,
      "question": question,
      "answer": answer
    };
    await api.updateCard(card);

    await this.getCardsDack();
  }
  ////API CRUD:CREATE NEW CARD
  onAdd = async (key, question, answer) => {
    
    this.setState({ loading: true },
      async () => {
        
        let card = {
          "id": key,
          "question": question,
          "answer": answer
        }

        await api.createCard(card);
        
        await this.getCardsDack();
        this.setState({
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        <CardsList 
          cards={this.state.cards} 
          onDelete={this.setDelete} 
          onEdit={this.setEdit}>
        </CardsList>
        <FormCreateEdit 
          cards={this.state.cards} 
          addCard={this.onAdd}
          onEdit={this.updateCard}>
        </FormCreateEdit>
      </div>
    )
  }
};

export default ManageCards;
