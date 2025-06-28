import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function OrderFilters() {
  return (
    <div className="flex items-center space-x-4">
      <Input placeholder="Buscar por nome do cliente" className="max-w-xs" />
      <Input placeholder="Nº Pedido" className="max-w-xs" />
      <Input placeholder="CPF" className="max-w-xs" />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="shipped">Enviado</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button>Filtrar</Button>
    </div>
  );
}
