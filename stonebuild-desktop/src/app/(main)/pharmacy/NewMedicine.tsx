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
  medicine_code: string;
  medicine_name: string;
  category: string;
  batch_no: string;
  expiry_date: string;
  stock: string;
  purchase_price: string;
  selling_price: string;
};

type NewMedicineProps = { editId: string | null };

const Row = ({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );

export default function NewMedicine({ editId }: NewMedicineProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      medicine_code: "",
      medicine_name: "",
      category: "",
      batch_no: "",
      expiry_date: "",
      stock: "",
      purchase_price: "",
      selling_price: "",
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
      const res = await postAPI("/add-medicine", { data: { ...formData, medicine_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Medicine updated successfully" : "Medicine added successfully");
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

  

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col py-6" style={{ background: theme.background }}>
        <div className="px-4 pb-10">
          <h2 className="text-xl font-semibold mb-6" style={{ color: theme.primaryDark }}>
            Medicine Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Medicine Code" required>
                <FormField type="input" name="medicine_code" placeholder="Enter Medicine Code" />
              </Row>
              <Row label="Medicine Name" required>
                <FormField type="input" name="medicine_name" placeholder="Enter Medicine Name" />
              </Row>
              <Row label="Category" required>
                <FormField type="input" name="category" placeholder="e.g. Tablet, Syrup, Injection" />
              </Row>
              <Row label="Batch No" required>
                <FormField type="input" name="batch_no" placeholder="Enter Batch Number" />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Expiry Date" required>
                <FormField type="date" name="expiry_date" />
              </Row>
              <Row label="Stock" required>
                <FormField type="input" name="stock" placeholder="Current Stock" className="only-number" />
              </Row>
              <Row label="Purchase Price" required>
                <FormField type="input" name="purchase_price" placeholder="Purchase Price" className="only-number" />
              </Row>
              <Row label="Selling Price" required>
                <FormField type="input" name="selling_price" placeholder="Selling Price" className="only-number" />
              </Row>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-68 w-[calc(100%-16rem)] bg-white border-t py-3 px-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} onClick={methods.handleSubmit(handleFormSubmit)}>
            {loading ? "Saving..." : editId ? "Update Medicine" : "Save Medicine"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this medicine?"
      />
    </FormProvider>
  );
}