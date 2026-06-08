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
  test_id: string;
  patient: string;
  test_name: string;
  sample_type: string;
  result: string;
  technician: string;
  report_date: string;
};

type NewLabTestProps = { editId: string | null };

  const Row = ({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );

export default function NewLabTest({ editId }: NewLabTestProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      test_id: "",
      patient: "",
      test_name: "",
      sample_type: "",
      result: "",
      technician: "",
      report_date: "",
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
      const res = await postAPI("/add-lab-test", { data: { ...formData, test_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Lab test updated successfully" : "Lab test added successfully");
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
            Laboratory Test Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Test ID" required>
                <FormField type="input" name="test_id" placeholder="Enter Test ID" />
              </Row>

              <Row label="Patient" required>
                <FormField type="input" name="patient" placeholder="Enter Patient Name" />
              </Row>

              <Row label="Test Name" required>
                <FormField type="input" name="test_name" placeholder="Enter Test Name" />
              </Row>

              <Row label="Sample Type" required>
                <FormField type="input" name="sample_type" placeholder="Blood, Urine, etc." />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Result">
                <FormField type="textarea" name="result" placeholder="Enter Test Result" />
              </Row>

              <Row label="Technician" required>
                <FormField type="input" name="technician" placeholder="Enter Technician Name" />
              </Row>

              <Row label="Report Date" required>
                <FormField type="date" name="report_date" />
              </Row>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-68 w-[calc(100%-16rem)] bg-white border-t py-3 px-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} onClick={methods.handleSubmit(handleFormSubmit)}>
            {loading ? "Saving..." : editId ? "Update Test" : "Save Test"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this lab test?"
      />
    </FormProvider>
  );
}