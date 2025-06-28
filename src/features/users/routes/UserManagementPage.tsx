import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { UsersTable } from '../components/UsersTable';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AddUserForm } from '../components/AddUserForm';

export function UserManagementPage() {
  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            User Management
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Adicionar Usuário</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Novo Usuário</DialogTitle>
              </DialogHeader>
              <AddUserForm />
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-6">
          <UsersTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
