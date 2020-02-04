
const titles = {
    title:'Indecision-app',
    info:'"Make the Computer Choose"',
    options:[]

};

const onFormSubmit = (e) =>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        titles.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
    
};

const onFormWipe = () =>{
   titles.options = [];
   renderIndecisionApp();
    
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * titles.options.length);
    const option = titles.options[randomNum];
    alert(option);
};


const numbers = [55,101,3451];

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
        <h1>{titles.title}</h1>
          <p>{titles.info ? titles.info: 'No Subtitle Yet'}</p>
          <p>{titles.options.length > 0 ? 'Here are your Options':'No Options'}</p>
          <button disabled={titles.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
          <button onClick={onFormWipe}>Remove</button>

          <ol>{
          titles.options.map((option) =>  <li key={option}>Item: {option}</li>)
            }
          </ol>
    
          <form onSubmit={onFormSubmit}>
            <input type = "text" name="option"/>
            <button>Add Option</button>
          </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};


renderIndecisionApp();



