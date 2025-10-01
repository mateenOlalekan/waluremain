// components/Booking/BookingPage.jsx
import { FormProvider } from "react-hook-form";
import { useBookingForm } from "../hooks/useBookingForm";
import ProgressIndicator from "../components/Booking/ProgressIndicator";
import StepHeader from "../components/Booking/StepHeader";
import PersonalDetails from "../components/Booking/PersonalDetails";
import BookingDetails from "../components/Booking/BookingDetails";
import PaymentDetails from "../components/Booking/PaymentDetails";
import Confirmation from "../components/Booking/Confirmation";


const STEPS = [
  { id: 1, label: "Personal Info", description: "Tell us about yourself" },
  { id: 2, label: "Workspace", description: "Choose your space and time" },
  { id: 3, label: "Payment", description: "Secure payment processing" },
  { id: 4, label: "Confirmation", description: "Review and confirm" },
];

export default function BookingPage() {
  const { step, nextStep, prevStep, setStep, form } = useBookingForm();
  const { handleSubmit, formState: { isSubmitting } } = form;

  const getStepTitle = (step) => {
    const titles = {
      1: "Personal Information",
      2: "Select Your Workspace", 
      3: "Payment Details",
      4: "Booking Confirmation",
    };
    return titles[step];
  };

  const onSubmit = async (data) => {
    try {
      console.log("Booking Confirmed:", data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep(4);
    } catch (error) {
      console.error("Booking submission failed:", error);
    }
  };

  const currentStep = STEPS.find(s => s.id === step);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-14">
      <div className="max-w-7xl mx-auto">

      {currentStep && (
          <StepHeader
            title={getStepTitle(step)}
            description={currentStep.description}
          />
        )}
        {/* Progress Indicator */}
        <ProgressIndicator 
          steps={STEPS} 
          currentStep={step} 
          onStepClick={setStep}
        />

        {/* Step Header */}


        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {step === 1 && <PersonalDetails />}
              {step === 2 && <BookingDetails />}
              {step === 3 && <PaymentDetails />}
              {step === 4 && <Confirmation onEdit={() => setStep(1)} />}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                <div>
                  {step > 1 && step < 4 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg transition-colors"
                    >
                      Back
                    </button>
                  )}
                </div>

                <div>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Continue
                    </button>
                  ) : step === 3 ? (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? "Processing..." : "Complete Booking"}
                    </button>
                  ) : null}
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}