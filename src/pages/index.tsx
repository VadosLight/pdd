import { Route, Routes } from "react-router-dom";
import { TestingPage } from "./testing";
import { MainPage } from "./main";
// import { getTicket } from "shared/api/tickets";

export const Routing = () => {

  return (
    <Routes>
      <Route path="testing/:id" element={<TestingPage />} />
      {/* <Route path="results" /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<h2>Страница не найдена</h2>} />
    </Routes>
  );
};
