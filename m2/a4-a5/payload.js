let orderPayload = {
  customerId: '12345',
  items: [
      {
          productId: 'abc',
          quantity: 2,
          price: 19.99
      },
      {
          productId: 'def',
          quantity: 1,
          price: 29.99
      }
  ],
  shipping: {
      address: 'Rua Principal, 123',
      city: 'São Paulo',
      state: 'SP',
      postalCode: '01234-567',
      country: 'Brasil'
  }
};


console.log(orderPayload);