"use server"
import { ContactType } from "@/components/sections/contact";
import { getTranslations } from "next-intl/server";
import { ZodSafeParseResult } from "zod";

export async function sendMessage(validatedFields: ZodSafeParseResult<ContactType>): Promise<{
     success?: string,
     error?: string
}>{
     const t = await getTranslations("contact.messages")
     if(!validatedFields.success) return { error: t("invalid-fields") }
     const res = await fetch("https://formspree.io/f/mzbykjpj", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validatedFields.data),
     });
     return res.ok ? { success: t("success") } : { error: t("error") }
}