import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardComponent({ person }) {

    return (
        <Card sx={{ bgcolor: "#fca311" }}>
            <CardMedia
                component="img"
                height="140"
                image={person.avatar}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {person.first_name} {person.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">{person.email}
                    <p>{person.gender}</p>
                </Typography>
            </CardContent>
        </Card>
    );
}
