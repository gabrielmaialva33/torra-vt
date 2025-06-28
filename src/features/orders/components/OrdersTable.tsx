import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const orders = [
  {
    name: 'Marcelo William de Barros',
    date: '09/12/2024',
    order: '28732-2923',
    store: '000019 - Americana',
    status: 'Enviado',
  },
  {
    name: 'Maria Paula de Souza Lima',
    date: '08/12/2024',
    order: '28732-2924',
    store: '000019 - Americana',
    status: 'Pendente',
  },
  {
    name: 'Joana de Almeida Campos Neto',
    date: '07/12/2024',
    order: '28732-2925',
    store: '000019 - Americana',
    status: 'Entregue',
  },
];

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Loja</TableHead>
          <TableHead>Pedido</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.order}>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.store}</TableCell>
            <TableCell>{order.order}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
