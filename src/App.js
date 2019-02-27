import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = "87d177a70ad9063e57b16cb1cc6d8f97";

class App extends Component {

   state = {
     recipes: []
   }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`);
    
    const data = await api_call.json();
     this.setState({
       recipes: data.recipes
     });
   // console.log(this.state.recipes);
   // console.log(data.recipes[0].recipe_id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        {this.state.recipes.map((recipe) => {
          return (
            <div>
              <img src={recipe.image_url} alt={recipe.title} />
              <p key={recipe.recipe_id}>{recipe.title}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
