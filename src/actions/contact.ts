"use server"
import { ContactType } from "@/components/sections/contact";
import { ZodSafeParseResult } from "zod";

export async function sendMessage(validatedFields: ZodSafeParseResult<ContactType>): Promise<{
     success?: string,
     error?: string
}>{
     if(!validatedFields.success)
          return { error: "invalidFields" }
     const res = await fetch("https://formspree.io/f/mzbykjpj", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validatedFields.data),
     });
     return res.ok
          ? { success: "Հաղորդագրությունը հաջողությամբ ուղարկվեց!" }
          : { error: "Չհաջողվեց ուղարկել հաղորդագրությունը" }
}