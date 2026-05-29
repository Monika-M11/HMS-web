"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { useState } from "react";

import { FormField } from "@/app/utils/formField";

import { Button } from "@/components/ui/button";

import { theme } from "@/theme";

import { validateDynamicRow }
from "@/app/utils/validations";

type SalesRow = {
  serialNo: number;
  medicineName: string;
  unit: string;
  quantity: number;
  rate: number;
  tax: number;
  netRate: number;
  total: number;
};

type FormValues = {
  customer_name: string;
  customer_address: string;

  medicine_name: string;
  unit: string;
  quantity: string;
  rate: string;
  tax: string;
};

const customerData: Record<
  string,
  string
> = {
  Monika:
    "Coimbatore",

  Arun:
    "Chennai",

  Priya:
    "Tiruppur",
};

export default function NewSales() {

const [rowErrors, setRowErrors] =
  useState<Record<string, string>>({});

  const methods =
    useForm<FormValues>({
      defaultValues: {
        customer_name: "",
        customer_address: "",

        medicine_name: "",
        unit: "",
        quantity: "",
        rate: "",
        tax: "",
      },
    });

  const [rows, setRows] =
    useState<SalesRow[]>([]);

  const customerName =
    methods.watch(
      "customer_name"
    );

  const handleCustomerChange = (
    value: string
  ) => {
    methods.setValue(
      "customer_address",
      customerData[value] || ""
    );
  };

 const handleAddRow = () => {

  const values =
    methods.getValues();

  const errors =
    validateDynamicRow(values);

  if (
    Object.keys(errors).length > 0
  ) {

    setRowErrors(errors);

    return;
  }

  setRowErrors({});

  const quantity =
    Number(values.quantity);

  const rate =
    Number(values.rate);

  const tax =
    Number(values.tax || 0);

  const netRate =
    rate + (rate * tax) / 100;

  const total =
    quantity * netRate;

  const newRow: SalesRow = {
    serialNo:
      rows.length + 1,

    medicineName:
      values.medicine_name,

    unit: values.unit,

    quantity,

    rate,

    tax,

    netRate,

    total,
  };

  setRows([
    ...rows,
    newRow,
  ]);

  methods.setValue(
    "medicine_name",
    ""
  );

  methods.setValue(
    "unit",
    ""
  );

  methods.setValue(
    "quantity",
    ""
  );

  methods.setValue(
    "rate",
    ""
  );

  methods.setValue(
    "tax",
    ""
  );
};

  return (
    <FormProvider {...methods}>
      <div
        className="flex flex-col py-6"
        style={{
          background:
            theme.background,
        }}
      >
        <div className="px-3 space-y-8">

          {/* CUSTOMER */}
          <div className="space-y-5">

            <h3
              className="text-lg font-medium"
              style={{
                color:
                  theme.primaryDark,
              }}
            >
              Customer Details
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <FormField
                type="typeahead"
                name="customer_name"
                placeholder="Select Customer"
                onChange={
                  handleCustomerChange
                }
                options={[
                  {
                    label: "Monika",
                    value: "Monika",
                  },
                  {
                    label: "Arun",
                    value: "Arun",
                  },
                ]}
              />

              {customerName && (
                <FormField
                  type="textarea"
                  name="customer_address"
                  readonly
                />
              )}
            </div>
          </div>

          {/* SALES DETAILS */}
          {/* SALES DETAILS */}
<div className="space-y-5">

  <h3
    className="text-lg font-medium"
    style={{
      color:
        theme.primaryDark,
    }}
  >
    Sales Details
  </h3>

  <div className="overflow-x-auto border rounded-xl">

    <table className="w-full table-fixed">

      <thead
        style={{
          background:
            theme.primaryLight,
        }}
      >
        <tr>

          <th className="p-3 text-left">
            S.No
          </th>

          <th className="p-3 text-left">
            Medicine Name
          </th>

          <th className="p-3 text-left">
            Unit
          </th>

          <th className="p-3 text-left">
            Quantity
          </th>

          <th className="p-3 text-left">
            Rate
          </th>

          <th className="p-3 text-left">
            Tax %
          </th>

          <th className="p-3 text-left">
            Net Rate
          </th>

          <th className="p-3 text-left">
            Total
          </th>

        </tr>
      </thead>

      <tbody>

        {/* SAVED ROWS */}
        {rows.map((row) => (

          <tr
            key={row.serialNo}
            className="border-t bg-white"
          >

            <td className="p-3">
              {row.serialNo}
            </td>

            <td className="p-3">
              {row.medicineName}
            </td>

            <td className="p-3">
              {row.unit}
            </td>

            <td className="p-3">
              {row.quantity}
            </td>

            <td className="p-3">
              ₹{row.rate}
            </td>

            <td className="p-3">
              {row.tax}%
            </td>

            <td className="p-3">
              ₹{row.netRate.toFixed(2)}
            </td>

            <td className="p-3">
              ₹{row.total.toFixed(2)}
            </td>

          </tr>
        ))}

        {/* INPUT ROW */}
        <tr className="border-t bg-white">

          <td className="p-2 font-medium">
            {rows.length + 1}
          </td>

          {/* MEDICINE */}
          <td className="p-2">

            <FormField
              type="input"
              name="medicine_name"
              placeholder="Medicine"
              className={`
                ${rowErrors.medicine_name
                  ? "border-red-500"
                  : ""}
              `}
              onChange={(value) => {

                methods.setValue(
                  "medicine_name",
                  value
                );

                if (value.trim()) {

                  setRowErrors((prev) => {

                    const updated = {
                      ...prev,
                    };

                    delete updated.medicine_name;

                    return updated;
                  });
                }
              }}
            />

          </td>

          {/* UNIT */}
          <td className="p-2">

            <FormField
              type="input"
              name="unit"
              placeholder="Unit"
              className={`
                ${rowErrors.unit
                  ? "border-red-500"
                  : ""}
              `}
              onChange={(value) => {

                methods.setValue(
                  "unit",
                  value
                );

                if (value.trim()) {

                  setRowErrors((prev) => {

                    const updated = {
                      ...prev,
                    };

                    delete updated.unit;

                    return updated;
                  });
                }
              }}
            />

          </td>

          {/* QUANTITY */}
          <td className="p-2">

            <FormField
              type="input"
              name="quantity"
              placeholder="Qty"
              className={`
                only-number
                ${rowErrors.quantity
                  ? "border-red-500"
                  : ""}
              `}
              onChange={(value) => {

                methods.setValue(
                  "quantity",
                  value
                );

                if (
                  Number(value) > 0
                ) {

                  setRowErrors((prev) => {

                    const updated = {
                      ...prev,
                    };

                    delete updated.quantity;

                    return updated;
                  });
                }
              }}
            />

          </td>

          {/* RATE */}
          <td className="p-2">

            <FormField
              type="input"
              name="rate"
              placeholder="Rate"
              className={`
                numbers-decimal
                ${rowErrors.rate
                  ? "border-red-500"
                  : ""}
              `}
              onChange={(value) => {

                methods.setValue(
                  "rate",
                  value
                );

                if (
                  Number(value) > 0
                ) {

                  setRowErrors((prev) => {

                    const updated = {
                      ...prev,
                    };

                    delete updated.rate;

                    return updated;
                  });
                }
              }}
            />

          </td>

          {/* TAX */}
          <td className="p-2">

            <FormField
              type="input"
              name="tax"
              placeholder="Tax"
              className={`
                numbers-decimal
                ${rowErrors.tax
                  ? "border-red-500"
                  : ""}
              `}
              onChange={(value) => {

                methods.setValue(
                  "tax",
                  value
                );

                if (
                  value === "" ||
                  Number(value) >= 0
                ) {

                  setRowErrors((prev) => {

                    const updated = {
                      ...prev,
                    };

                    delete updated.tax;

                    return updated;
                  });
                }
              }}
            />

          </td>

          <td className="p-2">
            -
          </td>

          <td className="p-2">
            -
          </td>

        </tr>

      </tbody>

    </table>

    <div className="flex justify-end bg-white border-t px-4 py-3">

      <div className="w-[180px]">

        <Button
          type="button"
          onClick={handleAddRow}
          className="w-full"
        >
          Add Row
        </Button>

      </div>

    </div>

  </div>

</div>
         
          
        </div>
      </div>
    </FormProvider>
  );
}