import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid
} from '@mui/material'
import { API_BASE_URL } from '../../constants'


function Dashboard() {

  const [userList, setUserList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${API_BASE_URL}/user`)
      .then(res => {
        setUserList(res?.data ?? [])
      })
      .catch(err => console.log(err))
  }, [])

  return <Grid container>
    <Grid item xs={8}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Display Name</TableCell>
              <TableCell>Email-id</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell align="right">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => navigate(`/home/${row.id}`)}
              >
                <TableCell component="th" scope="row">
                  {row.displayname}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phonenowork}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
}

export default Dashboard
