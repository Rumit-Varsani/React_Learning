import {  render, screen } from "@testing-library/react";
import Contact from "../contact";
import '@testing-library/jest-dom';


const con = ()=>{
    return render(<Contact/>);
};

test('Heading is first', () => {
      
    con();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

  

});

test('Placeholder is the 2nd', () => {  
    con();
    const placeholder = screen.getByPlaceholderText("Enter the Name");
    expect(placeholder).toBeValid();
});


test('Input fields is 3rd', () => {  
    con();
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields.length).toBe(2);
});

test('Button is rendered as the fourth element', () => { 
    con();
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();


    
});




//Heading
//Placeholder
//input fields 
//Button