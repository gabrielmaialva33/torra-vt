import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const users = [
  {
    name: 'Marcelo William de Barros Costa',
    permission: 'Administrador',
    creationDate: '15 de jan de 2024',
    store: 'Todas',
    status: 'Ativo',
  },
  {
    name: 'Maria Paula de Souza Lima',
    permission: 'Gerente',
    creationDate: '15 de jan de 2024',
    store: 'Loja Americanas',
    status: 'Ativo',
  },
  {
    name: 'Joana de Almeida Campos Neto',
    permission: 'Colaborador',
    creationDate: '15 de jan de 2024',
    store: 'Loja Sorocaba',
    status: 'Ativo',
  },
];

export function UsersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Permissão</TableHead>
          <TableHead>Data de Criação</TableHead>
          <TableHead>Loja</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.name}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.permission}</TableCell>
            <TableCell>{user.creationDate}</TableCell>
            <TableCell>{user.store}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
