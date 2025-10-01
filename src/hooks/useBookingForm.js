// hooks/useBookingForm.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../utils/validation";

const STEP_FIELDS = {
  1: ["name", "email", "phone", "duration", "addons", "number"],
  2: ["roomType", "date", "time", "guests", "duration"],
  3: ["paymentMethod", "cardNumber", "expiryDate", "cvv"],
};

export const useBookingForm = () => {
  const [step, setStep] = useState(1);
  
  const form = useForm({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      roomType: "",
      date: "",
      time: [],
      paymentMethod: "",
      cardNumber: "",
      number: 1,
      guests: 1,
      duration: 1,
    },
  });

  const nextStep = async () => {
    const fields = STEP_FIELDS[step] || [];
    
    if (fields.length > 0) {
      const isValid = await form.trigger(fields);
      console.log(`Step ${step} validation:`, isValid, "Fields:", fields);
      
      if (!isValid) {
        console.log("Validation errors:", form.formState.errors);
        return;
      }
    }
    
    setStep(prev => Math.min(4, prev + 1));
  };

  const prevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const goToStep = (targetStep) => {
    setStep(targetStep);
  };

  return {
    step,
    setStep: goToStep,
    nextStep,
    prevStep,
    form,
  };
};