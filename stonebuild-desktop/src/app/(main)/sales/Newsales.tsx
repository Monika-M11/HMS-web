"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { useState } from "react";

import { FormField } from "@/app/utils/formField";

import { Button } from "@/components/ui/button";

import { theme } from "@/theme";

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

    methods.setValue("unit", "");

    methods.setValue(
      "quantity",
      ""
    );

    methods.setValue("rate", "");

    methods.setValue("tax", "");
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

            {/* HORIZONTAL TABLE INPUT */}
            <div className="overflow-x-auto border rounded-xl">

              <table className="w-full min-w-[1100px]">

                <thead
                  style={{
                    background:
                      theme.primaryLight,
                  }}
                >
                  <tr>
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
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2">
                      <FormField
                        type="input"
                        name="medicine_name"
                        placeholder="Medicine"
                      />
                    </td>

                    <td className="p-2">
                      <FormField
                        type="input"
                        name="unit"
                        placeholder="Unit"
                      />
                    </td>

                    <td className="p-2">
                      <FormField
                        type="input"
                        name="quantity"
                        placeholder="Qty"
                        className="only-number"
                      />
                    </td>

                    <td className="p-2">
                      <FormField
                        type="input"
                        name="rate"
                        placeholder="Rate"
                        className="numbers-decimal"
                      />
                    </td>

                    <td className="p-2">
                      <FormField
                        type="input"
                        name="tax"
                        placeholder="Tax"
                        className="numbers-decimal"
                      />
                    </td>

                    <td className="p-2">
                      <Button
                        type="button"
                        onClick={
                          handleAddRow
                        }
                      >
                        Add Row
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SALES TABLE */}
          <div className="overflow-x-auto border rounded-xl">

            <table className="w-full">

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
                    Medicine
                  </th>

                  <th className="p-3 text-left">
                    Unit
                  </th>

                  <th className="p-3 text-left">
                    Qty
                  </th>

                  <th className="p-3 text-left">
                    Rate
                  </th>

                  <th className="p-3 text-left">
                    Tax
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
                {rows.map((row) => (
                  <tr
                    key={
                      row.serialNo
                    }
                    className="border-t"
                  >
                    <td className="p-3">
                      {row.serialNo}
                    </td>

                    <td className="p-3">
                      {
                        row.medicineName
                      }
                    </td>

                    <td className="p-3">
                      {row.unit}
                    </td>

                    <td className="p-3">
                      {
                        row.quantity
                      }
                    </td>

                    <td className="p-3">
                      ₹{row.rate}
                    </td>

                    <td className="p-3">
                      {row.tax}%
                    </td>

                    <td className="p-3">
                      ₹
                      {row.netRate.toFixed(
                        2
                      )}
                    </td>

                    <td className="p-3">
                      ₹
                      {row.total.toFixed(
                        2
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}