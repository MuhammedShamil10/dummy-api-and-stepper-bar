import React from "react";
import "./App.css";
import { UserDataList } from "./container/userDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserDataList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
