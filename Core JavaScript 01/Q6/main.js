function getProcessingFee(paymentMethod) {
    let fee;
  
    switch (paymentMethod.toLowerCase()) {
      case "credit":
        fee = "Processing fee: 2%";
        break;
      case "debit":
        fee = "Processing fee: 1.5%";
        break;
      case "paypal":
        fee = "Processing fee: 3%";
        break;
      default:
        fee = "Invalid payment method";
    }
  
    console.log(fee);
  }
  
  // Example usage:
  const paymentMethod = "credit";
  getProcessingFee(paymentMethod);  // Output: Processing fee: 2%
  