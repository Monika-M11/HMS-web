"use client";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormField } from "@/app/utils/formField";
import { Button } from "@/components/ui/button";
import { postAPI } from "@/app/utils/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "@/app/utils/confirmationModal";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { theme } from "@/theme";
import { validationRules } from "@/app/utils/validations";

type FormValues = {
  item_code: string;
  item_name: string;
  category: string;
  supplier: string;
  quantity: string;
  unit_cost: string;
  reorder_level: string;
};

type NewInventoryProps = { editId: string | null };

// Sample options for Typeahead
const categoryOptions = [
  { label: "Surgical", value: "Surgical" },
  { label: "Pharmaceutical", value: "Pharmaceutical" },
  { label: "Stationery", value: "Stationery" },
  { label: "Equipment", value: "Equipment" },
  { label: "Diagnostic", value: "Diagnostic" },
  { label: "Disposable", value: "Disposable" },
  { label: "Furniture", value: "Furniture" },
];

const supplierOptions = [
  { label: "MediSupplies Pvt Ltd", value: "MediSupplies Pvt Ltd" },
  { label: "PharmaCorp India", value: "PharmaCorp India" },
  { label: "Office World", value: "Office World" },
  { label: "LabTech Solutions", value: "LabTech Solutions" },
  { label: "Surgical Instruments Co.", value: "Surgical Instruments Co." },
  { label: "Global Health Supplies", value: "Global Health Supplies" },
];

export default function NewInventory({ editId }: NewInventoryProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      item_code: "",
      item_name: "",
      category: "",
      supplier: "",
      quantity: "",
      unit_cost: "",
      reorder_level: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    setFormData(data);
    setShowConfirm(true);
  };

  const confirmSubmit = async () => {
    if (loading || !formData) return;
    setLoading(true);
    try {
      const res = await postAPI("/add-inventory", { data: { ...formData, item_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Inventory item updated successfully" : "Inventory item added successfully");
        methods.reset();
        router.push(pathname);
      } else {
        toast.error(res.message || "Failed");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  const handleCancel = () => {
    methods.reset();
    setShowConfirm(false);
    router.push(pathname);
  };

  const Row = ({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col py-6" style={{ background: theme.background }}>
        <div className="px-4 pb-10">
          <h2 className="text-xl font-semibold mb-6" style={{ color: theme.primaryDark }}>
            Inventory Item Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Item Code" required>
                <FormField type="input" name="item_code" placeholder="Enter Item Code" />
              </Row>

              <Row label="Item Name" required>
                <FormField type="input" name="item_name" placeholder="Enter Item Name" />
              </Row>

              <Row label="Category" required>
                <FormField
                  type="typeahead"
                  name="category"
                  placeholder="Select or Type Category"
                  options={categoryOptions}
                />
              </Row>

              <Row label="Supplier" required>
                <FormField
                  type="typeahead"
                  name="supplier"
                  placeholder="Select or Type Supplier"
                  options={supplierOptions}
                />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Quantity" required>
                <FormField type="input" name="quantity" placeholder="Current Quantity" className="only-number" />
              </Row>

              <Row label="Unit Cost" required>
                <FormField type="input" name="unit_cost" placeholder="Cost per Unit" className="only-number" />
              </Row>

              <Row label="Reorder Level" required>
                <FormField type="input" name="reorder_level" placeholder="Reorder Level" className="only-number" />
              </Row>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-68 w-[calc(100%-16rem)] bg-white border-t py-3 px-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} onClick={methods.handleSubmit(handleFormSubmit)}>
            {loading ? "Saving..." : editId ? "Update Item" : "Save Item"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this inventory item?"
      />
    </FormProvider>
  );
}