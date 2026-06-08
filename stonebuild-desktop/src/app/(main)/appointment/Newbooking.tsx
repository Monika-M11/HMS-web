"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { FormField }
from "@/app/utils/formField";

import { Button }
from "@/components/ui/button";

import { theme }
from "@/theme";

type FormValues = {
  appointment_id?: string;
  patient: string;
  doctor: string;
  department: string;
  date: string;
  time: string;
  remarks: string;
};

const doctorOptions = [
  {
    label: "Dr. John",
    value: "Dr. John",
  },
  {
    label: "Dr. Smith",
    value: "Dr. Smith",
  },
  {
    label: "Dr. Ram",
    value: "Dr. Ram",
  },
];

const departmentOptions = [
  {
    label: "Cardiology",
    value: "Cardiology",
  },
  {
    label: "General Medicine",
    value: "General Medicine",
  },
  {
    label: "Pediatrics",
    value: "Pediatrics",
  },
  {
    label: "Orthopedics",
    value: "Orthopedics",
  },
];


  const Row = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center gap-4">

      <label
        className="w-1/3 text-sm font-medium"
        style={{
          color:
            theme.textPrimary,
        }}
      >
        {label}
      </label>

      <div className="w-2/3">
        {children}
      </div>

    </div>
  );

export default function NewBooking() {

  const methods =
    useForm<FormValues>({
      defaultValues: {
        appointment_id: "",
        patient: "",
        doctor: "",
        department: "",
        date: "",
        time: "",
        remarks: "",
      },
    });



  return (
    <FormProvider {...methods}>

      <form
        className="flex flex-col py-6"
        style={{
          background:
            theme.background,
        }}
      >

        <div className="px-4 pb-10">

          <h2
            className="text-xl font-semibold mb-6"
            style={{
              color:
                theme.primaryDark,
            }}
          >
            Appointment Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">

            <Row label="Appointment ID">
              <FormField
                type="input"
                name="appointment_id"
                placeholder="Auto-generated"
                disabled
              />
            </Row>

            <Row label="Patient">
              <FormField
                type="input"
                name="patient"
                placeholder="Enter Patient Name"
              />
            </Row>

            <Row label="Doctor">
              <FormField
                type="typeahead"
                name="doctor"
                placeholder="Select Doctor"
                options={doctorOptions}
              />
            </Row>

            <Row label="Department">
              <FormField
                type="typeahead"
                name="department"
                placeholder="Select Department"
                options={departmentOptions}
              />
            </Row>

            <Row label="Date">
              <FormField
                type="datepicker"
                name="date"
              />
            </Row>

            <Row label="Time">
              <FormField
                type="input"
                name="time"
                placeholder="Enter Time"
              />
            </Row>

            <Row label="Remarks">
              <FormField
                type="textarea"
                name="remarks"
                placeholder="Enter Remarks"
              />
            </Row>

          </div>

        </div>

        {/* Footer */}
        <footer
          className="
            fixed
            bottom-0
            left-68
            w-[calc(100%-16rem)]
            border-t
            py-3
            px-6
            flex
            justify-end
            gap-4
            bg-white
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

          <Button type="submit">
            Save Appointment
          </Button>

        </footer>

      </form>

    </FormProvider>
  );
}