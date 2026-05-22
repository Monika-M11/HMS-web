"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { useState } from "react";

import { FormField }
from "@/app/utils/formField";

import { Button }
from "@/components/ui/button";

import { theme }
from "@/theme";

type FormValues = {
  diagnosis: string;
  prescription: string;
  remarks: string;
};

const medicineOptions = [
  {
    label: "Paracetamol",
    value: "Paracetamol",
  },
  {
    label: "Dolo 650",
    value: "Dolo 650",
  },
  {
    label: "Azithromycin",
    value: "Azithromycin",
  },
  {
    label: "Cetrizine",
    value: "Cetrizine",
  },
];

export default function NewConsultation() {

  const methods =
    useForm<FormValues>({
      defaultValues: {
        diagnosis: "",
        prescription: "",
        remarks: "",
      },
    });

  const [prescriptions, setPrescriptions] =
    useState<string[]>([]);

  const selectedPrescription =
    methods.watch("prescription");

  const handleAddMedicine = () => {

    if (
      !selectedPrescription ||
      prescriptions.includes(
        selectedPrescription
      )
    ) {
      return;
    }

    setPrescriptions([
      ...prescriptions,
      selectedPrescription,
    ]);

    methods.setValue(
      "prescription",
      ""
    );
  };

  const removeMedicine = (
    medicine: string
  ) => {

    setPrescriptions(
      prescriptions.filter(
        (item) =>
          item !== medicine
      )
    );
  };

  const handleSubmit = (
    data: FormValues
  ) => {

    const payload = {
      ...data,
      prescriptions,
    };

    console.log(
      "Consultation Data",
      payload
    );
  };

  const Row = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="flex items-start gap-4">

      <label
        className="
          w-1/3
          text-sm
          font-medium
        "
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

  const StaticField = ({
    value,
  }: {
    value: string;
  }) => (
    <div
      className="
        border
        rounded-md
        px-3
        py-2
        min-h-[38px]
        bg-gray-100
        text-sm
        flex
        items-center
      "
    >
      {value}
    </div>
  );

  return (

    <FormProvider {...methods}>

      <form
        onSubmit={methods.handleSubmit(
          handleSubmit
        )}
        className="flex flex-col py-6"
        style={{
          background:
            theme.background,
        }}
      >

        <div
          className="
            max-w-5xl
            px-4
            pb-28
            space-y-6
          "
        >

          {/* TITLE */}
          <h2
            className="
              text-xl
              font-semibold
            "
            style={{
              color:
                theme.primaryDark,
            }}
          >
            Consultation Details
          </h2>

          {/* FORM */}
        <div className="grid grid-cols-2 gap-10">

  {/* LEFT COLUMN */}
  <div className="space-y-5">

    <Row label="Consultation ID">
      <StaticField value="CONS-001" />
    </Row>

    <Row label="Illness">
      <StaticField value="Fever" />
    </Row>

    <Row label="Doctor">
      <StaticField value="Dr. Kumar" />
    </Row>

    <Row label="Treatment">
      <StaticField value="Physiotherapy + Medicines" />
    </Row>

  </div>

  {/* RIGHT COLUMN */}
  <div className="space-y-5">

    <Row label="Diagnosis">

      <FormField
        type="textarea"
        name="diagnosis"
        placeholder="Enter diagnosis"
      />

    </Row>

    <Row label="Prescription">

      <div className="space-y-3">

        <div className="flex gap-3">

          <div className="flex-1">

            <FormField
              type="typeahead"
              name="prescription"
              placeholder="Select Medicine"
              options={medicineOptions}
            />

          </div>

          <Button
            type="button"
            onClick={handleAddMedicine}
          >
            Add
          </Button>

        </div>

        {/* MEDICINE TAGS */}
        <div className="flex flex-wrap gap-2">

          {prescriptions.map(
            (medicine) => (

              <div
                key={medicine}
                className="
                  flex
                  items-center
                  gap-2
                  bg-[#E8F0FE]
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
              >

                {medicine}

                <button
                  type="button"
                  onClick={() =>
                    removeMedicine(
                      medicine
                    )
                  }
                  className="text-red-500"
                >
                  ×
                </button>

              </div>
            )
          )}

        </div>

      </div>

    </Row>

    <Row label="Remarks">

      <FormField
        type="textarea"
        name="remarks"
        placeholder="Enter remarks"
      />

    </Row>

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

            Save Consultation

          </Button>

        </footer>

      </form>

    </FormProvider>
  );
}