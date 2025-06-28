import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function AddUserForm() {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" type="text" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" name="password" type="password" required />
      </div>
      <div>
        <Label htmlFor="permission">Permissão</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a permissão" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Administrador</SelectItem>
            <SelectItem value="manager">Gerente</SelectItem>
            <SelectItem value="employee">Colaborador</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="store">Loja</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a loja" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="americana">Loja Americanas</SelectItem>
            <SelectItem value="sorocaba">Loja Sorocaba</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Adicionar Usuário
      </Button>
    </form>
  );
}
