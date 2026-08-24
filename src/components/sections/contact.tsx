"use client"
import * as z from "zod";
import SiteSection from "../site-section";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendMessage } from "@/actions/contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Textarea } from "../ui/textarea";
import { MailIcon, Send, UserIcon } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { Input } from "../ui/input";
import { TFunction } from "@/i18n/types";
import { useTranslations } from "next-intl";

const getContactSchema = (t: TFunction<"contact">) => z.object({
     name: z.string().min(2,t("validation.name.too-short")).max(100,t("validation.name.too-long")).trim(),
     email: z.email(t("validation.email.invalid")).max(254,t("validation.email.too-long")).trim().transform(email => email.toLowerCase()),
     subject: z.string().min(1,t("validation.subject.required")).max(100,t("validation.subject.too-long")).trim(),
     message: z.string().min(5,t("validation.message.too-short")).max(550,t("validation.message.too-long")).trim()
})

export type ContactType = z.infer<
     Awaited<ReturnType<typeof getContactSchema>>
>

export default function ContactSection(){
     const [isPending, startTransition] = useTransition();
     const t = useTranslations("contact")
     const form = useForm<ContactType>({
          resolver: zodResolver(getContactSchema(t)),
          defaultValues: {
               name: "",
               email: "",
               subject: "",
               message: ""
          }
     })
     const onSubmit = async(values: ContactType) => {
          startTransition(async()=>{
               try{
                    const validatedFields = getContactSchema(t).safeParse(values);
                    const response = await sendMessage(validatedFields);
                    if(response.success)
                         toast.success(response.success)
                    if(response.error)
                         toast.error(response.error)
               } catch (err: unknown) {
                    console.error(err);
                    toast.error(t("messages.misc-error"))
               }
          })
     }
     return (
          <SiteSection sectionTitle={t("title")} maxWidth="full" containerClass="bg-card text-card-foreground" id="contact">
               <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-200 mx-auto space-y-4 w-full mt-5">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                   control={form.control}
                                   name="name"
                                   render={({field})=>(
                                        <FormItem>
                                             <FormLabel>{t("fields.full-name.label")}</FormLabel>
                                             <FormControl>
                                                  <InputGroup>
                                                       <InputGroupInput
                                                            {...field}
                                                            placeholder={t("fields.full-name.placeholder")}
                                                            disabled={isPending}
                                                       />
                                                       <InputGroupAddon>
                                                            <UserIcon/>
                                                       </InputGroupAddon>
                                                  </InputGroup>
                                             </FormControl>
                                             <FormMessage/>
                                        </FormItem>
                                   )}
                              />
                              <FormField
                                   control={form.control}
                                   name="email"
                                   render={({field})=>(
                                        <FormItem>
                                             <FormLabel>{t("fields.email")}</FormLabel>
                                             <FormControl>
                                                  <InputGroup>
                                                       <InputGroupInput
                                                            {...field}
                                                            placeholder="name@example.com"
                                                            disabled={isPending}
                                                       />
                                                       <InputGroupAddon>
                                                            <MailIcon/>
                                                       </InputGroupAddon>
                                                  </InputGroup>
                                             </FormControl>
                                             <FormMessage/>
                                        </FormItem>
                                   )}
                              />
                         </div>
                         <FormField
                              control={form.control}
                              name="subject"
                              render={({field})=>(
                                   <FormItem>
                                        <FormLabel>{t("fields.subject.label")}</FormLabel>
                                        <FormControl>
                                             <Input
                                                  {...field}
                                                  placeholder={t("fields.subject.placeholder")}
                                                  disabled={isPending}
                                             />
                                        </FormControl>
                                        <FormMessage/>
                                   </FormItem>
                              )}
                         />
                         <FormField
                              control={form.control}
                              name="message"
                              render={({field})=>(
                                   <FormItem>
                                        <FormLabel>{t("fields.message.label")}</FormLabel>
                                        <FormControl>
                                             <Textarea
                                                  {...field}
                                                  placeholder={t("fields.message.placeholder")}
                                                  disabled={isPending}
                                             />
                                        </FormControl>
                                        <FormMessage/>
                                   </FormItem>
                              )}
                         />
                         <Button variant="primary" disabled={isPending} type="submit">
                              {isPending ? <Spinner/> : <Send/>}
                              {isPending ? t("send.loading") : t("send.original")}
                         </Button>
                    </form>
               </Form>
          </SiteSection>
     )
}