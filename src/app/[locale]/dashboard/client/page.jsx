
import PersonalDetailsForm from "../../../../components/dashboard/client/PersonalDetailsForm";
import ChangePasswordForm from "../../../../components/dashboard/client/ChangePasswordForm";

export const metadata = {
  title: 'Profile Details - Client Dashboard',
  description: 'View and manage your profile',
};
export default function ClientDashboardPage() {
  
  return (
    <div className="space-y-6  px-8 py-2">
      {/* Page header */}
      <header className="rounded-lg ">
        <h1 className="text-4xl font-bold text-slate-900">Profile Information</h1>
        <p className="mt-3 text-slate-500 text-lg max-w-2xl">
          View and edit your personal details, contact information, and password.
        </p>
      </header>
      {/* Components: personal details and change password (client-side) */}
      <div className="space-y-6">
        {/* Personal details client component */}
        <PersonalDetailsForm />

        {/* Change password client component */}
        <ChangePasswordForm />
      </div>
    </div>
  );
}
