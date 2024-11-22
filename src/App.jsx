import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { useState } from "react";

const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;
const serverUrl = import.meta.env.VITE_PAYMENT_SERVER_URL;
const applicationId = import.meta.env.VITE_SQUARE_APPLICATION_ID;

const App = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  return (
    <PaymentForm
      applicationId={applicationId}
      cardTokenizeResponseReceived={({ token }) => {
        if (!amount || !currency) return;
        fetch(serverUrl + "/payments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceId: token,
            amount: parseInt(amount),
            currency: currency,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
      }}
      locationId={locationId}
    >
      <div className="credit-card-container">
        <div className="user-input-container">
          <div>
            <label htmlFor="amount" style={{ color: "blue" }}>
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid blue",
              }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="currency" style={{ color: "blue" }}>
              Currency:
            </label>
            <select
              id="currency"
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid blue",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <CreditCard />
      </div>
    </PaymentForm>
  );
};

export default App;
