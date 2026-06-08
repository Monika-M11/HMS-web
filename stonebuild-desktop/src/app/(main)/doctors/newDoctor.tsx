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
  doctor_id: string;
  name: string;
  specialization: string;
  phone: string;
  email: string;
  qualification: string;
  consultation_fee: string;
  availability: string;
};

type NewDoctorProps = { editId: string | null };


  const Row = ({ label, required = false, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );

export default function NewDoctor({ editId }: NewDoctorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      doctor_id: "",
      name: "",
      specialization: "",
      phone: "",
      email: "",
      qualification: "",
      consultation_fee: "",
      availability: "Available",
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
      const res = await postAPI("/add-doctor", { data: { ...formData, doctor_id: editId ?? null } }, true);
      if (res.status === "success") {
        toast.success(editId ? "Doctor updated successfully" : "Doctor added successfully");
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
            Doctor Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="space-y-5">
              <Row label="Doctor ID" required>
                <FormField type="input" name="doctor_id" placeholder="Enter Doctor ID" />
              </Row>

              <Row label="Name" required>
                <FormField type="input" name="name" placeholder="Enter Full Name" className="capitalize" />
              </Row>

              <Row label="Specialization" required>
                <FormField type="input" name="specialization" placeholder="Enter Specialization" />
              </Row>

              <Row label="Phone" required>
                <FormField type="input" name="phone" placeholder="Enter Phone Number" className="only-number limit-10" />
              </Row>
            </div>

            <div className="space-y-5">
              <Row label="Email" required>
                <FormField type="input" name="email" placeholder="Enter Email" validation={validationRules.email} />
              </Row>

              <Row label="Qualification">
                <FormField type="input" name="qualification" placeholder="Enter Qualification" />
              </Row>

              <Row label="Consultation Fee" required>
                <FormField type="input" name="consultation_fee" placeholder="Enter Fee" className="only-number" />
              </Row>

              <Row label="Availability" required>
                <FormField
                  type="select"
                  name="availability"
                  options={[
                    { value: "Available", label: "Available" },
                    { value: "Not Available", label: "Not Available" },
                    { value: "On Leave", label: "On Leave" },
                  ]}
                  placeholder="Select Availability"
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
            {loading ? "Saving..." : editId ? "Update Doctor" : "Save Doctor"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this doctor?"
      />
    </FormProvider>
  );
}