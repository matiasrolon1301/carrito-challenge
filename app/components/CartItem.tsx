interface Props {
  name: string;
  quantity: number;
  price: number;
}

export default function CartItem({ name, price, quantity }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">{name}</span>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>${price}</span>
          <span className="w-6 h-6 rounded-full bg-gray-200 text-center leading-6 text-xs font-semibold">
            {quantity}
          </span>
        </div>
      </div>
      <div className="font-semibold text-sm text-gray-800">
        ${price * quantity}
      </div>
    </div>
  );
}
