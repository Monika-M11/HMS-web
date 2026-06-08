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
  invoice_no: string;
  patient: string;
  service: string;
  amount: string;
  tax: string;
  discount: string;
  payment_mode: string;
  payment_status: string;
};

type NewBillingProps = { editId: string | null };

export default function NewBilling({ editId }: NewBillingProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      invoice_no: "",
      patient: "",
      service: "",
      amount: "",
      tax: "",
      discount: "",
      payment_mode: "",
      payment_status: "Pending",
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
      const res = await postAPI("/add-billing", { data: { ...formData, invoice_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Invoice updated successfully" : "Invoice created successfully");
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
            Billing / Invoice Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Invoice No" required>
                <FormField type="input" name="invoice_no" placeholder="Enter Invoice Number" />
              </Row>

              <Row label="Patient" required>
                <FormField type="input" name="patient" placeholder="Enter Patient Name" />
              </Row>

              <Row label="Service" required>
                <FormField type="input" name="service" placeholder="e.g. Consultation, Lab Test" />
              </Row>

              <Row label="Amount" required>
                <FormField type="input" name="amount" placeholder="Total Amount" className="only-number" />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Tax">
                <FormField type="input" name="tax" placeholder="Tax Amount" className="only-number" />
              </Row>

              <Row label="Discount">
                <FormField type="input" name="discount" placeholder="Discount Amount" className="only-number" />
              </Row>

              <Row label="Payment Mode" required>
                <FormField
                  type="select"
                  name="payment_mode"
                  options={[
                    { value: "Cash", label: "Cash" },
                    { value: "Card", label: "Card" },
                    { value: "UPI", label: "UPI" },
                    { value: "Insurance", label: "Insurance" },
                  ]}
                  placeholder="Select Payment Mode"
                />
              </Row>

              <Row label="Payment Status" required>
                <FormField
                  type="select"
                  name="payment_status"
                  options={[
                    { value: "Paid", label: "Paid" },
                    { value: "Pending", label: "Pending" },
                    { value: "Partially Paid", label: "Partially Paid" },
                  ]}
                  placeholder="Select Status"
                />
              </Row>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-68 w-[calc(100%-16rem)] bg-white border-t py-3 px-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} onClick={methods.handleSubmit(handleFormSubmit)}>
            {loading ? "Saving..." : editId ? "Update Invoice" : "Create Invoice"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this invoice?"
      />
    </FormProvider>
  );
}