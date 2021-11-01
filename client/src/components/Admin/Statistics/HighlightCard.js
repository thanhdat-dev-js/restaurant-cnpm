import React from 'react';
import { CardContent, Typography, Card, makeStyles, Grid } from '@material-ui/core';



export default function HighlightCard() {
    return (
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="h2" variant="body2"><h1>Tổng doanh thu</h1></Typography>
                        <Typography component="h2" variant="body2"><h3><i>500000000</i></h3></Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2"><h2>Món ăn được gọi nhiều nhất</h2></Typography>
                        <Typography component="p" variant="body2"><h3><i>Sushi cá ngừ</i></h3></Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2"><h2>Tổng số bàn đã bị hủy</h2></Typography>
                        <Typography component="p" variant="body2"><h3><i>30</i></h3></Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}