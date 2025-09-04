
export const getXsollaData = (req, res) => {
  const data = {
    company: "Xsolla",
    description: "Xsolla is global merchant of record",
    stats: {
      paymentMethods: {
        count: "1,000+",
        description: "Available payment methods worldwide"
      },
      audience: {
        count: "50M",
        description: "Cumulative audience"
      },
      transactionFee: {
        fee: "5%",
        description: "Fee for transaction"
      }
    },
    services: {
      taxManagement: {
        available: true,
        description: "Helps businesses manage and calculate taxes accurately"
      }
    }
  };

  res.json({
    success: true,
    data
  });
};
