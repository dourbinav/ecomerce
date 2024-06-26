import axios from "axios";
export function productid(id){
    return axios.get('https://dummyjson.com/products/'+id)
}
// KEY_ID=rzp_test_cJbQYnFjj2n20I
// KEY_SECRET=Ho3IJm01hzxIQbLkn8fBsD87

// export function razorpay(amount){
//     return axios.post('')
// }
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}





export async function displayRazorpay(totalamount,username) {
    
    
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  const result = await axios.post("https://api-pi-livid-33.vercel.app/payment/order",{
    amount:totalamount*100,
  });

  if (!result) {
      alert("Server error. Are you online?");
      return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
      key: "rzp_test_cJbQYnFjj2n20I", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: username,
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post("https://api-pi-livid-33.vercel.app/payment/success", data);

          alert(result.data.msg);
      },
      prefill: {
          name: username,
          email: "SoumyaDey@example.com",
          contact: "9999999999",
      },
      notes: {
          address: "Noida Office",
      },
      theme: {
          color: "#61dafb",
      },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}