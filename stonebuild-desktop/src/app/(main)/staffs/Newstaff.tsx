"use client";

import {
  useForm,
  FormProvider,
} from "react-hook-form";

import { FormField }
from "@/app/utils/formField";

import { Button }
from "@/components/ui/button";

import { theme }
from "@/theme";

import { useState } from "react";

import { validationRules }
from "@/app/utils/validations";

import useUnsavedChanges
from "@/hooks/useUnsavedChanges";

type FormValues = {
  full_name: string;
  role: string;
  phone: string;
  alternate_phone: string;
  email: string;
  address: string;
  pincode: string;
  state: string;
  aadhaar: string;
  pan: string;
  experience: string;
  salary: string;
  joining_date: string;
  department: string;
};

const roleOptions = [
  {
    label: "Doctor",
    value: "Doctor",
  },
  {
    label: "Nurse",
    value: "Nurse",
  },
  {
    label: "Therapist",
    value: "Therapist",
  },
  {
    label: "Receptionist",
    value: "Receptionist",
  },
  {
    label: "Administrator",
    value: "Administrator",
  },
];

const departmentOptions = [
  {
    label: "General",
    value: "General",
  },
  {
    label: "Emergency",
    value: "Emergency",
  },
  {
    label: "Pharmacy",
    value: "Pharmacy",
  },
  {
    label: "Laboratory",
    value: "Laboratory",
  },
];



export default function NewStaff() {

  const [loading ,setLoading] = useState(false);
  
 


  

  const methods =
    useForm<FormValues>({
      defaultValues: {
        full_name: "",
        role: "",
        phone: "",
        alternate_phone: "",
        email: "",
        address: "",
        pincode: "",
        state: "",
        aadhaar: "",
        pan: "",
        experience: "",
        salary: "",
        joining_date: "",
        department: "",
      },
    });



    const {
  formState: {
    isDirty,
  },
} = methods;

useUnsavedChanges({
  hasUnsavedChanges:
    isDirty && !loading,
});

  const Row = ({
    label,
    required = false,
    children,
  }: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center justify-between gap-4">

      <label className="w-1/3 font-medium text-gray-600 text-[14px]">

        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}

      </label>

      <div className="w-2/3">
        {children}
      </div>

    </div>
  );

const handleSubmit = async (
  data: FormValues
) => {

  // ✅ Prevent duplicate submit
  if (loading) return;

  setLoading(true);

  try {

    console.log(
      "Staff Data",
      data
    );

    // fake delay
    await new Promise(
      (resolve) =>
        setTimeout(resolve, 2000)
    );

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }
};
  
  return (
    <FormProvider {...methods}>

      <form
  onSubmit={methods.handleSubmit(
    handleSubmit
  )}
  className="flex flex-col py-6">

        <div className="flex-1 max-h-[calc(100vh-180px)] overflow-y-auto px-3 pb-32">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <h3
                className="text-lg font-medium mb-2"
                style={{
                  color:
                    theme.primaryDark,
                }}
              >
                Staff Details
              </h3>

              <div className="space-y-4">

                <Row
                  label="Full Name"
                  required
                >
                  <FormField
                    type="input"
                    name="full_name"
                    placeholder="Enter Full Name"
                    validation={
                      validationRules.required(
                        "Full Name"
                      )
                    }
                  />
                </Row>

                <Row
                  label="Role"
                  required
                >
                  <FormField
                    type="typeahead"
                    name="role"
                    placeholder="Select Role"
                    options={roleOptions}
                  />
                </Row>

                <Row label="Phone Number">

                  <FormField
                    type="input"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="only-number limit-10"
                    validation={
                      validationRules.phone
                    }
                  />

                </Row>

                <Row label="Alternate Number">

                  <FormField
                    type="input"
                    name="alternate_phone"
                    placeholder="Enter Alternate Number"
                    className="only-number limit-10"
                  />

                </Row>

                <Row label="Email">

                  <FormField
                    type="input"
                    name="email"
                    placeholder="Enter Email"
                  />

                </Row>

                <Row label="Address">

                  <FormField
                    type="textarea"
                    name="address"
                    placeholder="Enter Address"
                  />

                </Row>

                <Row label="Pincode">

                  <FormField
                    type="input"
                    name="pincode"
                    placeholder="Enter Pincode"
                    className="only-number limit-6"
                  />

                </Row>

                <Row label="State">

                  <FormField
                    type="input"
                    name="state"
                    placeholder="Enter State"
                    className="uppercase"
                  />

                </Row>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              <h3
                className="text-lg font-medium mb-2"
                style={{
                  color:
                    theme.primaryDark,
                }}
              >
                Employment Details
              </h3>

              <div className="space-y-4">

                <Row label="Department">

                  <FormField
                    type="typeahead"
                    name="department"
                    placeholder="Select Department"
                    options={departmentOptions}
                  />

                </Row>

                <Row label="Joining Date">

                  <FormField
                    type="datepicker"
                    name="joining_date"
                  />

                </Row>

                <Row label="Experience">

                  <FormField
                    type="input"
                    name="experience"
                    placeholder="Enter Experience"
                  />

                </Row>

                <Row label="Salary">

                  <FormField
                    type="input"
                    name="salary"
                    placeholder="Enter Salary"
                    className="numbers-decimal"
                  />

                </Row>

                <Row label="Aadhaar Number">

                  <FormField
                    type="input"
                    name="aadhaar"
                    placeholder="Enter Aadhaar Number"
                    className="only-number limit-12"
                  />

                </Row>

                <Row label="PAN Number">

                  <FormField
                    type="input"
                    name="pan"
                    placeholder="Enter PAN Number"
                    className="alphanumeric-uppercase limit-10"
                  />

                </Row>

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <footer
          className="
            fixed
            bottom-0
            left-68
            w-[calc(100%-16rem)]
            bg-white
            border-t
            py-2
            px-6
            flex
            justify-end
            space-x-4
          "
          style={{
            borderColor:
              theme.border,
          }}
        >

          <Button
            type="button"
            variant="outline"
          >
            Cancel
          </Button>

         <Button
  type="submit"
  disabled={loading}
>

  {loading
    ? "Saving..."
    : "Save Staff"}

</Button>

        </footer>

      </form>

    </FormProvider>
  );
}