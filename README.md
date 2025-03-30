# Checkout Component
Created with CodeSandbox

## Overview

The **Checkout Component** is a step-based UI feature that guides users through the checkout process in a structured and interactive manner. It consists of multiple steps, each handling different aspects of the checkout process, and allows seamless navigation with a progress indicator.

## Features

- **Step-by-Step Navigation:** Users progress through multiple checkout stages.
- **Dynamic Step Content:** Each step displays relevant content dynamically.
- **Progress Indicator:** A visual stepper highlights the current stage.
- **State Management:** Manages step transitions using React state.
- **Completion Handling:** Marks completed steps and finalizes the checkout process.

## Steps in the Checkout Process

1. **Customer Info** – Users provide their contact details.
2. **Shipping Info** – Users enter their shipping address.
3. **Payment** – Users complete the payment process.
4. **Delivered** – Displays the final confirmation after order completion.

## How It Works

- The `CheckoutStepper` component renders steps and tracks progress.
- Clicking **Next** moves to the next step.
- The **progress bar** updates dynamically.
- A checkmark (`✔`) appears on completed steps.
- Once all steps are completed, the user sees the final confirmation.

## Technologies Used

- **React (useState, useRef, useEffect)**
- **CSS for Styling**
- **Dynamic Component Rendering**
- **Event Handling**

## Usage

To integrate the Checkout Component into your project:

1. Import the `CheckoutStepper` component.
2. Define the steps using the `CHECKOUT_STEPS` array.
3. Render `CheckoutStepper` inside your main component.
