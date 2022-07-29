import React, {useState, useEffect} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { Button,Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material';
import { ListCoins } from "../../api";
import axios from 'axios';


const columns: GridColDef[] = [
    { field: 'symbol', headerName: 'Symbol', width: 90 },


    {
    field: 'name',
    headerName: 'Name',
    width: 130,
    editable: true,
    filterable: true,
    
    },
    {
    field: 'current_price',
    headerName: 'Price',
    type: 'number',
    width: 100,
    editable: true,
    },
    {
    field: 'price_change_percentage_24h',
    headerName: '24h % Change',
    type: 'number',
    width: 110,
    editable: true,
    },
    {
    field: 'high_24h',
    headerName: '24hr High',
    type: 'number',
    width: 110,
    editable: true,
    },
    {
    field: 'low_24h',
    headerName: '24hr Low',
    type: 'number',
    width: 110,
    editable: true,
    },
    {
    field: 'ath',
    headerName: 'All Time High',
    type: 'number',
    width: 110,
    editable: true,
    },
    {
    field: 'market_cap_rank',
    headerName: 'Rank',
    width: 90,
    editable: true,
    },
    {
    field: 'market_cap',
    headerName: 'Market cap',
    type: 'number',
    width: 130,
    editable: true,
    },
    {
    field: 'total_supply',
    headerName: 'Total Supply',
    type: 'number',
    width: 150,
    editable: true,
    },
    {
    field: 'circulating_supply',
    headerName: 'Circulating Supply',
    width: 150,
    type: 'number',
    editable: true,
    },

    
    
];



interface gridData{
    data:{
      id?:string;
    }
  }

export const DataTable = () => {
    const [coins, setCoins] = useState([]);
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
      }
    
      let handleClose = () => {
        setOpen(false)
      }
    
      useEffect(() => {
        axios
            .get(ListCoins())
            .then(response => {
                setCoins(response.data);
                console.log(response.data);
            })
                .catch(error => console.log(error));
        }, []);
    
      console.log(gridData) // a list of id's from checked rows

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h3>The global cryptocurrency market cap today is over $1.11 Trillion</h3>
            <DataGrid
                rows={coins}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
						{...coins}  
			/>
        </div>
            );
}