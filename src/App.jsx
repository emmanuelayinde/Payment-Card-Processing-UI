import { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;
const applicationId = import.meta.env.VITE_SQUARE_APPLICATION_ID;

const App = () => {
  const [token, setToken] = useState("");

  return (
    <PaymentForm
      applicationId={applicationId}
      cardTokenizeResponseReceived={({ token }) => {
        setToken(token);
      }}
      locationId={locationId}
    >
      <div className="credit-card-container">
        {token && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <p>Your Payment Token is 👇</p>
            <strong>{token}</strong>
          </div>
        )}
        <CreditCard />
      </div>
    </PaymentForm>
  );
};

export default App;
