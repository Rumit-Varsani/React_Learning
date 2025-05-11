import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("get login btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getByText("Login");

  expect(loginbtn).toBeInTheDocument();
  
});
test("Cart Icon check", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cIcon = screen.getByTestId("cart-icon");
  expect(cIcon).toBeInTheDocument();
});
test("Get Login Logout Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtns = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginbtns);

  const logoutBtn = screen.getByRole("button",{name:"Logout"});
  expect(logoutBtn).toBeInTheDocument();

});

//get login btn
//cart Icon check
//get login-logout btn
