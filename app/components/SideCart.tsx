import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CartItem as CartItemType} from "@/types/cart";
import CartItem from "./CartItem";

interface Props {
  open: boolean;
  onClose: () => void;
  cart: CartItemType[];
  onClearCart: () => void;
}

export default function SideCart({ open, onClose, onClearCart, cart }: Props) {
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-screen max-w-md bg-white p-6 shadow-xl">
              <Dialog.Title className="text-xl font-bold mb-6">
                Tu carrito
              </Dialog.Title>

              {cart.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío.</p>
              ) : (
                <div className="space-y-4">
                  <ul className="divide-y divide-gray-200">
                    {cart.map(({name,  price, quantity, id}) => (
                      <li key={id} className="py-4">
                        <CartItem name={name} price={price} quantity={quantity}/>
                      </li>
                    ))}
                  </ul>

                  <div className="text-right font-bold text-lg border-t pt-4 mt-4">
                    Total: ${total}
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => onClearCart()}
                      className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition cursor-pointer"
                    >
                      Limpiar carrito
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                      Finalizar compra
                    </button>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
