import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { Provider } from "react-redux";
import HomePageContainer from "./pages/HomePage/HomePageContainer";
import DetailPageContainer from "./pages/DetailPage/DetailPageContainer";
import LoginPageContainer from "./pages/LoginPage/LoginPageContainer";
import RegisterPageContainer from "./pages/RegisterPage/RegisterPageContainer";
import PrivateRoute from "./auth/PrivateRoute";
import store from "./state/store";

function App() {
    return (
        <AuthProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <HomePageContainer />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/detail"
                            element={
                                <PrivateRoute>
                                    <DetailPageContainer />
                                </PrivateRoute>
                            }
                        />
                        {/* <Route path="/detail" element={<DetailPageContainer />} /> */}
                        <Route path="/login" element={<LoginPageContainer />} />
                        <Route path="/register" element={<RegisterPageContainer />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </AuthProvider>
    )
}

export default App;