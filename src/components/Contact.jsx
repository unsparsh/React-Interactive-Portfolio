"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
  e.preventDefault();

  const firstname = e.target.firstname.value.trim();
  const lastname = e.target.lastname.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  // Validation
  if (!firstname || !lastname || !email || !message) {
    alert("All fields are required!");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // EmailJS logic
  emailjs.send(
    import.meta.env.VITE_SERVICE_ID_EMAILJS,
    import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
    {
      firstname,
      lastname,
      email,
      message,
    },
    import.meta.env.VITE_PUBLIC_KEY_EMAILJS
  )
  .then(() => {
    alert("Message sent successfully!");
    e.target.reset(); // clear form after submit
  })
  .catch((error) => {
    console.error("Email sending error:", error);
    alert("Failed to send message. Try again later.");
  });
};


  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Submit the Form 
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        This form will make you enter my Gmail, and help you to send a scret message to me...
      </p>

      <form className="my-8" ref={form} onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Hetal" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Kumawat" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="hetarsh@hs.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Type your words here</Label>
          <Input id="message" name="message" placeholder="No Abuse Please" type="text" />
        </LabelInputContainer>
        

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit" 
        >
          Send Me &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);

export default Contact
