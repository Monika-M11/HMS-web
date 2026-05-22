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
  booking_date: string;
  booking_time: string;
  doctor_name: string;
  illness: string;
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

export default function NewBooking() {

  const methods =
    useForm<FormValues>({
      defaultValues: {
        booking_date: "",
        booking_time: "",
        doctor_name: "",
        illness: "",
      },
    });

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
            Booking Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">

            <Row label="Date">

              <FormField
                type="datepicker"
                name="booking_date"
              />

            </Row>

            <Row label="Time">

              <FormField
                type="input"
                name="booking_time"
                placeholder="Enter Time"
              />

            </Row>

            <Row label="Doctor Name">

              <FormField
                type="typeahead"
                name="doctor_name"
                placeholder="Select Doctor"
                options={doctorOptions}
              />

            </Row>

            <Row label="Illness">

              <FormField
                type="textarea"
                name="illness"
                placeholder="Enter Illness"
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
            Save Booking
          </Button>

        </footer>

      </form>

    </FormProvider>
  );
}