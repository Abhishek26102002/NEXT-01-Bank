"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldPath, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
const formSchema = authFormSchema("sign-up");
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  label: string | undefined;
}

const CustomInput = ({ control, name, placeholder, label }: CustomInput) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            {label && <FormLabel>{label}</FormLabel>}
            <div className="w-full flex flex-col">
              <FormMessage className="form-message mb-2 ms-2" />
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  type={name === "password" ? "password" : "text"}
                  {...field}
                />
              </FormControl>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
