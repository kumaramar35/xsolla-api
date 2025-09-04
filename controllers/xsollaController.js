
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
    services:  [
    {
      "taxManagement": {
        "available": true,
        "description": "Helps businesses manage and calculate taxes accurately based on global and regional tax regulations."
      }
    },
    {
      "fraudMonitoringAndPrevention": {
        "available": true,
        "description": "Monitors transactions to detect and prevent fraudulent activities, safeguarding businesses and customers."
      }
    },
    {
      "globalAndRegionalCompliance": {
        "available": true,
        "description": "Ensures that businesses adhere to legal and regulatory requirements for both global and regional markets."
      }
    },
    {
      "refundManagement": {
        "available": true,
        "description": "Handles the process of issuing refunds to customers, improving customer satisfaction and retention."
      }
    },
    {
      "disputeManagement": {
        "available": true,
        "description": "Manages and resolves disputes between buyers and sellers regarding transactions, promoting transparency and trust."
      }
    },
    {
      "endUserSupport": {
        "available": true,
        "description": "Provides assistance and support to customers throughout their payment journey, enhancing the overall user experience."
      }
    }
  ]
  };

  res.json({
    success: true,
    data
  });
};
