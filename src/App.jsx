import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RegistrationProvider } from "./context/RegistrationContext";
import { WizardLayout } from "./components/WizardLayout";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import Review from "./pages/Review";

export default function App() {
  return (
    <BrowserRouter>
      <RegistrationProvider>
        <WizardLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/step-1" />} />
            <Route path="/step-1" element={<StepOne />} />
            <Route path="/step-2" element={<StepTwo />} />
            <Route path="/step-3" element={<StepThree />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </WizardLayout>
      </RegistrationProvider>
    </BrowserRouter>
  );
}