import React from 'react';
import ReactDOM from 'react-dom';

const part1 = 'Fundamentals of React'
    const e1 = 10
    const part2 = 'Using props to pass data'
    const e2 = 7
    const part3 = 'State of a component'
    const e3 = 14


const Header = (props) => {
    return(
      <div><h1>{props.course}</h1></div> 
    )
}

const Content = (props) => {
    
    return(
      <div>
          <Part part={part1} exercises={e1}/>
          <Part part={part2} exercises={e2}/>
          <Part part={part3} exercises={e3}/>
      </div>
    )
}

const Part = (props) => {
    return(
    <p>{props.part} {props.exercises}</p>  
    )
}

const Total = (props) => {
    return(
        <div>Number of exercises {props.e1 + props.e2 + props.e3}</div>
    )
}

const App = () => {
    const course = 'Half Stack application development'

    return(
        <div>
           <Header course={course}/>
           <Content />
           <Total e1={e1} e2={e2} e3={e3}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

