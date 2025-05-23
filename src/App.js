import CheckoutStepper from "./CheckoutStepper";
import "./styles.css";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>CheckOut Steps</h1>

      <CheckoutStepper checkoutStep={CHECKOUT_STEPS} />
    </div>
  );
}
