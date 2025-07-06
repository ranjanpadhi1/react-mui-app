import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';

export default function Help() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                <Grid size={{ lg: 12 }}>
                    <Card sx={{ p: 2, width: '100%' }}>
                        This is help content. You can add your cards or other components here.
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
