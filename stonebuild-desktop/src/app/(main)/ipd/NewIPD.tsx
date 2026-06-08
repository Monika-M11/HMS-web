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
  admission_no: string;
  patient: string;
  ward: string;
  room: string;
  bed: string;
  doctor: string;
  admission_date: string;
  discharge_date: string;
  status: string;
};

type NewIPDProps = { editId: string | null };

export default function NewIPD({ editId }: NewIPDProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      admission_no: "",
      patient: "",
      ward: "",
      room: "",
      bed: "",
      doctor: "",
      admission_date: "",
      discharge_date: "",
      status: "Admitted",
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
      const res = await postAPI("/add-ipd", { data: { ...formData, admission_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Admission updated successfully" : "Admission added successfully");
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
            IPD Admission Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Admission No" required>
                <FormField type="input" name="admission_no" placeholder="Enter Admission Number" />
              </Row>

              <Row label="Patient" required>
                <FormField type="input" name="patient" placeholder="Enter Patient Name" />
              </Row>

              <Row label="Ward" required>
                <FormField type="input" name="ward" placeholder="Enter Ward Name" />
              </Row>

              <Row label="Room" required>
                <FormField type="input" name="room" placeholder="Enter Room Number" />
              </Row>

              <Row label="Bed" required>
                <FormField type="input" name="bed" placeholder="Enter Bed Number" />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Doctor" required>
                <FormField type="typeahead" name="doctor" placeholder="Select Doctor" options={[]} />
              </Row>

              <Row label="Admission Date" required>
                <FormField type="date" name="admission_date" />
              </Row>

              <Row label="Discharge Date">
                <FormField type="date" name="discharge_date" />
              </Row>

              <Row label="Status" required>
                <FormField
                  type="select"
                  name="status"
                  options={[
                    { value: "Admitted", label: "Admitted" },
                    { value: "Discharged", label: "Discharged" },
                    { value: "Under Treatment", label: "Under Treatment" },
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
            {loading ? "Saving..." : editId ? "Update Admission" : "Save Admission"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this admission?"
      />
    </FormProvider>
  );
}