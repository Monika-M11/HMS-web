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
  policy_number: string;
  provider: string;
  patient: string;
  coverage_amount: string;
  claim_status: string;
  approval_date: string;
};

type NewInsuranceProps = { editId: string | null };


  const Row = ({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );

export default function NewInsurance({ editId }: NewInsuranceProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      policy_number: "",
      provider: "",
      patient: "",
      coverage_amount: "",
      claim_status: "Pending",
      approval_date: "",
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
      const res = await postAPI("/add-insurance", { data: { ...formData, policy_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Insurance policy updated successfully" : "Insurance policy added successfully");
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
            Insurance Policy Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Policy Number" required>
                <FormField type="input" name="policy_number" placeholder="Enter Policy Number" />
              </Row>

              <Row label="Provider" required>
                <FormField type="input" name="provider" placeholder="e.g. Star Health, ICICI" />
              </Row>

              <Row label="Patient" required>
                <FormField type="input" name="patient" placeholder="Enter Patient Name" />
              </Row>

              <Row label="Coverage Amount" required>
                <FormField type="input" name="coverage_amount" placeholder="Coverage Amount" className="only-number" />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Claim Status" required>
                <FormField
                  type="select"
                  name="claim_status"
                  options={[
                    { value: "Pending", label: "Pending" },
                    { value: "Approved", label: "Approved" },
                    { value: "Rejected", label: "Rejected" },
                    { value: "Settled", label: "Settled" },
                  ]}
                  placeholder="Select Claim Status"
                />
              </Row>

              <Row label="Approval Date">
                <FormField type="date" name="approval_date" />
              </Row>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-68 w-[calc(100%-16rem)] bg-white border-t py-3 px-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} onClick={methods.handleSubmit(handleFormSubmit)}>
            {loading ? "Saving..." : editId ? "Update Policy" : "Save Policy"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this insurance policy?"
      />
    </FormProvider>
  );
}