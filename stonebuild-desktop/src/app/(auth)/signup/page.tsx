"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { postAPI } from "@/app/utils/api";
import { FormField } from "@/app/utils/formField";   // ← Use this path
import { validationRules } from "@/app/utils/validations";

type SignupForm = {
  Hospital_name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
};

export default function SignupPage() {
  const router = useRouter();

  const methods = useForm<SignupForm>({
    defaultValues: {
      Hospital_name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "India",
    },
  });

  const onSubmit: SubmitHandler<SignupForm> = async (data) => {
    try {
      const response = await postAPI("/create-company", { data });

      if (response?.status === "success") {
        toast.success("Hospital registered successfully!");
        router.push("/login");
      } else {
        toast.error(response?.message || "Failed to register hospital");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:grid lg:grid-cols-2">
      {/* LEFT SIDE - Hero */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-[#103BB5]">
        <img
          src="https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?q=80&w=1470&auto=format&fit=crop"
          alt="Healthcare"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-xl px-10 text-white">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Build Your Healthcare Digitally
          </h1>
          <p className="text-base xl:text-lg text-gray-200 leading-8">
            Manage patients, appointments, medical records, healthcare staff,
            and hospital operations through a secure and integrated Healthcare Management System.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - Form */}
      <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#103BB5]">Register Hospital</h2>
            <p className="text-gray-500 mt-2">Transform Healthcare Management Digitally</p>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hospital Name <span className="text-red-500">*</span>
                </label>
                <FormField
                  name="Hospital_name"
                  type="input"
                  placeholder="Enter hospital name"
                  validation={validationRules.required("Hospital Name")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <FormField
                  name="email"
                  type="input"
                  placeholder="Enter email address"
                  validation={validationRules.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <FormField
                  name="phone"
                  type="input"
                  placeholder="Enter phone number"
                  className="only-number limit-10"
                  validation={validationRules.phone}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <FormField
                    name="city"
                    type="input"
                    placeholder="Enter city"
                    className="capitalize"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <FormField
                    name="state"
                    type="input"
                    placeholder="Enter state"
                    className="capitalize"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <FormField
                  name="country"
                  type="input"
                  placeholder="Enter country"
                  className="capitalize"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#103BB5] hover:bg-[#0E34A0] text-white h-11 rounded-lg"
              >
                Register Hospital
              </Button>
            </form>
          </FormProvider>

          <div className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <span
              className="text-[#103BB5] cursor-pointer font-medium hover:underline"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}