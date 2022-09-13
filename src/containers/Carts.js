import Cart from '../components/Cart';

const Carts = () => {
  
  const handDelete=(id)=>{
    console.log(`deleting ${id}`)
  }
  return (
    <>
      <Cart
      id="1"
        title="helador cofler"
        dateAdded="2009-10-29T21:26:05Z"
        precio="$ 2000"
        thumbnail="https://i.ibb.co/1zffcnp/oferta2.jpg" 
        handDelete={handDelete}
        />
      <Cart
      id="2"
        title="*helado de oreo)"
        dateAdded="2014-03-01T01:35:21Z"
        precio="$ 2000"
        thumbnail="https://i.ibb.co/6tgqCVf/oferta1.jpg"
        handDelete={handDelete}
        />
      <Cart
      id="3"
        title="helado de durazno"
        dateAdded="2019-09-25T18:16:56Z"
        precio="$ 2000"
        thumbnail="https://i.ibb.co/XCGfSYn/oferta3.jpg"
        handDelete={handDelete}
       />
      <Cart
      id="4"
        title="gallet cofler"
        dateAdded="2008-12-04T14:37:33Z"
        precio="$ 2000" 
        thumbnail="https://i.ibb.co/S541325/oferta5.jpg"
        handDelete={handDelete}
       />
      <Cart
      id="5"
        title="helado cofler"
        dateAdded="2021-10-23T00:15:00Z"
        precio="$ 2000"       
         thumbnail="https://i.ibb.co/S541325/oferta5.jpg" 
         handDelete={handDelete}
       />
    </>
  );
}

export default Carts;