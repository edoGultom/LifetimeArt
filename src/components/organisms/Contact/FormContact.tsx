import TextInput from "@/components/atom/TextInput";
import React from "react";

export default function FormContact() {
  return (
    <form className="flex w-full bg-white p-5 border border-[var(--BORDER_1)] flex-col gap-5 rounded-[12px]">
      <TextInput id="name" label="Nama" placeholder="John Smith" required />
      <TextInput
        id="email"
        label="Email"
        placeholder="johnsmith@gmail.com"
        required
        type="email"
      />
      <TextInput id="phone" label="Phone Number" placeholder="+44789 123456" />
      <TextInput
        as="textarea"
        id="message"
        label="Message"
        placeholder="Hello, I'd like to enquire about..."
        required
      />
      <button
        className="w-full flex justify-center text-white text-Button-FORM-M bg-background-hero/75 h-[43px] rounded-[6px]  py-[11px]"
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}
