import {
  TextField,
  Paper,
  Box,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const DealCalculator = () => {
  const [formData, setFormData] = useState({
    arv: 250000,
    minProfit: 20000,
    purchaseCommissionCredit: 0,
    rehabCosts: 65000,
    realtorCommissions: 5,
    closingCosts: 6,
    interestRate: 12,
    hoa: 0,
    fees: 0,
    loanAmount: 110000,
    holdTime: 4,
    points: 3,
    purchasePrice: 140000,
  });

  function percentage(num, per) {
    return Math.round((num / 100) * per);
  }

  function formatNumber(number) {
    const num = Math.round(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${num}`;
  }

  function isNumber(evt) {
    const charCode = evt;
    console.log(
      "🚀 ~ file: profitCalculatorPage.js ~ line 21 ~ charCode: ",
      charCode
    );
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log("test");
      return false;
    }
    console.log("2");
    return true;
  }
  const handleKeyDown = (event) => {
    console.log(event);
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  };

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: parseInt(e.target.value, 10) });
  }

  const totalMoneyCosts =
    (percentage(formData.loanAmount, formData.interestRate) / 12) *
      formData.holdTime +
    percentage(formData.loanAmount, formData.points);

  const totalPropertyCosts =
    formData.holdTime * formData.hoa +
    formData.rehabCosts +
    percentage(formData.arv, formData.realtorCommissions) +
    percentage(formData.arv, formData.closingCosts) +
    percentage(formData.arv, formData.fees);

  const totalCosts = totalMoneyCosts + totalPropertyCosts;

  function createData(key, value) {
    return { key, value };
  }

  const rows = [
    createData(
      "Realtor Commissions",
      formatNumber(percentage(formData.arv, formData.realtorCommissions))
    ),
    createData(
      "Closing Costs",
      formatNumber(percentage(formData.arv, formData.closingCosts))
    ),
    createData(
      "Utilities, Taxes, and Insurance",
      formatNumber(percentage(formData.arv, formData.fees))
    ),
    createData("Monthly HOA", formatNumber(formData.holdTime * formData.hoa)),
    createData("Total Property Costs", formatNumber(totalPropertyCosts)),
    createData(
      "Points",
      formatNumber(percentage(formData.loanAmount, formData.points))
    ),
    createData(
      "Total Interest",
      formatNumber(
        (percentage(formData.loanAmount, formData.interestRate) / 12) *
          formData.holdTime
      )
    ),
    createData("Total Money Costs", formatNumber(totalMoneyCosts)),
    createData("Total Cost", formatNumber(totalCosts)),
    createData(
      "MAX OFFER",
      formatNumber(
        formData.arv +
          formData.purchaseCommissionCredit -
          formData.minProfit -
          totalCosts
      )
    ),
    createData(
      "Profit",
      formatNumber(formData.arv - totalCosts - formData.purchasePrice)
    ),
  ];

  return (
    <div className="flex flex-col sm:flex-row md:items-start md:justify-start flex-auto min-w-0">
      <Paper className="h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <form
            name="registerForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
          >
            <TextField
              className="mb-24"
              label="ARV ($)"
              type="number"
              name="arv"
              value={formData.arv}
              variant="outlined"
              onChange={onChange}
              onKeyDown={handleKeyDown}
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Minimum Profit ($)"
              value={formData.minProfit}
              type="number"
              name="minProfit"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Purchase Commission Credit ($)"
              value={formData.purchaseCommissionCredit}
              type="number"
              name="purchaseCommissionCredit"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Rehab Costs ($)"
              value={formData.rehabCosts}
              type="number"
              name="rehabCosts"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Realtor Commissions (%)"
              value={formData.realtorCommissions}
              type="number"
              name="realtorCommissions"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Closing Costs (%)"
              value={formData.closingCosts}
              type="number"
              name="closingCosts"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Utilities, Taxes, and Insurance (%)"
              value={formData.fees}
              type="number"
              name="fees"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Monthly HOA ($)"
              value={formData.hoa}
              type="number"
              name="hoa"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Loan Amount ($)"
              value={formData.loanAmount}
              type="number"
              name="loanAmount"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Hold Time (Months)"
              value={formData.holdTime}
              type="number"
              name="holdTime"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Interest Rate (%)"
              value={formData.interestRate}
              type="number"
              name="interestRate"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Points (%)"
              value={formData.points}
              type="number"
              name="points"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-24"
              label="Purchase Price ($)"
              value={formData.purchasePrice}
              type="number"
              name="purchasePrice"
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
          </form>
        </div>
      </Paper>

      <Box
        className="relative md:flex flex-auto items-center justify-center h-full  sm:p-48 md:p-64 lg:px-112 overflow-hidden"
        sx={{ backgroundColor: "primary.main" }}
      >
        <div className=" flex flex-col">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Key</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.key}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
};

export default DealCalculator;
