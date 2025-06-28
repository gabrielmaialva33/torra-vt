const orders = [
  {
    name: 'Marcelo William de Barros',
    date: '09/12/2024',
    order: '28732-2923',
    store: '000019 - Americana',
  },
  {
    name: 'Marcelo William de Barros',
    date: '09/12/2024',
    order: '28732-2923',
    store: '000019 - Americana',
  },
  {
    name: 'Marcelo William de Barros',
    date: '09/12/2024',
    order: '28732-2923',
    store: '000019 - Americana',
  },
  {
    name: 'Marcelo William de Barros',
    date: '09/12/2024',
    order: '28732-2923',
    store: '000019 - Americana',
  },
  {
    name: 'Marcelo William de Barros',
    date: '09/12/2024',
    order: '28732-2923',
    store: '000019 - Americana',
  },
];

export function RecentOrders() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-700">
        Recente Enviado para sua loja
      </h3>
      <div className="mt-4">
        <ul>
          {orders.map((order, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 border-b"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {order.name}
                </p>
                <p className="text-xs text-gray-500">{order.store}</p>
                <p className="text-xs text-gray-500">Pedido: {order.order}</p>
              </div>
              <p className="text-sm text-gray-500">{order.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
