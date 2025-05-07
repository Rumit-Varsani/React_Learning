import { sum } from "../sum";

test("sum the numbers",()=>{
    const result =sum(5,5);


    expect(result).toBe(10);
});