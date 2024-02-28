import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import "./index.css";
import { useState } from "react";
import NoData from "../NoData";

const DataTable = ({ rowData = [], columnConfig = [] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate index range for current page
  const startIndex = page * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, rowData.length);

  // Get current page data
  const currentPageData = rowData.slice(startIndex, endIndex);

  return (
    <>
      {currentPageData.length ? (
        <TableContainer component={Paper}>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                {columnConfig.map((config) => {
                  return (
                    <TableCell key={`tableHeader_${config.fieldName}`}>
                      {config.headerName}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentPageData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columnConfig.map((config) => {
                    return (
                      <TableCell key={`tableColumn_${config.fieldName}`}>
                        {row[config.fieldName]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={rowData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default DataTable;
