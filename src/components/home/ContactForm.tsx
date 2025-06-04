"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Create the schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ім'я повинно містити не менше 2 символів",
  }),
  email: z.string().email({
    message: "Будь ласка, введіть дійсну адресу електронної пошти",
  }),
  phone: z.string().min(6, {
    message: "Будь ласка, введіть дійсний номер телефону",
  }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "Ви повинні погодитися з умовами",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState("+380"); // Default to Ukraine
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append("access_key", "07cb48a7-0681-4c2b-9991-ba7c48454857");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", `${countryCode}${data.phone}`);
    formData.append("agreeToTerms", data.agreeToTerms.toString());
    formData.append("subject", "Нова заявка на консультацію STOP FRAUD UA");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        router.push('/thank-you');
        form.reset();
      } else {
        setSubmitError(result.message || "Помилка відправки форми. Спробуйте ще раз.");
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setSubmitError("Виникла помилка. Будь ласка, спробуйте пізніше.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            STOP FRAUD
          </h2>
          <p className="text-center text-gray-300 mb-10">
            Верніть втрачені кошти законним способом — швидко і без передоплат.
            Пройдіть коротку форму і отримайте безкоштовну консультацію
          </p>

          <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Заповніть форму на безкоштовну консультацію, і ми допоможемо вам повернути ваші кошти
            </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Ім'я"
                            className="input-form"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type="email"
                            className="input-form"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex">
                            <div className="bg-white/10 border-white/20 text-white rounded-l-md px-3 py-3 flex items-center border border-r-0">
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="bg-transparent text-white outline-none"
                              >
                                <option value="+380">+380</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+49">+49</option>
                                <option value="+33">+33</option>
                                <option value="+48">+48</option>
                              </select>
                            </div>
                            <Input
                              placeholder="Номер телефону"
                              type="tel"
                              className="input-form rounded-l-none"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            className="h-4 w-4 mt-1"
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <p className="text-sm text-gray-400">
                            Я згоден з{" "}
                            <Link
                              href="/policy"
                              className="text-primary hover:underline"
                            >
                              політикою конфіденційності
                            </Link>
                          </p>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {submitError && (
                    <p className="text-red-500 text-sm text-center">{submitError}</p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Відправка..." : "Безкоштовна консультація"}
                  </Button>
                </form>
              </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
