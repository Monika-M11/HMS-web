"use client";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormField } from "@/app/utils/formField";
import { Button } from "@/components/ui/button";
import { postAPI } from "@/app/utils/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "@/app/utils/confirmationModal";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { theme } from "@/theme";
import { validationRules } from "@/app/utils/validations";

type FormValues = {
  patient_id: string;
  patient_name: string;
  gender: string;
  dob: string;
  age: string;
  phone: string;
  email: string;
  address: string;
  blood_group: string;
  emergency_contact: string;
  insurance_details: string;
};

type ContactFormProps = {
  editId: string | null;
};

export default function ContactForm({ editId }: ContactFormProps) {
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormValues>({
    defaultValues: {
      patient_id: "",
      patient_name: "",
      gender: "",
      dob: "",
      age: "",
      phone: "",
      email: "",
      address: "",
      blood_group: "",
      emergency_contact: "",
      insurance_details: "",
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
      const payload = {
        data: { ...formData, contact_id: editId ?? null },
      };

      const res = await postAPI("/add-contact", payload, true);

      if (res.status === "success") {
        toast.success(editId ? "Patient updated successfully 👍" : "Patient added successfully ✅");
        methods.reset();
        router.push(pathname);
      } else {
        toast.error(res.message || "Failed ❌");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  const fillFormValues = (data: any) => {
    Object.keys(data).forEach((key) => {
      if (methods.getValues(key as keyof FormValues) !== undefined) {
        methods.setValue(key as keyof FormValues, data[key] ?? "");
      }
    });
  };

  useEffect(() => {
    if (!editId) return;
    const fetchContact = async () => {
      const res = await postAPI("/get-contact-by-id", { data: { contact_id: editId } }, true);
      if (res.status === "success" && res.data) {
        fillFormValues(res.data);
      }
    };
    fetchContact();
  }, [editId]);

  const handleCancel = () => {
    methods.reset();
    setFormData(null);
    setShowConfirm(false);
    router.push(`${pathname}`);
  };

  const Row = ({
    label,
    required = false,
    children,
  }: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center gap-4">
      <label className="w-1/3 text-sm font-medium text-gray-600">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );

  const onInvalid = () => toast.error("Please fill all mandatory fields ❗");

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col py-6"
        style={{ background: theme.background }}
      >
        <div className="px-4 pb-10">
          <h2
            className="text-xl font-semibold mb-6"
            style={{ color: theme.primaryDark }}
          >
            Patient Details
          </h2>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {/* Left Column */}
            <div className="space-y-5">
              <Row label="Patient ID" required>
                <FormField type="input" name="patient_id" placeholder="Enter Patient ID" />
              </Row>

              <Row label="Name" required>
                <FormField
                  type="input"
                  name="patient_name"
                  placeholder="Enter Patient Name"
                  className="capitalize"
                  validation={validationRules.required("Patient Name")}
                />
              </Row>

              <Row label="Gender" required>
                <FormField
                  type="select"
                  name="gender"
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                  ]}
                  placeholder="Select Gender"
                />
              </Row>

              <Row label="DOB" required>
                <FormField type="datepicker" name="dob" />
              </Row>

              <Row label="Age">
                <FormField type="input" name="age" placeholder="Enter Age" className="only-number" />
              </Row>

              <Row label="Phone" required>
                <FormField
                  type="input"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="only-number limit-10"
                  validation={validationRules.phone}
                />
              </Row>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <Row label="Email">
                <FormField
                  type="input"
                  name="email"
                  placeholder="Enter Email"
                  validation={validationRules.email}
                />
              </Row>

              <Row label="Address">
                <FormField type="textarea" name="address" placeholder="Enter Address" />
              </Row>

              <Row label="Blood Group">
                <FormField
                  type="select"
                  name="blood_group"
                  options={[
                    { value: "A+", label: "A+" }, { value: "A-", label: "A-" },
                    { value: "B+", label: "B+" }, { value: "B-", label: "B-" },
                    { value: "AB+", label: "AB+" }, { value: "AB-", label: "AB-" },
                    { value: "O+", label: "O+" }, { value: "O-", label: "O-" },
                  ]}
                  placeholder="Select Blood Group"
                />
              </Row>

              <Row label="Emergency Contact">
                <FormField
                  type="input"
                  name="emergency_contact"
                  placeholder="Enter Emergency Contact"
                  className="only-number limit-10"
                />
              </Row>

              <Row label="Insurance Details">
                <FormField type="textarea" name="insurance_details" placeholder="Enter Insurance Details" />
              </Row>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-68 w-[calc(100%-16rem)] bg-white border-t py-3 px-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
            onClick={methods.handleSubmit(handleFormSubmit, onInvalid)}
          >
            {loading ? "Submitting..." : editId ? "Update Patient" : "Add Patient"}
          </Button>
        </footer>
      </form>

      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmSubmit}
        loading={loading}
        title="Confirm Submission"
        message="Are you sure you want to save this patient?"
      />
    </FormProvider>
  );
}