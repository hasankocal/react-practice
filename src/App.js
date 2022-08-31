import { useState } from 'react';
import './App.css';
import data from './MOCK_DATA.json'
import { Container, Input, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardComponent from './Card';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fca311',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [searchText, setSearchText] = useState('')
  return (
    <>
      <Container maxWidth="xl" >
        <Input type="text" placeholder="Search..." onChange={event => { setSearchText(event.target.value) }} />
        <Box>
          <Grid container spacing={2} direction="row"
            justifyContent="center"
            alignItems="center">


            {
              data.filter((val) => {
                if (searchText == "")
                  return val
                else if (val.first_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || val.last_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                  return val
                }
              }
              ).map((person, key) => {
                return <Grid item xs={3} key={key}>
                  <Item><CardComponent person={person} /></Item>
                </Grid>
              })
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
