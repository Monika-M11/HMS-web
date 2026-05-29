"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { useState } from "react";

import { FormField } from "@/app/utils/formField";

import { Button } from "@/components/ui/button";

import { theme } from "@/theme";

import { ValidationRule } from "react-hook-form";
import { validateDynamicRow } from "@/app/utils/validations";

type PurchaseRow = {
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
  supplier_name: string;
  supplier_address: string;

  medicine_name: string;
  unit: string;
  quantity: string;
  rate: string;
  tax: string;
};

const supplierData: Record<
  string,
  string
> = {
  "Apollo Pharma":
    "Chennai",

  "MedPlus":
    "Coimbatore",

  "Care Medicals":
    "Tiruppur",
};

export default function NewPurchase() {


 const [rowErrors, setRowErrors] =
  useState<Record<string, string>>({});

  const methods =
    useForm<FormValues>({
      defaultValues: {
        supplier_name: "",
        supplier_address: "",

        medicine_name: "",
        unit: "",
        quantity: "",
        rate: "",
        tax: "",
      },
    });

  const [rows, setRows] =
    useState<PurchaseRow[]>([]);

  const supplierName =
    methods.watch(
      "supplier_name"
    );

 const handleSupplierChange = (
  value: string
) => {
  console.log("Selected:", value);

  methods.setValue(
    "supplier_address",
    supplierData[value] || ""
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

  const newRow: PurchaseRow = {
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

  const Row = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}
      </label>

      <div className="w-2/3">
        {children}
      </div>
    </div>
  );

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

          {/* SUPPLIER */}
          <div className="space-y-5">

            <h3
              className="text-lg font-medium"
              style={{
                color:
                  theme.primaryDark,
              }}
            >
              Supplier Details
            </h3>

            <Row label="Supplier Name">
  <FormField
    type="typeahead"
    name="supplier_name"
    placeholder="Select Supplier"
    onChange={(value) => {
      methods.setValue(
        "supplier_address",
        supplierData[value] || ""
      );
    }}
    options={[
      {
        label: "Apollo Pharma",
        value: "Apollo Pharma",
      },
      {
        label: "MedPlus",
        value: "MedPlus",
      },
      {
        label: "Care Medicals",
        value: "Care Medicals",
      },
    ]}
  />
</Row>

           {supplierName && (
  <Row label="Supplier Address">
    <FormField
      type="textarea"
      name="supplier_address"
      readonly
      placeholder="Supplier Address"
    />
  </Row>
)}
          </div>

        {/* PURCHASE TABLE */}
<div className="overflow-x-auto border rounded-xl">

  <table className="w-full table-fixed">

    <thead
      style={{
        background: theme.primaryLight,
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
  <td className="p-2 w-[180px]">

    <FormField
      type="input"
      name="medicine_name"
      placeholder="Name"

      className={`
        only-alphabets capitalize
        ${rowErrors.medicine_name ? "border-red-500" : ""}
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
  <td className="p-2 w-[110px]">

    <FormField
      type="input"
      name="unit"
      placeholder="Unit"
      className={`
        ${rowErrors.unit ? "border-red-500" : ""}
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
  <td className="p-2 w-[110px]">

    <FormField
      type="input"
      name="quantity"
      placeholder="Quantity"
      className={`
        only-number
        ${rowErrors.quantity ? "border-red-500" : ""}
      `}
      onChange={(value) => {

        methods.setValue(
          "quantity",
          value
        );

        if (Number(value) > 0) {

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
  <td className="p-2 w-[110px]">

    <FormField
      type="input"
      name="rate"
      placeholder="Rate"
      className={`
        numbers-decimal
        ${rowErrors.rate ? "border-red-500" : ""}
      `}
      onChange={(value) => {

        methods.setValue(
          "rate",
          value
        );

        if (Number(value) > 0) {

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
  <td className="p-2 w-[110px]">

    <FormField
      type="input"
      name="tax"
      placeholder="Tax %"
      className={`
        numbers-decimal
        ${rowErrors.tax ? "border-red-500" : ""}
      `}
      onChange={(value) => {

  const taxValue =
    Number(value);

  // allow only 0 - 100
  if (
    value !== "" &&
    taxValue >= 0 &&
    taxValue <= 100
  ) {

    methods.setValue(
      "tax",
      value
    );

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
    </FormProvider>
  );
}