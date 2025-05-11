import {render, screen} from "@testing-library/react";
import mockData from "../../Mocks/rescardmock.json";
import ResturentCard from "../ResturentCard";
import "@testing-library/jest-dom";
// it("should render RestuarantCard component with the props mock data",()=>{
//     render(

//         <ResturentCard resData={Mock_Data.info}/>
        
//     );    
//     console.log(Mock_Data.info);
// });
test('should render RestuarantCard component with the props mock data', () => { 
    render(
       <ResturentCard resData={mockData}/>
    );
    
    const resName = screen.getByText("McDonald's");
    expect(resName).toBeInTheDocument(); 
 });

