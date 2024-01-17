
it('should calculate the monthly rate correctly', function () {
  const values ={
    amount: 10000,
    years: 9,
    rate:3.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('109.00')
});


it("should return a result with 2 decimal places", function() {
  const values= {
  amount: 10043,
  years: 8,
  rate: 5.8}

});

/// etc
