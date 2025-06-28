const lockers = [
  { id: 1, name: 'LCK-19-00001', orders: 34, available: true },
  { id: 2, name: 'LCK-19-00002', orders: 21, available: true },
  { id: 3, name: 'LCK-19-00003', orders: 8, available: false },
  { id: 4, name: 'LCK-19-00004', orders: 5, available: true },
  { id: 5, name: 'LCK-19-00005', orders: 15, available: true },
  { id: 6, name: 'LCK-19-00006', orders: 1, available: true },
  { id: 7, name: 'LCK-19-00007', orders: 23, available: true },
  { id: 8, name: 'LCK-19-00008', orders: 11, available: true },
  { id: 9, name: 'LCK-19-00009', orders: 0, available: true },
  { id: 10, name: 'LCK-19-00010', orders: 5, available: true },
  { id: 11, name: 'LCK-19-00011', orders: 11, available: true },
  { id: 12, name: 'LCK-19-00012', orders: 0, available: false },
];

export function LockerGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {lockers.map((locker) => (
        <div
          key={locker.id}
          className={`p-6 bg-white rounded-lg shadow-md ${
            locker.available ? '' : 'bg-gray-200'
          }`}
        >
          <h3 className="text-lg font-medium text-gray-700">{locker.name}</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {locker.orders}
          </p>
          <p className="text-sm text-gray-500">Armazenado</p>
        </div>
      ))}
    </div>
  );
}
