
"use client";

import {
  useForm,
  FormProvider,
} from "react-hook-form";

import { useState } from "react";

import { FormField }
  from "@/app/utils/formField";

import { Button }
  from "@/components/ui/button";

import { theme }
  from "@/theme";

type FormValues = {
  medicine_name: string;
  shortcode: string;
  hsn: string;
  printing_name: string;
  gst_cess: string;
  unit: string;
};

type ConversionRow = {
  quantityFrom: string;
  quantityTo: string;
  unitName: string;
};

const unitOptions = [
  {
    label: "KG",
    value: "KG",
  },
  {
    label: "Gram",
    value: "Gram",
  },
  {
    label: "Milligram",
    value: "Milligram",
  },
  {
    label: "Litre",
    value: "Litre",
  },
  {
    label: "ML",
    value: "ML",
  },
  {
    label: "Piece",
    value: "Piece",
  },
];

export default function NewItem() {
  const [loading, setLoading] =
  useState(false);

  const methods =
    useForm<FormValues>({
      defaultValues: {
        medicine_name: "",
        shortcode: "",
        hsn: "",
        printing_name: "",
        gst_cess: "",
        unit: "",
      },
    });

  const selectedUnit =
    methods.watch("unit");

  const [
    conversionRows,
    setConversionRows,
  ] = useState<ConversionRow[]>([
    {
      quantityFrom: "",
      quantityTo: "",
      unitName: "",
    },
  ]);

  const handleRowChange = (
    index: number,
    field: keyof ConversionRow,
    value: string
  ) => {

    const updatedRows = [
      ...conversionRows,
    ];

    updatedRows[index][field] =
      value;

    setConversionRows(
      updatedRows
    );
  };

  const handleAddRow = () => {

    setConversionRows([
      ...conversionRows,
      {
        quantityFrom: "",
        quantityTo: "",
        unitName: "",
      },
    ]);
  };

  const filteredUnits =
    unitOptions.filter(
      (unit) =>
        unit.value !==
        selectedUnit
    );

  const Row = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center gap-4">

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


  const handleSubmit = async (
  data: FormValues
) => {

  if (loading) return;

  setLoading(true);

  try {

    const payload = {
      ...data,
      conversions: conversionRows,
    };

    console.log(
      "Submitting Item",
      payload
    );

    // ✅ Fake API delay
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
  className="
    flex flex-col
    py-6
  ">

        <div
          className="
    max-w-6xl
    px-4
    pb-10
  "
        >

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
            Item Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">

            <Row label="Medicine Name">
              <FormField
                type="input"
                name="medicine_name"
                placeholder="Enter medicine name"
              />
            </Row>

            <Row label="Short Code">
              <FormField
                type="input"
                name="shortcode"
                placeholder="Enter short code"
              />
            </Row>

            <Row label="HSN">
              <FormField
                type="input"
                name="hsn"
                placeholder="Enter HSN"
              />
            </Row>

            <Row label="Printing Name">
              <FormField
                type="input"
                name="printing_name"
                placeholder="Enter printing name"
              />
            </Row>

            <Row label="GST Cess">
              <FormField
                type="input"
                name="gst_cess"
                placeholder="Enter GST cess"
              />
            </Row>

            {/* UNIT FIELD */}
            <Row label="Unit">

              <FormField
                type="typeahead"
                name="unit"
                placeholder="Select Unit"
                options={unitOptions}
              />

            </Row>
          </div>
        </div>

        {/* CONVERSION TABLE */}
        {selectedUnit && (

          <div className="w-full px-4 pb-10
  ">

            <div className="space-y-4">

              <h3
                className="
          text-lg
          font-medium
        "
                style={{
                  color:
                    theme.primaryDark,
                }}
              >
                Unit Conversion
              </h3>

              <div className="border rounded-xl overflow-hidden w-full"></div>

              <table className="w-full table-fixed">

                <thead
                  style={{
                    background:
                      theme.primaryLight,
                  }}
                >

                  <tr>

                    <th className="px-3 py-2 text-left">
                      Qty From
                    </th>

                    <th className="px-3 py-2 text-left">
                      Qty To
                    </th>

                    <th className="px-3 py-2 text-left">
                      Unit Name
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {conversionRows.map(
                    (
                      row,
                      index
                    ) => (

                      <tr
                        key={index}
                        className="
                            border-t
                            bg-white
                          "
                      >

                        {/* QTY FROM */}
                        <td className="p-2">

                          <input
                            type="number"
                            value={
                              row.quantityFrom
                            }
                            onChange={(e) =>
                              handleRowChange(
                                index,
                                "quantityFrom",
                                e.target.value
                              )
                            }
                            placeholder="Enter Qty"
                            className="
                                w-full
                                border
                                rounded-lg
                                px-3
                                py-2
                                outline-none
                              "
                          />

                        </td>

                        {/* QTY TO */}
                        <td className="p-2">

                          <input
                            type="number"
                            value={
                              row.quantityTo
                            }
                            onChange={(e) =>
                              handleRowChange(
                                index,
                                "quantityTo",
                                e.target.value
                              )
                            }
                            placeholder="Enter Qty"
                            className="
                                w-full
                                border
                                rounded-lg
                                px-3
                                py-2
                                outline-none
                              "
                          />

                        </td>

                        {/* UNIT NAME */}
                        <td className="p-2">

                          <FormField
                            type="typeahead"
                            name={`unit_name_${index}`}
                            placeholder="Select Unit"
                            onChange={(value) =>
                              handleRowChange(
                                index,
                                "unitName",
                                value
                              )
                            }
                            options={filteredUnits}
                          />

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

              {/* ADD ROW BUTTON */}
              <div
                className="
                    flex
                    justify-end
                    p-4
                    border-t
                    bg-white
                  "
              >

                <Button
                  type="button"
                  onClick={
                    handleAddRow
                  }
                >
                  Add Conversion
                </Button>

              </div>

            </div>

          </div>
        )}



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

          <Button
  type="submit"
  disabled={loading}
>

  {loading
    ? "Saving..."
    : "Save Item"}
            
          </Button>

        </footer>

      </form>

    </FormProvider>
  );
}