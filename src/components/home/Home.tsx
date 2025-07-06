import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                <Grid size={{ lg: 9 }}>
                    <Card sx={{ p: 2, width: '100%' }}>
                        This is home page content. You can add your cards or other components here.
                    </Card>
                </Grid>
                <Grid size={{ lg: 3 }}>
                    <Card sx={{ p: 2, width: '100%' }}>
                        More content can be added here
                    </Card>
                </Grid>
            </Grid>
             <Grid>
                <Card sx={{ p: 2, width: '100%' }}>
                    More content can be added here
                </Card>
            </Grid>
        </Box>
    );
}
