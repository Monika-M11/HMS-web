 "use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { postAPI } from "@/app/utils/api";
import { FormField } from "@/components/ui/formField";

interface SignupForm {
  company_name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
}

export default function SignupPage() {

  const router = useRouter();

  const methods = useForm<SignupForm>({
    defaultValues: {
      company_name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "India",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: SignupForm) => {

    try {

      const response = await postAPI(
        "/create-company",
        {
          data,
        }
      );

      if (response?.status === "success") {

        toast.success("Company created successfully");

        router.push("/login");

      } else {

        toast.error(
          response?.message ||
          "Failed to create company"
        );
      }

    } catch (error: any) {

      toast.error(
        error?.message ||
        "Something went wrong"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col lg:grid lg:grid-cols-2">

      {/* LEFT SIDE */}

      <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-[#103BB5]">

        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
          alt="Construction"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-xl px-10 text-white">

          <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Build Your Construction Business Digitally
          </h1>

          <p className="text-base xl:text-lg text-gray-200 leading-8">
            Manage projects, warehouses, materials,
            transactions and teams using
            Stonebuild ERP platform.
          </p>

        </div>
      </div>

      {/* MOBILE TOP SECTION */}

      <div className="lg:hidden bg-[#103BB5] px-6 py-10 text-white relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
          alt="Construction"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="relative z-10">

          <h1 className="text-3xl font-bold leading-snug">
            Stonebuild ERP
          </h1>

          <p className="text-sm text-gray-200 mt-3 leading-6">
            Digitally manage your construction business,
            projects, materials and teams from anywhere.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          <div className="text-center mb-8">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#103BB5]">
              Create Company
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Start your Stonebuild workspace
            </p>

          </div>

          <FormProvider {...methods}>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Company Name */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>

                <FormField
                  name="company_name"
                  type="input"
                  placeholder="Enter company name"
                  validation={{
                    required: "Company name is required",
                  }}
                />

              </div>

              {/* Email */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>

                <FormField
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  validation={{
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                />

              </div>

              {/* Phone */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>

                <FormField
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="only-numbers limit-10"
                  validation={{
                    required: "Phone number is required",
                    minLength: {
                      value: 10,
                      message: "Enter valid phone number",
                    },
                  }}
                />

              </div>

              {/* City & State */}

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

              {/* Country */}

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

              {/* Submit Button */}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#103BB5] hover:bg-[#0E34A0] text-white h-11 rounded-lg"
              >

                {
                  isSubmitting
                    ? "Creating Company..."
                    : "Create Company"
                }

              </Button>

            </form>

          </FormProvider>

          {/* Footer */}

          <div className="text-center mt-6 text-sm text-gray-500">

            Already have an account?

            <span
              className="text-[#103BB5] cursor-pointer ml-1 font-medium hover:underline"
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