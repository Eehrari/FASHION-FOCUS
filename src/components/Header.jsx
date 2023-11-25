import { useRef } from 'react';

import CartModal from './CartModal.jsx';
import { ContextCart } from '../store/shopping-cart-context.jsx';
import { useContext } from 'react';

export default function Header() {
  const modal = useRef();
  const { items } = useContext(ContextCart);
  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}

        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Fashion Focus model" />
          <h1>Fashion Focus</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
