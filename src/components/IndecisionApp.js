import React from 'react';
import AddOptions from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
    };

    handleDeleteOptions= () =>{
        this.setState(()=>({options:[]}));
    };

    handleDeleteOption= (optionToRemove) =>{
        this.setState((prevState) => ({
            options:prevState.options.filter((option)=> optionToRemove !== option)
        }));
    };
   handlePick= () =>{
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({
          selectedOption:option}))
   };

   handleAddOption = (option) =>{
    if(!option){
        return 'Enter a valid value please!';
    }else if(this.state.options.indexOf(option) > -1){
        return 'option exsists ya nerd';
    }
        this.setState((prevState) => ({options:prevState.options.concat([option])}));
   };

   handleOkayModal = () =>{
    this.setState(() => ({selectedOption:undefined}));
   }
   
    render(){
        const title = 'Indecision';
        const subtitle = 'Make the computer decide for you';
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className = "container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className = "widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                
                     />
                        <AddOptions 
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                    
                </div>
                
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleOkayModal = {this.handleOkayModal}/>
            </div>
        );
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
            }
        }catch(e){
            //Do nothing at all
        };
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!==this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
        };
    }

    componentWillUnmount(){
        console.log('dead comp');
    }

    
}
 



