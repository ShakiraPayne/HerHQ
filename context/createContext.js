import React, { createContext, useEffect, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const [products, setProducts] = useState({});

  useEffect(() => {
    console.log("useEffect")
    const cart = localStorage.getItem('cart');
    if(cart){
      setProducts( JSON.parse(cart));
    }
  }, []);

  const toggleCart = (pd) => {
    let data = products[pd.id];
    let toAd;
    if(data == undefined){
      pd.size = "S";
      pd.cart = !pd.cart;
      pd.quantity = 1;
      toAd = {...products, [pd.id]: pd}
      setProducts(toAd);
    }
    else{
      data.cart = !data.cart;
      toAd = {...products, [pd.id]: data}
      setProducts(toAd);
    }
    localStorage.setItem('cart', JSON.stringify(toAd));
  }

  const sizeUpdate = (id, size) => {
    let data = products[id];
    data.size = size;
    let toAd = {...products, [id]: data}
    setProducts(toAd);
    localStorage.setItem('cart', JSON.stringify(toAd));
  }

  const qtyUpdate = (id, qty) => {
    let data = products[id];
    data.quantity = qty;
    let toAd = {...products, [id]: data}
    setProducts(toAd);
    localStorage.setItem('cart', JSON.stringify(toAd));
  }

  const toggleWishlist = (pd) => {
    let toAd;
    let data = products[pd.id];
    if(data == undefined){
      pd.liked = !pd.liked;
      pd.quantity = 1;
      pd.size = "S";
      toAd = {...products, [pd.id]: pd}
      setProducts(toAd);
    }
    else{
      data.liked = !data.liked;
      toAd = {...products, [pd.id]: data}
      setProducts(toAd);
    }
    localStorage.setItem('cart', JSON.stringify(toAd));
  }

  return (
    <MyContext.Provider value={{ products, toggleCart, toggleWishlist, sizeUpdate, qtyUpdate }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };