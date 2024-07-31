import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import UserContext from "../utils/loggedUserContext";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("should render the header component with navigation links and a login button", async () => {
  const user = { username: "guest", isLoggedIn: false };
  const setUser = jest.fn();

  render(
    <Provider store={appStore}>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );

  // Check if the header is in the document
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();

  // Check for the login button
  const loginButton = screen.getByRole("button", { name: /login/i });
  expect(loginButton).toBeInTheDocument();
  });


  test("Login button should change to Logout button on click", () => {
    // Initial user state
    const user = { username: "guest", isLoggedIn: false };
    const setUser = jest.fn((newUser) => {
      user.isLoggedIn = newUser.isLoggedIn; 
    });
  
    render(
      <Provider store={appStore}>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    );
  
    // Check for the login button
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  
    // Simulate click on the login button
    fireEvent.click(loginButton);
  
    // Check if the login button changed to logout
    expect(setUser).toHaveBeenCalledWith({ username: "John Doe", isLoggedIn: true });
    expect(user.isLoggedIn).toBe(true);
    
    // Simulate the rerender after state change
    render(
      <Provider store={appStore}>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    );
  
    // Check if the logout button is present
    const logoutButton = screen.getByRole("button", { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
  });
