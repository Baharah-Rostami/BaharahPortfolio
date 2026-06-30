import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const onSubmit = async (data) => {
    try {
      setStatus({
        type: "",
        message: "",
      });

      const formData = new FormData();

      // Replace this with your own Web3Forms access key
      formData.append("access_key", "YOUR_ACCESS_KEY");

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        reset();
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message.",
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    status,
    onSubmit,
  };
}