import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const App = () => {
  const applicationId = import.meta.env.VITE_SQUARE_APPLICATION_ID;
  const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;

  return (
    <PaymentForm
      applicationId={applicationId}
      cardTokenizeResponseReceived={(token, buyer) => {
        console.info({ token, buyer });
      }}
      locationId={locationId}
    >
      <div className="credit-card-container">
        <CreditCard />
      </div>
    </PaymentForm>
  );
};

export default App;
