import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useContactForm() {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
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
          message: "Something went wrong.",
        });
      }
    } catch {
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