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

const contactSchema = z.object({
     name: z.string().min(2,"Անունը և ազգանունը շատ կարճ է").max(100,"Անունը և ազգանունը շատ երկար է").trim(),
     email: z.email("Մուտքագրեք վավերական էլ․ հասցե").max(254,"Էլ․ հասցեն շատ երկար է").trim().transform(email => email.toLowerCase()),
     subject: z.string().min(1,"Մուտքագրեք հաղորդագրության թեմայի անունը").max(100,"Թեման շատ երկար է").trim(),
     message: z.string().min(5,"Հաղորդագրությունը պետք է լինի առնվազն 5 տառ").max(550,"Հաղորդագրությունը շատ երկար է").trim()
})

export type ContactType = z.infer<typeof contactSchema>

export default function ContactSection(){
     const [isPending, startTransition] = useTransition();
     const form = useForm<ContactType>({
          resolver: zodResolver(contactSchema),
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
                    const validatedFields = contactSchema.safeParse(values);
                    const response = await sendMessage(validatedFields);
                    if(response.success)
                         toast.success(response.success)
                    if(response.error)
                         toast.error(response.error)
               } catch (err: unknown) {
                    console.error(err);
                    toast.error("Վայ, ինչ-որ բան սխալ գնաց")
               }
          })
     }
     return (
          <SiteSection sectionTitle="Ուղարկել հաղորդագրություն" maxWidth="full" containerClass="bg-card text-card-foreground" id="contact">
               <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[800px] mx-auto space-y-4 w-full mt-5">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                   control={form.control}
                                   name="name"
                                   render={({field})=>(
                                        <FormItem>
                                             <FormLabel>Անուն Ազգանուն</FormLabel>
                                             <FormControl>
                                                  <InputGroup>
                                                       <InputGroupInput
                                                            {...field}
                                                            placeholder="Պողոս Պետրոսյան"
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
                                             <FormLabel>Էլ․ հասցե</FormLabel>
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
                                        <FormLabel>Թեմա</FormLabel>
                                        <FormControl>
                                             <Input
                                                  {...field}
                                                  placeholder="Նշել թեմայի անունը"
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
                                        <FormLabel>Հաղորդագրություն</FormLabel>
                                        <FormControl>
                                             <Textarea
                                                  {...field}
                                                  placeholder="Գրեք հաղորդագրությունն այստեղ"
                                                  disabled={isPending}
                                             />
                                        </FormControl>
                                        <FormMessage/>
                                   </FormItem>
                              )}
                         />
                         <Button variant="primary" disabled={isPending} type="submit">
                              {isPending ? <Spinner/> : <Send/>}
                              {isPending ? "Ուղարկվում է․․․" : "Ուղարկել"}
                         </Button>
                    </form>
               </Form>
          </SiteSection>
     )
}