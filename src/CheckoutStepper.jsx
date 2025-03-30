import { useState, useRef, useEffect } from "react";

const CheckoutStepper = ({ checkoutStep = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  const stepRefs = useRef([]);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  function nextStepHandler() {
    if (currentStep === checkoutStep.length) {
      setIsFinished(true);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  }

  const ActiveComponent = checkoutStep[currentStep - 1]?.Component;

  function calculateProgress() {
    return ((currentStep - 1) / (checkoutStep.length - 1)) * 100;
  }

  useEffect(() => {
    setMargins({
      marginLeft: stepRefs.current[0]?.offsetWidth / 2,
      marginRight: stepRefs.current[checkoutStep.length - 1]?.offsetWidth / 2,
    });
  }, [stepRefs,checkoutStep.length]);

  return (
    <div className="checkout-step">
      <div className="stepper">
        {checkoutStep.map((step, index) => {
          const isCompleted = index + 1 < currentStep || isFinished;
          return (
            <div
              className="step"
              key={step.name}
              ref={(ele) => (stepRefs.current[index] = ele)}
            >
              <span
                className={`step-number  
                    ${
                      isCompleted
                        ? "completed"
                        : currentStep === index + 1
                        ? "active"
                        : ""
                    }
                `}
              >
                {isCompleted ? <span>&#10003;</span> : index + 1}
              </span>
              <span className="step-name">{step.name}</span>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{
              width: `${calculateProgress()}%`,
            }}
          ></div>
        </div>
      </div>

      {!isFinished && <ActiveComponent />}

      {!isFinished && (
        <button onClick={nextStepHandler}>
          {currentStep === checkoutStep.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default CheckoutStepper;
